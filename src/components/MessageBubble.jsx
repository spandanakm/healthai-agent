const baseTextStyle = {
  fontSize: "13px",
  lineHeight: 1.55,
  whiteSpace: "pre-wrap",
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
            ...baseTextStyle,
          }}
        >
          {content}
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
