import { useState } from "react";

const tabs = [
  { id: "symptom", icon: "\uD83E\uDE7A", label: "Symptoms" },
  { id: "qa", icon: "\uD83D\uDCAC", label: "Medical Q&A" },
  { id: "mental", icon: "\uD83E\uDDE0", label: "Mental Health" },
  { id: "report", icon: "\uD83D\uDCC4", label: "Report" },
];

const containerStyle = {
  display: "flex",
  flexDirection: "row",
  gap: "8px",
};

const baseTabStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "4px",
  padding: "10px 8px 8px",
  border: "none",
  borderBottomWidth: "2px",
  borderBottomStyle: "solid",
  borderBottomColor: "transparent",
  background: "#F2F4F7",
  color: "#667085",
  cursor: "pointer",
  transition: "all 0.15s ease",
};

const activeTabStyle = {
  background: "#FFFFFF",
  color: "#0F6E56",
  borderBottomColor: "#1D9E75",
};

const hoverTabStyle = {
  background: "#FFFFFF",
  color: "#475467",
};

export default function TabBar({ currentMode, onSwitch }) {
  const [hoveredTab, setHoveredTab] = useState(null);

  return (
    <div style={containerStyle}>
      {tabs.map((tab) => {
        const isActive = currentMode === tab.id;
        const isHovered = hoveredTab === tab.id;

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onSwitch?.(tab.id)}
            onMouseEnter={() => setHoveredTab(tab.id)}
            onMouseLeave={() => setHoveredTab(null)}
            style={{
              ...baseTabStyle,
              ...(isHovered && !isActive ? hoverTabStyle : null),
              ...(isActive ? activeTabStyle : null),
            }}
          >
            <span
              aria-hidden="true"
              style={{
                fontSize: "15px",
                lineHeight: 1,
              }}
            >
              {tab.icon}
            </span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 600,
                lineHeight: 1.2,
              }}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
