import { useEffect, useRef } from "react";
import MODES from "../config/modes";
import MessageBubble from "./MessageBubble";

const TAB_COLORS = {
  symptom: {
    accent: "#a78bfa",
    gradient: "linear-gradient(135deg,#6C63FF,#8B5CF6)",
  },
  qa: {
    accent: "#fbbf24",
    gradient: "linear-gradient(135deg,#F59E0B,#EF4444)",
  },
  mental: {
    accent: "#f472b6",
    gradient: "linear-gradient(135deg,#EC4899,#F97316)",
  },
  report: {
    accent: "#34D399",
    gradient: "linear-gradient(135deg,#10B981,#06B6D4)",
  },
};

function TypingIndicator({ mode }) {
  const palette = TAB_COLORS[mode] ?? TAB_COLORS.symptom;
  const dotStyle = {
    width: "7px",
    height: "7px",
    borderRadius: "999px",
    background: palette.accent,
    animation: "tdot 0.9s infinite",
  };

  return (
    <>
      <style>
        {`
          @keyframes tdot {
            0%, 80%, 100% {
              transform: translateY(0);
              opacity: 0.45;
            }
            40% {
              transform: translateY(-4px);
              opacity: 1;
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
        }}
      >
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
            padding: "13px 16px",
            display: "flex",
            alignItems: "center",
            gap: "7px",
          }}
        >
          <span style={{ ...dotStyle, animationDelay: "0ms" }} />
          <span style={{ ...dotStyle, animationDelay: "150ms" }} />
          <span style={{ ...dotStyle, animationDelay: "300ms" }} />
        </div>
      </div>
    </>
  );
}

export default function ChatWindow({ messages, loading, mode, welcomeText }) {
  const containerRef = useRef(null);
  const bottomRef = useRef(null);
  const palette = TAB_COLORS[mode] ?? TAB_COLORS.symptom;
  const resolvedWelcomeText =
    welcomeText ?? MODES[mode]?.welcome ?? "I can help with health questions.";
  const showEmptyState = messages.length === 0 && !loading;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div
      ref={containerRef}
      className="chat"
      style={{
        flex: 1,
        overflowY: "auto",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        background: "#0f0f1a",
      }}
    >
      {showEmptyState ? (
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "28px",
              background: palette.gradient,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 18px 40px rgba(0,0,0,0.28)",
            }}
          >
            <i
              className="ti ti-sparkles"
              style={{ fontSize: "30px", color: "#ffffff" }}
            />
          </div>

          <div
            style={{
              fontSize: "15px",
              fontWeight: 500,
              color: "#e2e8f0",
            }}
          >
            Ask me anything
          </div>

          <div
            style={{
              fontSize: "12px",
              color: "#cbd5e1",
              maxWidth: "230px",
              lineHeight: 1.6,
              textAlign: "center",
            }}
          >
            {resolvedWelcomeText}
          </div>
        </div>
      ) : (
        messages.map((message, index) => (
          <MessageBubble
            key={message.id ?? `${message.role}-${index}`}
            role={message.role}
            content={message.content}
            fileName={message.fileName ?? message.name}
            sev={message.sev ?? message.severity}
            mode={mode}
          />
        ))
      )}

      {loading && <TypingIndicator mode={mode} />}

      <div ref={bottomRef} />
    </div>
  );
}
