import { useState } from "react";
import "./TechStackGrid.css";
import {
  NodejsIcon,
  ExpressIcon,
  PrismaIcon,
  MongoDBIcon,
  LockIcon,
  JwtIcon,
  Html5Icon,
  Css3Icon,
  DockerIcon,
  TypeScriptIcon,
  FirebaseIcon,
  PythonIcon,
  CIcon,
  TailwindIcon,
  ReactIcon,
  VueIcon,
  FlutterIcon,
  PostgreSQLIcon,
  GitIcon,
  FigmaIcon,
  SqlIcon,
  PostmanIcon,
} from "./icons";

/* ─── Types ──────────────────────────────────────────────────────────────────── */

interface Tool {
  name: string;
  label: string;
  bg: string;
  hover: string;
  iconBg: string;
  icon: React.ReactNode;
}

/* ─── Tool list ──────────────────────────────────────────────────────────────── */

const tools: Tool[] = [
  {
    name: "Node.js",
    label: "Runtime",
    bg: "#3a6e3a",
    hover: "#4a8a4a",
    iconBg: "#2a5a2a",
    icon: <NodejsIcon />,
  },
  {
    name: "Express",
    label: "Framework",
    bg: "#555555",
    hover: "#6a6a6a",
    iconBg: "#333333",
    icon: <ExpressIcon />,
  },
  {
    name: "Prisma",
    label: "ORM",
    bg: "#2e5080",
    hover: "#3d6499",
    iconBg: "#1e3860",
    icon: <PrismaIcon />,
  },
  {
    name: "MongoDB",
    label: "Database",
    bg: "#3a7a3a",
    hover: "#4a9a4a",
    iconBg: "#2a5e2a",
    icon: <MongoDBIcon />,
  },
  {
    name: "Bcrypt",
    label: "Security",
    bg: "#5e2e7a",
    hover: "#7a3d99",
    iconBg: "#3e1e58",
    icon: <LockIcon />,
  },
  {
    name: "JWT",
    label: "Auth",
    bg: "#7a2e5e",
    hover: "#993d78",
    iconBg: "#581e42",
    icon: <JwtIcon />,
  },
  {
    name: "HTML",
    label: "Markup",
    bg: "#8a4018",
    hover: "#a85422",
    iconBg: "#5e2a0e",
    icon: <Html5Icon />,
  },
  {
    name: "CSS",
    label: "Styling",
    bg: "#1a4080",
    hover: "#235299",
    iconBg: "#0f2a5a",
    icon: <Css3Icon />,
  },
  {
    name: "Docker",
    label: "DevOps",
    bg: "#1a5280",
    hover: "#235e99",
    iconBg: "#0f385a",
    icon: <DockerIcon />,
  },
  {
    name: "TypeScript",
    label: "Language",
    bg: "#1a3e6e",
    hover: "#235090",
    iconBg: "#0f2850",
    icon: <TypeScriptIcon />,
  },
  {
    name: "Firebase",
    label: "Cloud",
    bg: "#7a4e18",
    hover: "#996622",
    iconBg: "#58340e",
    icon: <FirebaseIcon />,
  },
  {
    name: "Python",
    label: "Language",
    bg: "#2a4270",
    hover: "#355490",
    iconBg: "#1a2c50",
    icon: <PythonIcon />,
  },
  {
    name: "C",
    label: "Language",
    bg: "#1a4080",
    hover: "#235299",
    iconBg: "#0f2a5a",
    icon: <CIcon />,
  },
  {
    name: "Tailwind",
    label: "CSS",
    bg: "#1a5e6e",
    hover: "#237888",
    iconBg: "#0f3e4a",
    icon: <TailwindIcon />,
  },
  {
    name: "React",
    label: "UI",
    bg: "#1a4e5e",
    hover: "#236278",
    iconBg: "#0f3440",
    icon: <ReactIcon />,
  },
  {
    name: "Vue.js",
    label: "UI",
    bg: "#2a5e40",
    hover: "#357854",
    iconBg: "#1a3e2a",
    icon: <VueIcon />,
  },
  {
    name: "Flutter",
    label: "Mobile",
    bg: "#1a4e7a",
    hover: "#236296",
    iconBg: "#0f3458",
    icon: <FlutterIcon />,
  },
  {
    name: "PostgreSQL",
    label: "Database",
    bg: "#2a3e5a",
    hover: "#355272",
    iconBg: "#1a2840",
    icon: <PostgreSQLIcon />,
  },
  {
    name: "Git",
    label: "Version",
    bg: "#7a2e1a",
    hover: "#993d25",
    iconBg: "#581e0e",
    icon: <GitIcon />,
  },
  {
    name: "Figma",
    label: "Design",
    bg: "#3a2060",
    hover: "#4e2e7a",
    iconBg: "#260e44",
    icon: <FigmaIcon />,
  },
  {
    name: "SQL",
    label: "Query",
    bg: "#1a3e5a",
    hover: "#235072",
    iconBg: "#0f2840",
    icon: <SqlIcon />,
  },
  {
    name: "Postman",
    label: "API",
    bg: "#7a3018",
    hover: "#994022",
    iconBg: "#58200e",
    icon: <PostmanIcon />,
  },
];

/* ─── Card ───────────────────────────────────────────────────────────────────── */

function ToolCard({ tool }: { tool: Tool }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      className="tech-card"
      style={{ background: tool.bg }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Ripple */}
      <div className="tech-card__ripple" style={{ background: tool.hover }} />

      {/* Icon circle */}
      <div
        className="tech-card__icon-circle"
        style={{ background: tool.iconBg }}
      >
        <div className="tech-card__icon-svg">{tool.icon}</div>
      </div>

      {/* Label */}
      <div className="tech-card__label">
        <span className="tech-card__label-category">{tool.label}</span>
        <span className="tech-card__label-name">{tool.name}</span>
      </div>
    </div>
  );
}

/* ─── Grid ───────────────────────────────────────────────────────────────────── */

export default function TechStackGrid() {
  return (
    <div className="tech-grid-wrapper">
      <div className="tech-grid">
        {tools.map((t) => (
          <ToolCard key={t.name} tool={t} />
        ))}
      </div>
    </div>
  );
}
