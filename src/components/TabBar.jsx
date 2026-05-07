import { useState } from "react";

export default function TabBar({ currentMode, onSwitch }) {
  const [hoveredTab, setHoveredTab] = useState(null);

  const tabs = [
    {
      id: "symptom",
      label: "SYMPTOMS",
      hint: "Check symptoms, severity, and smart next steps.",
      icon: "ti-stethoscope",
      activeClass: "s",
      activeBg: "linear-gradient(135deg,#6C63FF25,#8B5CF625)",
      activeBorder: "#6C63FF60",
      activeColor: "#a78bfa",
    },
    {
      id: "qa",
      label: "MED Q&A",
      hint: "Get plain-language answers to common health questions.",
      icon: "ti-pill",
      activeClass: "q",
      activeBg: "linear-gradient(135deg,#F59E0B25,#EF444425)",
      activeBorder: "#F59E0B60",
      activeColor: "#fbbf24",
    },
    {
      id: "mental",
      label: "MENTAL",
      hint: "Use calming support tools and gentle guidance.",
      icon: "ti-heart",
      activeClass: "m",
      activeBg: "linear-gradient(135deg,#EC489925,#F9731625)",
      activeBorder: "#EC489960",
      activeColor: "#f472b6",
    },
    {
      id: "report",
      label: "REPORT",
      hint: "Upload reports and turn complex results into clear notes.",
      icon: "ti-file-analytics",
      activeClass: "r",
      activeBg: "linear-gradient(135deg,#10B98125,#06B6D425)",
      activeBorder: "#10B98160",
      activeColor: "#34D399",
    },
  ];

  return (
    <div className="mode-bar">
      {tabs.map((tab) => {
        const isActive = tab.id === currentMode;
        const isHovered = tab.id === hoveredTab;
        const tabStyle = {
          "--tab-accent": tab.activeColor,
          "--tab-border": tab.activeBorder,
          "--tab-active-bg": tab.activeBg,
        };

        return (
          <div
            key={tab.id}
            role="button"
            tabIndex={0}
            aria-pressed={isActive}
            data-active-class={tab.activeClass}
            className={`mode-tab${isActive ? " is-active" : ""}${isHovered ? " is-hovered" : ""}`}
            onClick={() => onSwitch?.(tab.id)}
            onMouseEnter={() => setHoveredTab(tab.id)}
            onMouseLeave={() => setHoveredTab(null)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onSwitch?.(tab.id);
              }
            }}
            style={tabStyle}
          >
            <i className={`ti ${tab.icon} mode-tab__icon`} aria-hidden="true" />
            <div className="mode-tab__copy">
              <span className="mode-tab__label">{tab.label}</span>
              <span className="mode-tab__hint">{tab.hint}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
