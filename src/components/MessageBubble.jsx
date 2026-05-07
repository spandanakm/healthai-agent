const POP_ANIMATION_NAME = "messageBubblePop";

const TAB_COLORS = {
  symptom: {
    accent: "#a78bfa",
    secBg: "#2d1f5e",
    secTxt: "#c4b5fd",
    warnBg: "#2d2010",
    warnC: "#fbbf24",
    warnBorder: "#F59E0B",
    dotC: "#a78bfa",
    gradient: "linear-gradient(135deg,#6C63FF,#8B5CF6)",
  },
  qa: {
    accent: "#fbbf24",
    secBg: "#2d2010",
    secTxt: "#fcd34d",
    warnBg: "#2d1515",
    warnC: "#fca5a5",
    warnBorder: "#EF4444",
    dotC: "#fbbf24",
    gradient: "linear-gradient(135deg,#F59E0B,#EF4444)",
  },
  mental: {
    accent: "#f472b6",
    secBg: "#2d1030",
    secTxt: "#f9a8d4",
    warnBg: "#2d1020",
    warnC: "#fda4af",
    warnBorder: "#EC4899",
    dotC: "#f472b6",
    gradient: "linear-gradient(135deg,#EC4899,#F97316)",
  },
  report: {
    accent: "#34D399",
    secBg: "#0d2030",
    secTxt: "#6ee7b7",
    warnBg: "#0d2030",
    warnC: "#67e8f9",
    warnBorder: "#06B6D4",
    dotC: "#34D399",
    gradient: "linear-gradient(135deg,#10B981,#06B6D4)",
  },
};

const SEVERITY_STYLES = {
  Serious: {
    color: "#EF4444",
    background: "#2d1010",
    borderColor: "#EF4444",
  },
  Moderate: {
    color: "#F59E0B",
    background: "#2d2010",
    borderColor: "#F59E0B",
  },
  Mild: {
    color: "#10B981",
    background: "#0d2018",
    borderColor: "#10B981",
  },
};

function isEmojiHeader(line) {
  return /^(?:\p{Extended_Pictographic}|\p{Emoji_Presentation})\s/u.test(line);
}

