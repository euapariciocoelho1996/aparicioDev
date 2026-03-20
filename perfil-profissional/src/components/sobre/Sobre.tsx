import { useEffect, useRef, useState } from "react";
import Card from "./Card";
import "./Sobre.css";

/* ── Icons ──────────────────────────────────────────────────────────────────── */
const GraduationIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3.33 1.67 8.67 1.67 12 0v-5" />
  </svg>
);

const PersonIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" />
  </svg>
);

const TargetIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

/* ── Section ────────────────────────────────────────────────────────────────── */
export default function Sobre() {
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
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className={`sobre-section${visible ? " is-visible" : ""}`}
    >
      {/* header */}
      <div className="sobre-header">
        <span className="sobre-eyebrow">
          <span className="sobre-eyebrow-line" />
          Sobre mim
        </span>
        <h2 className="sobre-title">
          Um pouco
          <br />
          <em>sobre mim</em>
        </h2>
        <p className="sobre-subtitle">
          Formação, trajetória e o que me motiva a construir.
        </p>
      </div>

      {/* cards grid */}
      <div className="sobre-grid">
        <Card
          title="Formação"
          icon={<GraduationIcon />}
          description="Bacharel em Sistemas de Informação pela Universidade Federal do Piauí (UFPI) — Campus Senador Helvídio Nunes de Barros, em Picos/PI, com conclusão em dezembro de 2025."
          delay={0}
        />
        <Card
          title="Quem eu sou"
          icon={<PersonIcon />}
          description="Sou Francisco Aparício, desenvolvedor de software com 29 anos, natural de Araripina - PE. Apaixonado por tecnologia e por criar experiências digitais que fazem diferença."
          delay={120}
        />
        <Card
          title="Objetivos"
          icon={<TargetIcon />}
          description="Atuar como Desenvolvedor Full Stack, criando soluções eficientes, escaláveis e com foco na experiência do usuário. Disponibilidade integral e interesse contínuo em crescimento profissional."
          delay={240}
        />
      </div>
    </section>
  );
}
