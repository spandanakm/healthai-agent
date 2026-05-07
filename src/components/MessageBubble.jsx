const TAB_COLORS = {
  symptom: {
    accent: "#a78bfa",
    secBg: "#2d1f5e",
    secTxt: "#ddd6fe",
    warnBg: "#2d2010",
    warnC: "#fcd34d",
    warnBorder: "#f59e0b",
    dotC: "#a78bfa",
    gradient: "linear-gradient(135deg,#6C63FF,#8B5CF6)",
  },
  qa: {
    accent: "#fbbf24",
    secBg: "#2d2010",
    secTxt: "#fde68a",
    warnBg: "#2d1515",
    warnC: "#fecaca",
    warnBorder: "#ef4444",
    dotC: "#fbbf24",
    gradient: "linear-gradient(135deg,#F59E0B,#EF4444)",
  },
  mental: {
    accent: "#f472b6",
    secBg: "#341127",
    secTxt: "#fbcfe8",
    warnBg: "#2d1020",
    warnC: "#fda4af",
    warnBorder: "#ec4899",
    dotC: "#f472b6",
    gradient: "linear-gradient(135deg,#EC4899,#F97316)",
  },
  report: {
    accent: "#34d399",
    secBg: "#10312d",
    secTxt: "#bbf7d0",
    warnBg: "#112b33",
    warnC: "#a5f3fc",
    warnBorder: "#06b6d4",
    dotC: "#34d399",
    gradient: "linear-gradient(135deg,#10B981,#06B6D4)",
  },
};

const SEVERITY_STYLES = {
  Serious: {
    color: "#fecaca",
    background: "#391416",
    borderColor: "#ef4444",
  },
  Moderate: {
    color: "#fde68a",
    background: "#34250d",
    borderColor: "#f59e0b",
  },
  Mild: {
    color: "#bbf7d0",
    background: "#102b1d",
    borderColor: "#10b981",
  },
};

function isEmojiHeader(line) {
  return /^(?:\p{Extended_Pictographic}|\p{Emoji_Presentation})\s/u.test(line);
}

function parseKeyValueLine(line) {
  const trimmed = line.trim();

  if (!trimmed.startsWith("|") || !trimmed.endsWith("|")) {
    return null;
  }

  const parts = trimmed
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length !== 2) {
    return null;
  }

  return { key: parts[0], value: parts[1] };
}

function renderAssistantLines(content, palette) {
  const lines = String(content || "").split("\n");
  const blocks = [];
  let keyValueBuffer = [];

  const flushKeyValues = () => {
    if (keyValueBuffer.length === 0) {
      return;
    }

    blocks.push(
      <div key={`kv-${blocks.length}`} className="message-kv-list">
        {keyValueBuffer.map((item, index) => (
          <div key={`${item.key}-${index}`} className="message-kv-row">
            <div className="message-kv-key">{item.key}</div>
            <div className="message-kv-value">{item.value}</div>
          </div>
        ))}
      </div>,
    );
    keyValueBuffer = [];
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    const keyValue = parseKeyValueLine(trimmed);

    if (keyValue) {
      keyValueBuffer.push(keyValue);
      return;
    }

    flushKeyValues();

    if (!trimmed) {
      blocks.push(<div key={`space-${index}`} style={{ height: "4px" }} />);
      return;
    }

    if (trimmed.startsWith("- ") || trimmed.startsWith("\u2022 ")) {
      blocks.push(
        <div key={`bullet-${index}`} className="message-bullet">
          <span
            className="message-bullet__dot"
            style={{
              background: palette.dotC,
              boxShadow: `0 0 0 3px ${palette.accent}22`,
            }}
          />
          <div className="message-paragraph">{trimmed.slice(2).trim()}</div>
        </div>,
      );
      return;
    }

    if (isEmojiHeader(trimmed)) {
      blocks.push(
        <div key={`header-${index}`} className="message-tag" style={{ background: palette.secBg, color: palette.secTxt }}>
          {trimmed}
        </div>,
      );
      return;
    }

    if (
      trimmed.includes("\u26A0\uFE0F") ||
      trimmed.toLowerCase().includes("always consult")
    ) {
      blocks.push(
        <div
          key={`warning-${index}`}
          className="message-warning"
          style={{
            background: palette.warnBg,
            color: palette.warnC,
            borderLeft: `3px solid ${palette.warnBorder}`,
          }}
        >
          {trimmed}
        </div>,
      );
      return;
    }

    blocks.push(
      <div key={`text-${index}`} className="message-paragraph">
        {trimmed}
      </div>,
    );
  });

  flushKeyValues();

  return blocks;
}

export default function MessageBubble({
  message,
  mode,
  onSuggestionClick,
  loading = false,
}) {
  const role = message?.role;
  const content = message?.content;
  const fileName = message?.fileName ?? message?.name;
  const sev = message?.sev ?? message?.severity;
  const suggestions = Array.isArray(message?.suggestions)
    ? message.suggestions
    : [];
  const palette = TAB_COLORS[mode] ?? TAB_COLORS.symptom;
  const severityStyle = sev ? SEVERITY_STYLES[sev] : null;

  if (role === "file") {
    return (
      <div className="message-row file">
        <div
          aria-hidden="true"
          className="message-avatar file"
          style={{ color: palette.accent }}
        >
          <i className="ti ti-file-check" />
        </div>

        <div className="message-stack">
          <div className="message-bubble file">
            <div className="message-tag" style={{ background: palette.secBg, color: palette.secTxt }}>
              Report attached
            </div>
            <div className="message-body">
              <div className="message-paragraph">{fileName || ""}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (role === "user") {
    return (
      <div className="message-row user">
        <div
          aria-hidden="true"
          className="message-avatar user"
          style={{ background: palette.gradient, color: "#ffffff" }}
        >
          <i className="ti ti-user" />
        </div>

        <div className="message-stack">
          <div
            className="message-bubble user"
            style={{ background: palette.gradient, borderColor: `${palette.accent}55` }}
          >
            {content}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="message-row assistant">
      <div
        aria-hidden="true"
        className="message-avatar assistant"
        style={{ color: palette.accent }}
      >
        <i className="ti ti-robot" />
      </div>

      <div className="message-stack">
        <div className="message-bubble assistant">
          {severityStyle ? (
            <div
              className="message-severity"
              style={{
                color: severityStyle.color,
                background: severityStyle.background,
                border: `1px solid ${severityStyle.borderColor}`,
              }}
            >
              <i className="ti ti-activity" aria-hidden="true" />
              <span>{sev}</span>
            </div>
          ) : null}

          <div className="message-body">{renderAssistantLines(content, palette)}</div>
        </div>

        {suggestions.length > 0 ? (
          <div className="suggestion-row">
            {suggestions.map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => onSuggestionClick?.(chip)}
                disabled={loading}
                className="suggestion-chip"
                style={{ "--chip-accent": palette.accent, color: palette.accent }}
              >
                {chip}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
