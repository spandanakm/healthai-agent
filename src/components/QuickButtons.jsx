const TAB_COLORS = {
  symptom: "#a78bfa",
  qa: "#fbbf24",
  mental: "#f472b6",
  report: "#34D399",
};

const wrapperStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
};

export default function QuickButtons({
  questions = [],
  suggestions = [],
  loading = false,
  onSelect,
  mode = "symptom",
  style,
}) {
  const items = suggestions.length > 0 ? suggestions : questions;
  const accent = TAB_COLORS[mode] ?? TAB_COLORS.symptom;

  if (items.length === 0) {
    return null;
  }

  return (
    <div style={{ ...wrapperStyle, ...style }}>
      {items.map((label) => (
        <button
          key={label}
          type="button"
          onClick={() => onSelect?.(label)}
          disabled={loading}
          style={{
            border: `1px solid ${accent}`,
            borderRadius: "20px",
            padding: "6px 14px",
            background: "transparent",
            color: accent,
            fontSize: "11px",
            lineHeight: 1.3,
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.6 : 1,
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
