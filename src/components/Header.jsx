export default function Header() {
  return (
    <>
      <style>
        {`
          @keyframes livepulse {
            0%,
            100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.35);
              opacity: 0.55;
            }
          }
        `}
      </style>

      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          padding: "14px 20px",
          background:
            "linear-gradient(135deg, rgba(18, 24, 49, 0.96), rgba(27, 16, 53, 0.94))",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.18)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            minWidth: 0,
          }}
        >
          <div
            aria-hidden="true"
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #5B8CFF, #EC4899)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              boxShadow: "0 12px 30px rgba(91, 140, 255, 0.3)",
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M12 20.25C11.72 20.25 11.44 20.15 11.22 19.96C6.14 15.61 3 12.73 3 8.98C3 6.08 5.28 3.75 8.12 3.75C9.76 3.75 11.32 4.51 12.3 5.79C13.28 4.51 14.84 3.75 16.48 3.75C19.32 3.75 21.6 6.08 21.6 8.98C21.6 12.73 18.46 15.61 13.38 19.96C13.16 20.15 12.88 20.25 12.6 20.25H12Z"
                fill="white"
                fillOpacity="0.18"
              />
              <path
                d="M4.5 12.25H8.1L9.65 9L11.55 15.1L13.55 11.25H19.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "3px",
              minWidth: 0,
            }}
          >
            <div
              style={{
                fontSize: "18px",
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#fff",
                letterSpacing: "0.02em",
              }}
            >
              HealthAI Agent
            </div>
            <div
              style={{
                fontSize: "11px",
                lineHeight: 1.3,
                color: "#9cb0d8",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {"Symptom checker \u00B7 Medical Q&A \u00B7 Mental health \u00B7 Reports"}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "7px 14px",
            borderRadius: "20px",
            background: "linear-gradient(135deg, #10B98118, #22D3EE10)",
            border: "1px solid #10B98140",
            flexShrink: 0,
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "999px",
              background: "#10B981",
              animation: "livepulse 1.5s infinite",
            }}
          />
          <span
            style={{
              color: "#34D399",
              fontSize: "12px",
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "0.04em",
            }}
          >
            Live
          </span>
        </div>
      </header>
    </>
  );
}