function renderAssistantLine(line, index, palette) {
  const trimmedLine = line.trim();

  if (!trimmedLine) {
    return <div key={`space-${index}`} style={{ height: "4px" }} />;
  }

  if (trimmedLine.startsWith("- ") || trimmedLine.startsWith("\u2022 ")) {
    return (
      <div
        key={`bullet-${index}`}
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "8px",
          margin: "0 0 4px",
        }}
      >
        <span
          aria-hidden="true"
          style={{
            width: "7px",
            height: "7px",
            borderRadius: "999px",
            background: palette.dotC,
            flexShrink: 0,
            marginTop: "6px",
            boxShadow: `0 0 0 3px ${palette.accent}20`,
          }}
        />
        <div style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.6 }}>
          {trimmedLine.slice(2).trim()}
        </div>
      </div>
    );
  }

  if (isEmojiHeader(trimmedLine)) {
    return (
      <div key={`header-${index}`} style={{ margin: "4px 0" }}>
        <div
          style={{
            display: "inline-block",
            background: palette.secBg,
            color: palette.secTxt,
            fontSize: "11px",
            lineHeight: 1.4,
            padding: "3px 10px",
            borderRadius: "6px",
          }}
        >
          {trimmedLine}
        </div>
      </div>
    );
  }

  if (
    trimmedLine.includes("\u26A0\uFE0F") ||
    trimmedLine.toLowerCase().includes("always consult")
  ) {
    return (
      <div
        key={`warning-${index}`}
        style={{
          background: palette.warnBg,
          color: palette.warnC,
          borderLeft: `3px solid ${palette.warnBorder}`,
          padding: "6px 10px",
          borderRadius: "8px",
          fontSize: "11px",
          lineHeight: 1.55,
          margin: "2px 0",
        }}
      >
        {trimmedLine}
      </div>
    );
  }

  return (
    <div
      key={`text-${index}`}
      style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.6 }}
    >
      {trimmedLine}
    </div>
  );
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
  const rowStyle = {
    display: "flex",
    flexDirection: role === "user" ? "row-reverse" : "row",
    justifyContent: role === "user" ? "flex-start" : "flex-start",
    alignItems: "flex-end",
    gap: "8px",
    animation: `${POP_ANIMATION_NAME} 0.22s cubic-bezier(0.34,1.56,0.64,1)`,
  };

  if (role === "file") {
    return (
      <>
        <style>
          {`
            @keyframes ${POP_ANIMATION_NAME} {
              from {
                opacity: 0;
                transform: scale(0.96) translateY(8px);
              }
              to {
                opacity: 1;
                transform: scale(1) translateY(0);
              }
            }
          `}
        </style>
        <div style={rowStyle}>
          <div
            aria-hidden="true"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              background: "#1e1e35",
              border: `1px solid ${palette.accent}40`,
              color: palette.accent,
              fontSize: "16px",
            }}
          >
            <i className="ti ti-robot" />
          </div>

          <div
            style={{
              background: "#1e1e35",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "4px 18px 18px 18px",
              color: "#e2e8f0",
              padding: "10px 12px",
              maxWidth: "320px",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: palette.accent,
                fontSize: "13px",
                fontWeight: 600,
                lineHeight: 1.5,
              }}
            >
              <i className="ti ti-file-check" aria-hidden="true" />
              <span>{fileName || ""}</span>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (role === "user") {
    return (
      <>
        <style>
          {`
            @keyframes ${POP_ANIMATION_NAME} {
              from {
                opacity: 0;
                transform: scale(0.96) translateY(8px);
              }
              to {
                opacity: 1;
                transform: scale(1) translateY(0);
              }
            }
          `}
        </style>
        <div style={rowStyle}>
          <div
            aria-hidden="true"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              background: palette.gradient,
              color: "#ffffff",
              fontSize: "16px",
            }}
          >
            <i className="ti ti-user" />
          </div>

          <div
            style={{
              background: palette.gradient,
              color: "#ffffff",
              padding: "10px 12px",
              borderRadius: "18px 4px 18px 18px",
              maxWidth: "320px",
              fontSize: "13px",
              lineHeight: 1.6,
              whiteSpace: "pre-wrap",
              boxShadow: "0 10px 24px rgba(0,0,0,0.22)",
            }}
          >
            {content}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>
        {`
          @keyframes ${POP_ANIMATION_NAME} {
            from {
              opacity: 0;
              transform: scale(0.96) translateY(8px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
        `}
      </style>
      <div style={rowStyle}>
        <div
          aria-hidden="true"
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            background: "#1e1e35",
            border: `1px solid ${palette.accent}40`,
            color: palette.accent,
            fontSize: "16px",
          }}
        >
          <i className="ti ti-robot" />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            maxWidth: "320px",
          }}
        >
          <div
            style={{
              background: "#1e1e35",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "4px 18px 18px 18px",
              color: "#e2e8f0",
              padding: "10px 12px",
            }}
          >
            {severityStyle ? (
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "10px",
                  padding: "3px 10px",
                  borderRadius: "20px",
                  border: `1px solid ${severityStyle.borderColor}`,
                  color: severityStyle.color,
                  background: severityStyle.background,
                  marginBottom: "8px",
                }}
              >
                <i className="ti ti-activity" aria-hidden="true" />
                <span>{sev}</span>
              </div>
            ) : null}

            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {String(content || "")
                .split("\n")
                .map((line, index) => renderAssistantLine(line, index, palette))}
            </div>
          </div>
          {suggestions.length > 0 ? (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              {suggestions.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => onSuggestionClick?.(chip)}
                  disabled={loading}
                  style={{
                    fontSize: "11px",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    border: `1px solid ${palette.accent}`,
                    color: palette.accent,
                    background: "transparent",
                    cursor: loading ? "not-allowed" : "pointer",
                    opacity: loading ? 0.6 : 1,
                  }}
                >
                  {chip}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
