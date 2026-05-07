import { useRef, useState } from "react";

const gradientMap = {
  symptom: "linear-gradient(135deg,#6C63FF,#8B5CF6)",
  qa: "linear-gradient(135deg,#F59E0B,#EF4444)",
  mental: "linear-gradient(135deg,#EC4899,#F97316)",
  report: "linear-gradient(135deg,#10B981,#06B6D4)",
};

const accentMap = {
  symptom: "#6C63FF",
  qa: "#F59E0B",
  mental: "#EC4899",
  report: "#10B981",
};

const containerStyle = {
  background: "#12122a",
  padding: "10px 14px",
  display: "flex",
  alignItems: "flex-end",
  gap: "8px",
  borderTop: "1px solid rgba(255,255,255,0.08)",
};

export default function InputBar({ onSend, loading = false, mode = "symptom" }) {
  const [inputText, setInputText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const textareaRef = useRef(null);
  const accentColor = accentMap[mode] ?? accentMap.symptom;
  const buttonGradient = gradientMap[mode] ?? gradientMap.symptom;

  const autoResize = (element) => {
    if (!element) {
      return;
    }

    element.style.height = "38px";
    element.style.height = `${Math.min(element.scrollHeight, 80)}px`;
  };

  const handleSend = async () => {
    const trimmed = inputText.trim();

    if (!trimmed || loading) {
      return;
    }

    await onSend?.(trimmed);
    setInputText("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "38px";
    }
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSend();
      }}
      style={containerStyle}
    >
      <style>{`.input-bar-textarea::placeholder{color:#4a5568;}`}</style>
      <textarea
        ref={textareaRef}
        className="input-bar-textarea"
        value={inputText}
        placeholder="Type your message..."
        disabled={loading}
        rows={1}
        onChange={(event) => {
          setInputText(event.target.value);
          autoResize(event.target);
        }}
        onInput={(event) => autoResize(event.currentTarget)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={(event) => {
          if (
            event.key === "Enter" &&
            !event.shiftKey &&
            !event.nativeEvent.isComposing
          ) {
            event.preventDefault();
            handleSend();
          }
        }}
        style={{
          flex: 1,
          background: "#1e1e35",
          border: `1.5px solid ${
            isFocused ? `${accentColor}80` : "rgba(255,255,255,0.1)"
          }`,
          borderRadius: "14px",
          padding: "9px 14px",
          fontSize: "13px",
          resize: "none",
          minHeight: "38px",
          maxHeight: "80px",
          color: "#e2e8f0",
          outline: "none",
          overflowY: "auto",
          lineHeight: 1.45,
          cursor: loading ? "not-allowed" : "text",
          boxSizing: "border-box",
        }}
      />

      <button
        type="submit"
        disabled={loading}
        aria-label="Send message"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "14px",
          border: "none",
          cursor: loading ? "not-allowed" : "pointer",
          background: buttonGradient,
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          opacity: loading ? 0.3 : 1,
          transition: "all 0.2s",
          transform: isHovered && !loading ? "scale(1.04)" : "scale(1)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <i
          className="ti ti-send"
          aria-hidden="true"
          style={{ fontSize: "17px", color: "#ffffff", lineHeight: 1 }}
        />
      </button>
    </form>
  );
}
