import React, { useState } from "react";

const SkillIcon = ({ href, x, y, name, isDark, size = 60, padding = 20 }) => {
  const [hovered, setHovered] = useState(false);
  const totalSize = size + padding * 2;
  const radius = totalSize / 2;

  const backgroundFill = isDark
    ? "rgba(255, 255, 255, 0.08)"
    : "rgba(91, 88, 88, 0.29)";

  const strokeColor = isDark
    ? "rgba(255, 255, 255, 0.15)"
    : "rgba(73, 71, 71, 0.28)";

  return (
    <>
      <defs>
        <filter id="skill-icon-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="0"
            dy="4"
            stdDeviation="6"
            floodColor={isDark ? "#fff" : "#000"}
            floodOpacity="0.2"
          />
        </filter>
      </defs>

      <g
        transform={`translate(${x}, ${y})`}
        style={{ transition: "transform 0.3s ease", cursor: "pointer" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = `translate(${x}px, ${y}px) scale(1.6)`;
          setHovered(true);
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = `translate(${x}px, ${y}px) scale(1)`;
          setHovered(false);
        }}
      >
        <circle
          cx="0"
          cy="0"
          r={radius}
          fill={backgroundFill}
          style={{
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            stroke: strokeColor,
            filter: "url(#skill-icon-shadow)",
          }}
        />

        <image
          href={href}
          x={-size / 2}
          y={-size / 2}
          width={size}
          height={size}
          preserveAspectRatio="xMidYMid meet"
        />

        {/* Tooltip */}
        {hovered && (
          <text
            x="0"
            y={radius + 20}
            textAnchor="middle"
            fontSize="14"
            fill={isDark ? "#fff" : "#000"}
          >
            {name}
          </text>
        )}
      </g>
    </>
  );
};

export default SkillIcon;
