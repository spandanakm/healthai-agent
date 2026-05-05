const wrapperStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  padding: "10px 12px 0",
};

const buttonStyle = {
  border: "1px solid #D0D5DD",
  borderRadius: "999px",
  padding: "8px 12px",
  background: "#FFFFFF",
  color: "#344054",
  fontSize: "12px",
  lineHeight: 1.3,
  cursor: "pointer",
};

export default function QuickButtons({ questions = [], loading = false, onSelect }) {
  if (questions.length === 0) {
    return null;
  }

  return (
    <div style={wrapperStyle}>
      {questions.map((questionText) => (
        <button
          key={questionText}
          type="button"
          onClick={() => onSelect?.(questionText)}
          disabled={loading}
          style={{
            ...buttonStyle,
            opacity: loading ? 0.6 : 1,
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {questionText}
        </button>
      ))}
    </div>
  );
}
