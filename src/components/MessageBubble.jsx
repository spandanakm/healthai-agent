const baseTextStyle = {
  fontSize: "13px",
  lineHeight: 1.55,
  whiteSpace: "pre-wrap",
};

const assistantTextStyle = {
  fontSize: "13px",
  lineHeight: 1.55,
};

const avatarStyle = {
  width: "32px",
  height: "32px",
  borderRadius: "999px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  fontSize: "13px",
  fontWeight: 600,
};

const assistantHeaderPattern = /^(\p{Emoji_Presentation}|\p{Extended_Pictographic})\s+[A-Z0-9][A-Z0-9\s&/:-]*$/u;

const assistantBlockStyle = {
  margin: 0,
  fontSize: "13px",
  lineHeight: 1.55,
};

const assistantListRowStyle = {
  display: "flex",
  alignItems: "flex-start",
  gap: "8px",
  margin: 0,
  fontSize: "13px",
  lineHeight: 1.55,
};

const assistantBulletStyle = {
  width: "8px",
  height: "8px",
  borderRadius: "999px",
  background: "#1D9E75",
  flexShrink: 0,
  marginTop: "6px",
};

function renderAssistantContent(content) {
  return String(content || "").split("\n").map((rawLine, index) => {
    const line = rawLine.trim();

    if (!line) {
      return <div key={`assistant-spacer-${index}`} style={{ height: "8px" }} />;
    }

    if (assistantHeaderPattern.test(line)) {
      return (
        <div
          key={`assistant-header-${index}`}
          style={{
            ...assistantBlockStyle,
            fontWeight: 700,
            background: "#E8F7F1",
            padding: "6px 10px",
            borderRadius: "8px",
            marginBottom: "6px",
          }}
        >
          {line}
        </div>
      );
    }

    if (line.startsWith("**") && line.endsWith("**") && line.length > 4) {
      return (
        <div
          key={`assistant-bold-${index}`}
          style={{ ...assistantBlockStyle, fontWeight: 700 }}
        >
          {line.slice(2, -2)}
        </div>
      );
    }

    if (line.startsWith("- ") || line.startsWith("\u2022 ")) {
      return (
        <div key={`assistant-list-${index}`} style={assistantListRowStyle}>
          <span aria-hidden="true" style={assistantBulletStyle} />
          <span>{line.slice(2).trim()}</span>
        </div>
      );
    }

    if (line.includes("\u26A0\uFE0F")) {
      return (
        <div
          key={`assistant-warning-${index}`}
          style={{
            ...assistantBlockStyle,
            background: "#FFFBEB",
            color: "#92400E",
            padding: "6px 10px",
            borderRadius: "6px",
          }}
        >
          {line}
        </div>
      );
    }

    return (
      <p key={`assistant-paragraph-${index}`} style={assistantBlockStyle}>
        {line}
      </p>
    );
  });
}

export default function MessageBubble({ role, content, fileName }) {
  if (role === "file") {
    return (
      <>
        <style>
          {`
            @keyframes messageBubbleFadeUp {
              from {
                opacity: 0;
                transform: translateY(8px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}
        </style>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            gap: "8px",
            animation: "messageBubbleFadeUp 220ms ease-out",
          }}
        >
          <div
            style={{
              background: "#E8F7F1",
              border: "1px solid #B8E5D4",
              borderRadius: "14px",
              padding: "10px 12px",
              maxWidth: "320px",
            }}
          >
            <div
              style={{
                ...baseTextStyle,
                color: "#1D9E75",
                fontWeight: 600,
                marginBottom: "4px",
              }}
            >
              {`📎 ${fileName || ""}`}
            </div>
            <div style={{ ...baseTextStyle, color: "#667085" }}>
              Report uploaded - analysing...
            </div>
          </div>
        </div>
      </>
    );
  }

  const isUser = role === "user";

  return (
    <>
      <style>
        {`
          @keyframes messageBubbleFadeUp {
            from {
              opacity: 0;
              transform: translateY(8px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: isUser ? "flex-end" : "flex-start",
          alignItems: "flex-end",
          gap: "8px",
          animation: "messageBubbleFadeUp 220ms ease-out",
        }}
      >
        {!isUser && (
          <div
            aria-hidden="true"
            style={{
              ...avatarStyle,
              background: "#F2F4F7",
            }}
          >
            🤖
          </div>
        )}

        <div
          style={{
            background: isUser ? "#1D9E75" : "#F2F4F7",
            color: isUser ? "#FFFFFF" : "#1D2939",
            padding: "10px 12px",
            borderRadius: isUser ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
            maxWidth: "320px",
            ...(isUser ? baseTextStyle : assistantTextStyle),
          }}
        >
          {isUser ? content : renderAssistantContent(content)}
        </div>

        {isUser && (
          <div
            aria-hidden="true"
            style={{
              ...avatarStyle,
              background: "#D8F3E9",
              color: "#1D9E75",
            }}
          >
            You
          </div>
        )}
      </div>
    </>
  );
}
