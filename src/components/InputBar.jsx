import { useState } from "react";

const wrapperStyle = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "8px 10px",
  borderTop: "1px solid #EAECF0",
};

const inputStyle = {
  flex: 1,
  border: "1px solid #D0D5DD",
  borderRadius: "20px",
  padding: "10px 14px",
  fontSize: "14px",
  lineHeight: 1.4,
  outline: "none",
  resize: "none",
  minHeight: "40px",
  maxHeight: "96px",
};

const buttonStyle = {
  width: "32px",
  height: "32px",
  borderRadius: "999px",
  border: "none",
  background: "#1D9E75",
  color: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  flexShrink: 0,
};

export default function InputBar({ onSend, loading = false }) {
  const [inputText, setInputText] = useState("");

  const handleSend = async () => {
    const trimmed = inputText.trim();

    if (!trimmed || loading) {
      return;
    }

    await onSend?.(trimmed);
    setInputText("");
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSend();
      }}
      style={wrapperStyle}
    >
      <textarea
        value={inputText}
        placeholder="Type your message..."
        disabled={loading}
        rows={1}
        onChange={(event) => setInputText(event.target.value)}
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
          ...inputStyle,
          cursor: loading ? "not-allowed" : "text",
          background: loading ? "#F9FAFB" : "#FFFFFF",
        }}
      />

      <button
        type="submit"
        disabled={loading}
        aria-label="Send message"
        style={{
          ...buttonStyle,
          opacity: loading ? 0.6 : 1,
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M3 11.5L20.5 4L13 21L10.75 13.75L3 11.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5 13.5L20 4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </form>
  );
}
