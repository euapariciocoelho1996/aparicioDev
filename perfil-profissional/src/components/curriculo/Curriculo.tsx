import { useEffect, useRef, useState } from "react";
import TextCursor from "./TextCursor";
import "./Curriculo.css";

const DRIVE_URL =
  "https://drive.google.com/drive/folders/1sFcoKvyBS-RyFHoPC9t9zjHmDUKlrTxH?usp=sharing";

const TYPING_TEXTS = [
  "Desenvolvedor Full Stack",
  "Sistemas de Informação",
  "Apaixonado por tecnologia",
  "Disponível para projetos",
];

const DownloadIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 15V3" />
    <path d="M7 10l5 5 5-5" />
    <path d="M20 21H4" />
  </svg>
);

const DriveIcon = () => (
  <svg width="17" height="17" viewBox="0 0 87.3 78" fill="currentColor">
    <path
      d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L29.5 53H0c0 1.55.4 3.1 1.2 4.5z"
      fill="#0066da"
    />
    <path
      d="M43.65 25L28.35 0c-1.35.8-2.5 1.9-3.3 3.3L1.2 43.5C.4 44.9 0 46.45 0 48h29.5z"
      fill="#00ac47"
    />
    <path
      d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75L86.1 57.5c.8-1.4 1.2-2.95 1.2-4.5H57.8L73.55 76.8z"
      fill="#ea4335"
    />
    <path d="M43.65 25L58.95 0H28.35z" fill="#00832d" />
    <path
      d="M57.8 48H87.3c0-1.55-.4-3.1-1.2-4.5L72.1 19.85l-14.3 28.15z"
      fill="#2684fc"
    />
    <path
      d="M29.5 53L13.8 76.8c1.35.8 2.9 1.2 4.5 1.2h50.7c1.6 0 3.15-.45 4.5-1.2L57.8 53z"
      fill="#ffba00"
    />
  </svg>
);

export default function Curriculo() {
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
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="curriculo"
      ref={sectionRef}
      className={`curriculo-section${visible ? " is-visible" : ""}`}
    >
      {/* grain */}
      <div className="curriculo-bg-grain" aria-hidden="true" />
      {/* glow */}
      <div className="curriculo-bg-glow" aria-hidden="true" />

      <div className="curriculo-inner">
        {/* eyebrow */}
        <span className="curriculo-eyebrow">
          <span className="curriculo-eyebrow-line" />
          Currículo
        </span>

        {/* heading with typewriter */}
        <h2 className="curriculo-heading">
          <span className="curriculo-heading-static">Francisco Aparício</span>
          <span className="curriculo-heading-dynamic">
            <TextCursor
              texts={TYPING_TEXTS}
              typingSpeed={55}
              pauseAt={2000}
              eraseSpeed={30}
            />
          </span>
        </h2>

        <div className="curriculo-divider" />

        <p className="curriculo-desc">
          Acesse minhas certificações completas no Google Drive.
        </p>

        {/* CTA button */}
        <a
          href={DRIVE_URL}
          target="_blank"
          rel="noreferrer"
          className="curriculo-btn"
        >
          <DriveIcon />
          <span>Acessar certificados</span>
          <DownloadIcon />
        </a>

        {/* meta info */}
        <div className="curriculo-meta">
          <span className="curriculo-meta-item">
            <span className="curriculo-meta-dot" />
            Atualizado em 2026
          </span>
          <span className="curriculo-meta-item">
            <span className="curriculo-meta-dot" />
            Google Drive
          </span>
        </div>
      </div>
    </section>
  );
}
