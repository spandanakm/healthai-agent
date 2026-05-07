import { useState } from "react";

export default function TabBar({ currentMode, onSwitch }) {
  const [hoveredTab, setHoveredTab] = useState(null);

  const tabs = [
    {
      id: "symptom",
      label: "SYMPTOMS",
      icon: "ti-stethoscope",
      activeClass: "s",
      activeBg: "linear-gradient(135deg,#6C63FF25,#8B5CF625)",
      activeBorder: "#6C63FF60",
      activeColor: "#a78bfa",
    },
    {
      id: "qa",
      label: "MED Q&A",
      icon: "ti-pill",
      activeClass: "q",
      activeBg: "linear-gradient(135deg,#F59E0B25,#EF444425)",
      activeBorder: "#F59E0B60",
      activeColor: "#fbbf24",
    },
    {
      id: "mental",
      label: "MENTAL",
      icon: "ti-heart",
      activeClass: "m",
      activeBg: "linear-gradient(135deg,#EC489925,#F9731625)",
      activeBorder: "#EC489960",
      activeColor: "#f472b6",
    },
    {
      id: "report",
      label: "REPORT",
      icon: "ti-file-analytics",
      activeClass: "r",
      activeBg: "linear-gradient(135deg,#10B98125,#06B6D425)",
      activeBorder: "#10B98160",
      activeColor: "#34D399",
    },
  ];

  const containerStyle = {
    background: "#12122a",
    padding: "10px 14px",
    display: "flex",
    gap: "8px",
  };

  const getTabStyle = (tab, isActive, isHovered) => ({
    flex: 1,
    padding: "10px 8px",
    borderRadius: "14px",
    border: "1px solid transparent",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px",
    cursor: "pointer",
    transition: "all 0.25s",
    color: isActive ? tab.activeColor : "#4a5568",
    background: isActive
      ? tab.activeBg
      : isHovered
        ? "rgba(255,255,255,0.05)"
        : "transparent",
    borderColor: isActive
      ? tab.activeBorder
      : isHovered
        ? "rgba(255,255,255,0.1)"
        : "transparent",
  });

  const iconStyle = {
    fontSize: "20px",
    lineHeight: 1,
  };

  const labelStyle = {
    fontSize: "10px",
    fontWeight: 500,
    letterSpacing: "0.3px",
    lineHeight: 1,
  };

  return (
    <div style={containerStyle}>
      {tabs.map((tab) => {
        const isActive = tab.id === currentMode;
        const isHovered = tab.id === hoveredTab;

        return (
          <div
            key={tab.id}
            role="button"
            tabIndex={0}
            aria-pressed={isActive}
            data-active-class={tab.activeClass}
            onClick={() => onSwitch?.(tab.id)}
            onMouseEnter={() => setHoveredTab(tab.id)}
            onMouseLeave={() => setHoveredTab(null)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onSwitch?.(tab.id);
              }
            }}
            style={getTabStyle(tab, isActive, isHovered)}
          >
            <i className={`ti ${tab.icon}`} aria-hidden="true" style={iconStyle} />
            <span style={labelStyle}>{tab.label}</span>
          </div>
        );
      })}
    </div>
  );
}
