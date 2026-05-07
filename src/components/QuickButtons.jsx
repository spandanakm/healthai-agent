const TAB_COLORS = {
  symptom: "#a78bfa",
  qa: "#fbbf24",
  mental: "#f472b6",
  report: "#34D399",
};

export default function QuickButtons({
  questions = [],
  suggestions = [],
  loading = false,
  onSelect,
  mode = "symptom",
}) {
  const items = suggestions.length > 0 ? suggestions : questions;
  const accent = TAB_COLORS[mode] ?? TAB_COLORS.symptom;

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="quick-buttons">
      {items.map((label) => (
        <button
          key={label}
          type="button"
          onClick={() => onSelect?.(label)}
          disabled={loading}
          className="quick-button"
          style={{ "--chip-accent": accent, color: accent, borderColor: `${accent}66` }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
