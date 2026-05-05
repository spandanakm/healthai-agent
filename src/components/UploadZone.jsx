import { useRef, useState } from "react";

const ACCEPTED_TYPES = "image/*,.txt,.csv,.md,.json,.xml";
const uploadBorderColor = "#B7DCCF";

const uploadBoxStyle = {
  border: `2px dashed ${uploadBorderColor}`,
  borderRadius: "18px",
  padding: "20px 18px",
  background: "#F8FCFA",
  color: "#344054",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  textAlign: "center",
  cursor: "pointer",
  transition: "border-color 180ms ease, background 180ms ease, box-shadow 180ms ease",
};

const iconStyle = {
  width: "44px",
  height: "44px",
  borderRadius: "999px",
  background: "#E8F7F1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#1D9E75",
};

export default function UploadZone({ onFile, attachedFile, onClear }) {
  const inputRef = useRef(null);
  const dragDepthRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (file) => {
    if (file) {
      onFile?.(file);
    }
    setIsDragging(false);
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
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 14px",
            borderRadius: "999px",
            background: "#E8F7F1",
            color: "#1D9E75",
            border: "1px solid #B8E5D4",
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          <span>{`\uD83D\uDCCE ${attachedFile.name}`}</span>
          <button
            type="button"
            onClick={onClear}
            aria-label="Remove attached file"
            style={{
              border: "none",
              background: "transparent",
              color: "#1D9E75",
              cursor: "pointer",
              fontSize: "16px",
              lineHeight: 1,
              padding: 0,
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
          ...uploadBoxStyle,
          borderColor: isDragging ? "#1D9E75" : uploadBorderColor,
          background: isDragging ? "#ECFDF3" : uploadBoxStyle.background,
          boxShadow: isDragging ? "0 0 0 4px rgba(29, 158, 117, 0.12)" : "none",
        }}
      >
        <div style={iconStyle} aria-hidden="true">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 16V5M12 5L7.5 9.5M12 5L16.5 9.5M5 19H19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div
          style={{
            fontSize: "14px",
            fontWeight: 600,
            color: "#1D2939",
          }}
        >
          Upload a medical report image or text file
        </div>
      </div>
    </div>
  );
}
