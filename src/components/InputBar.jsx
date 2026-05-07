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

export default function InputBar({ onSend, loading = false, mode = "symptom" }) {
  const [inputText, setInputText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const textareaRef = useRef(null);
  const accentColor = accentMap[mode] ?? accentMap.symptom;
  const buttonGradient = gradientMap[mode] ?? gradientMap.symptom;

  const autoResize = (element) => {
    if (!element) {
      return;
    }

    element.style.height = "58px";
    element.style.height = `${Math.min(element.scrollHeight, 160)}px`;
  };

  const handleSend = async () => {
    const trimmed = inputText.trim();

    if (!trimmed || loading) {
      return;
    }

    await onSend?.(trimmed);
    setInputText("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "58px";
    }
  };

  return (
    <form
      className="input-bar"
      onSubmit={(event) => {
        event.preventDefault();
        handleSend();
      }}
    >
      <textarea
        ref={textareaRef}
        className="input-bar__field"
        value={inputText}
        placeholder="Type your message..."
        disabled={loading}
        rows={1}
        onChange={(event) => {
          setInputText(event.target.value);
          autoResize(event.target);
        }}
        onInput={(event) => autoResize(event.currentTarget)}
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
          "--input-accent": accentColor,
          "--input-border": `${accentColor}40`,
          cursor: loading ? "not-allowed" : "text",
        }}
      />

      <button
        type="submit"
        disabled={loading}
        aria-label="Send message"
        className="send-button"
        style={{
          background: buttonGradient,
          opacity: loading ? 0.35 : 1,
          transform: isHovered && !loading ? "scale(1.04)" : "scale(1)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <i
          className="ti ti-send"
          aria-hidden="true"
          style={{ fontSize: "20px", color: "#ffffff", lineHeight: 1 }}
        />
      </button>
    </form>
  );
}
