const pulseDotStyle = {
  width: "8px",
  height: "8px",
  borderRadius: "999px",
  background: "#1D9E75",
  animation: "headerOnlinePulse 2s infinite ease-in-out",
};

export default function Header() {
  return (
    <>
      <style>
        {`
          @keyframes headerOnlinePulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.35;
            }
          }
        `}
      </style>

      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "10px",
          padding: "10px 14px",
          background: "#FFFFFF",
          borderBottom: "0.5px solid #E4E7EC",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            minWidth: 0,
          }}
        >
          <div
            aria-hidden="true"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "999px",
              background: "#1D9E75",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              fontSize: "16px",
            }}
          >
            {"\uD83C\uDFE5"}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              minWidth: 0,
            }}
          >
            <div
              style={{
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: 1.2,
                color: "#101828",
              }}
            >
              HealthAI Agent
            </div>
            <div
              style={{
                fontSize: "11px",
                lineHeight: 1.2,
                color: "#667085",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Symptom checker | Medical Q&A | Mental health | Report
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            flexShrink: 0,
            color: "#1D9E75",
            fontSize: "12px",
            fontWeight: 500,
          }}
        >
          <span aria-hidden="true" style={pulseDotStyle} />
          <span>Online</span>
        </div>
      </header>
    </>
  );
}
