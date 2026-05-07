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

  return (
    <div className="message-row assistant">
      <div
        aria-hidden="true"
        className="message-avatar assistant"
        style={{ color: palette.accent }}
      >
        <i className="ti ti-robot" />
      </div>

      <div className="typing-bubble">
        <div className="typing-dots">
          <span style={{ background: palette.accent }} />
          <span style={{ background: palette.accent }} />
          <span style={{ background: palette.accent }} />
        </div>
      </div>
    </div>
  );
}

export default function ChatWindow({
  messages,
  loading,
  mode,
  welcomeText,
  onSuggestionClick,
}) {
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
    <div ref={containerRef} className="chat-window">
      {showEmptyState ? (
        <div className="chat-empty">
          <div className="chat-empty__card">
            <div
              aria-hidden="true"
              className="chat-empty__icon"
              style={{ background: palette.gradient }}
            >
              <i
                className="ti ti-sparkles"
                style={{ fontSize: "30px", color: "#ffffff" }}
              />
            </div>

            <div className="chat-empty__title">Start with a simple question</div>
            <div className="chat-empty__text">{resolvedWelcomeText}</div>
          </div>
        </div>
      ) : (
        messages.map((message, index) => (
          <MessageBubble
            key={message.id ?? `${message.role}-${index}`}
            message={message}
            mode={mode}
            loading={loading}
            onSuggestionClick={onSuggestionClick}
          />
        ))
      )}

      {loading && <TypingIndicator mode={mode} />}

      <div ref={bottomRef} />
    </div>
  );
}
