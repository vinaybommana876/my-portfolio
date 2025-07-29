import React from "react";
import "./SkillGrid.css";
import SkillIcon from "./SkillIcon";

import BootstrapIcon from "../assets/skill-icons/Bootstrap.png";
import FirebaseIcon from "../assets/skill-icons/Firebase.png";
import JavaScriptIcon from "../assets/skill-icons/js.png";
import PostmanIcon from "../assets/skill-icons/Postman.png";

import CanvaIcon from "../assets/skill-icons/Canva.png";
import GitIcon from "../assets/skill-icons/Git.png";
import MongoDBIcon from "../assets/skill-icons/MongoDB.png";
import PythonIcon from "../assets/skill-icons/python.png";

import CSSIcon from "../assets/skill-icons/css-3.png";
import GitHubIcon from "../assets/skill-icons/GitHub.png";
import NodejsIcon from "../assets/skill-icons/node-js.png";
import ReactIcon from "../assets/skill-icons/react.png";

import FigmaIcon from "../assets/skill-icons/figma.png";
import HTMLIcon from "../assets/skill-icons/html-5.png";
import PHPIcon from "../assets/skill-icons/php.png";
import SQLIcon from "../assets/skill-icons/sql.png";


// Grid center and spacing
const center = { x: 300, y: 300 };
const spacing = 75;

const skillData = [
  { name: "Bootstrap", icon: BootstrapIcon },
  { name: "Firebase", icon: FirebaseIcon },
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "Postman", icon: PostmanIcon },

  { name: "Canva", icon: CanvaIcon },
  { name: "Git", icon: GitIcon },
  { name: "MongoDB", icon: MongoDBIcon },
  { name: "Python", icon: PythonIcon },

  { name: "CSS", icon: CSSIcon },
  { name: "GitHub", icon: GitHubIcon },
  { name: "Node.js", icon: NodejsIcon },
  { name: "React", icon: ReactIcon },

  { name: "Figma", icon: FigmaIcon },
  { name: "HTML", icon: HTMLIcon },
  { name: "PHP", icon: PHPIcon },
  { name: "SQL", icon: SQLIcon },
];


// Grid positions
const positions = [
  { x: center.x, y: center.y - 3 * spacing },
  { x: center.x - spacing, y: center.y - 2 * spacing },
  { x: center.x + spacing, y: center.y - 2 * spacing },
  { x: center.x - 2 * spacing, y: center.y - spacing },
  { x: center.x, y: center.y - spacing },
  { x: center.x + 2 * spacing, y: center.y - spacing },
  { x: center.x - 3 * spacing, y: center.y },
  { x: center.x - spacing, y: center.y },
  { x: center.x + spacing, y: center.y },
  { x: center.x + 3 * spacing, y: center.y },
  { x: center.x - 2 * spacing, y: center.y + spacing },
  { x: center.x, y: center.y + spacing },
  { x: center.x + 2 * spacing, y: center.y + spacing },
  { x: center.x - spacing, y: center.y + 2 * spacing },
  { x: center.x + spacing, y: center.y + 2 * spacing },
  { x: center.x, y: center.y + 3 * spacing },
];

const SkillGrid = ({ isDark }) => {
  const icons = positions.map((pos, i) => ({
    name: skillData[i].name,
    href: skillData[i].icon,
    ...pos,
  }));

  return (
    <div className="skill-grid-wrapper">
      <svg
        className="skill-grid-svg"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          stroke: isDark ? "rgba(41, 11, 65, 0.91)" : "rgba(111, 87, 140, 0.46)",
          strokeWidth: 1,
        }}
      >
        {/* Grid Lines */}
        <line x1="0" y1="0" x2="600" y2="600" />
        <line x1="0" y1="150" x2="450" y2="600" />
        <line x1="150" y1="0" x2="600" y2="450" />
        <line x1="0" y1="600" x2="600" y2="0" />
        <line x1="0" y1="450" x2="450" y2="0" />
        <line x1="150" y1="600" x2="600" y2="150" />

        {/* Skill Icons */}
        {icons.map((icon, i) => (
          <SkillIcon key={i} {...icon} isDark={isDark} size={60} padding={20} />
        ))}
      </svg>
    </div>
  );
};

export default SkillGrid;
