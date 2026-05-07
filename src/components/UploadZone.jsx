import { useRef, useState } from "react";

const ACCEPTED_TYPES = "text/*,.txt,.csv,.md,application/pdf,.pdf";

function formatFileSize(sizeInBytes) {
  const kb = Number(sizeInBytes || 0) / 1024;
  return `${Math.max(kb, 0.1).toFixed(kb >= 10 ? 0 : 1)} KB`;
}

function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Failed to read file."));
    reader.readAsText(file);
  });
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Failed to read file."));
    reader.readAsDataURL(file);
  });
}

function readFileAsArrayBuffer(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Failed to read file."));
    reader.readAsArrayBuffer(file);
  });
}

async function extractPdfText(file) {
  const pdfjs = await import("pdfjs-dist/legacy/webpack.mjs");

  const buffer = await readFileAsArrayBuffer(file);
  const pdf = await pdfjs.getDocument({ data: new Uint8Array(buffer) }).promise;
  const pages = [];

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const textContent = await page.getTextContent();
    const pageText = textContent.items
      .map((item) => ("str" in item ? item.str : ""))
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();

    if (pageText) {
      pages.push(pageText);
    }
  }

  return pages.join("\n\n");
}

export default function UploadZone({ attachedFile, onFile, onClear }) {
  const inputRef = useRef(null);
  const dragDepthRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleFile = async (file) => {
    if (!file) {
      setIsDragging(false);
      return;
    }

    try {
      const isPdf = file.type === "application/pdf" || /\.pdf$/i.test(file.name);
      const isImage = file.type.startsWith("image/");
      const isText =
        file.type.startsWith("text/") || /\.(txt|csv|md)$/i.test(file.name);

      if (isPdf) {
        const text = await extractPdfText(file);
        await onFile?.({
          name: file.name,
          size: file.size,
          data: text,
          type: "pdf",
        });
        return;
      }

      if (isText) {
        const text = await readFileAsText(file);
        await onFile?.({
          name: file.name,
          size: file.size,
          data: text,
          type: "text",
        });
        return;
      }

      if (isImage) {
        const base64 = await readFileAsDataUrl(file);
        await onFile?.({
          name: file.name,
          size: file.size,
          data: base64,
          type: "image",
          mimeType: file.type,
        });
        return;
      }

      alert("Only text, PDF, and image files are supported");
    } catch (error) {
      console.error("Failed to attach file:", error);
      alert("Failed to read file.");
    } finally {
      dragDepthRef.current = 0;
      setIsDragging(false);
    }
  };

  const handleInputChange = (event) => {
    handleFile(event.target.files?.[0] ?? null);
    event.target.value = "";
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
    dragDepthRef.current += 1;
    setIsDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    dragDepthRef.current = Math.max(0, dragDepthRef.current - 1);
    if (dragDepthRef.current === 0) {
      setIsDragging(false);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    dragDepthRef.current = 0;
    handleFile(event.dataTransfer.files?.[0] ?? null);
  };

  if (attachedFile) {
    return (
      <div className="attached-file">
        <div className="attached-file__meta">
          <i
            className="ti ti-file-check"
            aria-hidden="true"
            style={{ fontSize: "18px", color: "#34D399", flexShrink: 0 }}
          />
          <span className="attached-file__name">
            {attachedFile.name} ({formatFileSize(attachedFile.size)})
          </span>
        </div>

        <button
          type="button"
          onClick={onClear}
          aria-label="Clear attached file"
          className="attached-file__clear"
        >
          {"\u00D7"}
        </button>
      </div>
    );
  }

  const isActive = isDragging || isHovered;

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept={ACCEPTED_TYPES}
        onChange={handleInputChange}
        style={{ display: "none" }}
      />

      <div
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            inputRef.current?.click();
          }
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`upload-zone${isActive ? " is-active" : ""}`}
        style={{ borderStyle: isDragging ? "solid" : "dashed" }}
      >
        <div className="upload-zone__lead">
          <div className="upload-zone__icon">
            <i className="ti ti-cloud-upload" aria-hidden="true" />
          </div>
          <div>
            <div className="upload-zone__title">Upload Medical Report</div>
            <div className="upload-zone__meta">
              TXT, CSV, MD, PDF files supported. Drag and drop or tap to browse.
            </div>
          </div>
        </div>

        <div className="upload-zone__cta">Choose file</div>
      </div>
    </>
  );
}
