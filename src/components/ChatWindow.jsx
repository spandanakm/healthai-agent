import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

const dotStyle = {
  width: "8px",
  height: "8px",
  borderRadius: "999px",
  background: "#667085",
  animation: "chatWindowBounce 900ms infinite ease-in-out",
};

function TypingIndicator() {
  return (
    <>
      <style>
        {`
          @keyframes chatWindowBounce {
            0%, 80%, 100% {
              transform: translateY(0);
              opacity: 0.45;
            }
            40% {
              transform: translateY(-6px);
              opacity: 1;
            }
          }
        `}
      </style>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          gap: "8px",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "999px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            background: "#F2F4F7",
            fontSize: "13px",
            fontWeight: 600,
          }}
        >
          🤖
        </div>

        <div
          style={{
            background: "#F2F4F7",
            borderRadius: "16px 16px 16px 4px",
            padding: "12px 14px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            minHeight: "44px",
          }}
        >
          <span style={{ ...dotStyle, animationDelay: "0ms" }} />
          <span style={{ ...dotStyle, animationDelay: "120ms" }} />
          <span style={{ ...dotStyle, animationDelay: "240ms" }} />
        </div>
      </div>
    </>
  );
}

export default function ChatWindow({ messages, loading }) {
  const containerRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div
      ref={containerRef}
      style={{
        flex: 1,
        overflowY: "auto",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      {messages.map((message, index) => (
        <MessageBubble
          key={message.id ?? `${message.role}-${index}`}
          role={message.role}
          content={message.content}
          fileName={message.fileName ?? message.name}
        />
      ))}

      {loading && <TypingIndicator />}

      <div ref={bottomRef} />
    </div>
  );
}
