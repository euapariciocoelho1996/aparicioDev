import { useEffect, useRef, useState } from "react";
import TechStackGrid from "./TechStackGrid";
import "./Tecnologias.css";

const TAGS = [
  "Front-end",
  "Back-end",
  "Mobile",
  "Database",
  "DevOps",
  "Design",
];

export default function Tecnologias() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="tecnologias"
      ref={sectionRef}
      className={`tec-section${visible ? " is-visible" : ""}`}
    >
      {/* ── Left: text panel ── */}
      <div className="tec-text">
        <span className="tec-eyebrow">
          <span className="tec-eyebrow-line" />
          Stack técnico
        </span>

        <h2 className="tec-title">
          Meu stack
          <br />
          <em>técnico</em>
        </h2>

        <div className="tec-divider" />

        <p className="tec-desc">
          Do front-end ao back-end, mobile e infraestrutura — cada ferramenta
          foi escolhida com propósito. Frameworks modernos, linguagens versáteis
          e um fluxo de trabalho que entrega qualidade sem abrir mão de
          velocidade.
        </p>

        <div className="tec-counter">
          <span className="tec-counter-num">22</span>
          <span className="tec-counter-label">
            tecnologias
            <br />
            no arsenal
          </span>
        </div>

        <div className="tec-tags">
          {TAGS.map((tag) => (
            <span key={tag} className="tec-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── Right: scrollable grid ── */}
      <div className="tec-scroll-wrap">
        <div className="tec-scroll-area">
          <TechStackGrid />
        </div>
      </div>
    </section>
  );
}
