import { useRef, useState } from "react";

const ACCEPTED_TYPES = "image/*,text/*,application/json,.txt,.csv,.md";
const TEAL = "#1D9E75";
const LIGHT_TEAL = "#E8F7F1";

function formatFileSize(sizeInBytes) {
  const kb = Number(sizeInBytes || 0) / 1024;
  return `${Math.max(kb, 0.1).toFixed(kb >= 10 ? 0 : 1)} KB`;
}

export default function UploadZone({ onFile, attachedFile, onClear }) {
  const inputRef = useRef(null);
  const dragDepthRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = async (file) => {
    try {
      if (file) {
        await onFile?.(file);
      }
    } catch (error) {
      console.error("Failed to attach file:", error);
    } finally {
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
      <div style={{ paddingTop: "10px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
            border: `2px solid ${TEAL}`,
            borderRadius: "12px",
            padding: "16px",
            background: "#F8FCFA",
          }}
        >
          <div
            style={{
              minWidth: 0,
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "999px",
                background: LIGHT_TEAL,
                color: TEAL,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                fontSize: "14px",
                fontWeight: 700,
              }}
            >
              {"\u2713"}
            </span>

            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  color: "#101828",
                  fontSize: "14px",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {attachedFile.name}
              </div>
              <div
                style={{
                  color: "#667085",
                  fontSize: "12px",
                  marginTop: "2px",
                }}
              >
                {formatFileSize(attachedFile.size)}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClear}
            aria-label="Remove attached file"
            style={{
              border: "none",
              background: "transparent",
              color: TEAL,
              cursor: "pointer",
              fontSize: "20px",
              lineHeight: 1,
              padding: 0,
              flexShrink: 0,
            }}
          >
            {"\u2715"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: "10px" }}>
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
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        style={{
          border: `2px ${isDragging ? "solid" : "dashed"} ${TEAL}`,
          borderRadius: "12px",
          padding: "16px",
          background: isDragging ? "#ECFDF3" : "#FFFFFF",
          color: "#344054",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          textAlign: "center",
          cursor: "pointer",
          transition: "border-color 180ms ease, background 180ms ease, box-shadow 180ms ease",
          boxShadow: isDragging ? "0 0 0 4px rgba(29, 158, 117, 0.12)" : "none",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            fontSize: "24px",
            lineHeight: 1,
          }}
        >
          {"\uD83D\uDCCE"}
        </div>

        <div
          style={{
            fontSize: "16px",
            fontWeight: 600,
            color: "#101828",
          }}
        >
          Upload Medical Report
        </div>
        <div
          style={{
            fontSize: "13px",
            lineHeight: 1.5,
            color: "#667085",
          }}
        >
          Supports: images (JPG, PNG) and text files (TXT, CSV, PDF text)
        </div>
      </div>
    </div>
  );
}
