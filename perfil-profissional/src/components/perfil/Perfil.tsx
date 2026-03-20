import { useEffect, useRef, useState, useCallback } from "react";
import "./Perfil.css";
import foto1 from "./perfil-foto.jpeg";
import foto2 from "./perfil-foto-2.jpg";
import foto3 from "./perfil-foto-3.jpg";

const PHOTOS = [
  { src: foto1, alt: "Francisco Aparício na formatura — diploma erguido" },
  { src: foto2, alt: "Francisco Aparício na formatura — pose formal" },
  { src: foto3, alt: "Francisco Aparício na formatura — cadeira dourada" },
];

/* ── Social icons ────────────────────────────────────────────────────────────── */
const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const ChevronLeft = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

/* ── Carousel ────────────────────────────────────────────────────────────────── */
function PhotoCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const goTo = useCallback(
    (next: number, dir: "left" | "right") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent(next);
        setAnimating(false);
      }, 380);
    },
    [animating],
  );

  const prev = () =>
    goTo((current - 1 + PHOTOS.length) % PHOTOS.length, "left");
  const next = useCallback(
    () => goTo((current + 1) % PHOTOS.length, "right"),
    [current, goTo],
  );

  /* auto-advance every 4s */
  useEffect(() => {
    timerRef.current = setTimeout(next, 4000);
    return () => clearTimeout(timerRef.current);
  }, [current, next]);

  return (
    <div className="carousel">
      {/* slides */}
      <div className="carousel__track">
        {PHOTOS.map((photo, i) => (
          <div
            key={i}
            className={[
              "carousel__slide",
              i === current ? "is-active" : "",
              animating && i === current ? `is-leaving-${direction}` : "",
            ].join(" ")}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="carousel__img"
              draggable={false}
            />
          </div>
        ))}
        {/* overlay */}
        <div className="carousel__overlay" />
        {/* bottom tag */}
        <span className="perfil-avatar-tag">Disponível</span>
      </div>

      {/* arrow buttons */}
      <button
        className="carousel__btn carousel__btn--prev"
        onClick={prev}
        aria-label="Anterior"
      >
        <ChevronLeft />
      </button>
      <button
        className="carousel__btn carousel__btn--next"
        onClick={next}
        aria-label="Próxima"
      >
        <ChevronRight />
      </button>

      {/* dots */}
      <div className="carousel__dots">
        {PHOTOS.map((_, i) => (
          <button
            key={i}
            className={`carousel__dot${i === current ? " is-active" : ""}`}
            onClick={() => goTo(i, i > current ? "right" : "left")}
            aria-label={`Foto ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Main component ──────────────────────────────────────────────────────────── */
export default function Perfil() {
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
      id="perfil"
      ref={sectionRef}
      className={`perfil-section${visible ? " is-visible" : ""}`}
    >
      <div className="perfil-bg-lines" aria-hidden="true" />

      {/* ── Left: text ── */}
      <div className="perfil-text">
        <span className="perfil-eyebrow">
          <span className="perfil-eyebrow-line" />
          Introdução
        </span>

        <h1 className="perfil-name">
          Aparicio
          <br />
          <em>Coelho</em>
        </h1>

        <div className="perfil-role">
          <span className="perfil-role-dot" />
          <span className="perfil-role-text">
            Desenvolvedor de Software Full Stack
          </span>
        </div>

        <div className="perfil-divider" />

        <p className="perfil-desc">
          Graduado em Sistemas de Informação, apaixonado por criar soluções
          digitais que fazem diferença. Do back-end ao front-end, construo
          experiências com propósito, performance e atenção aos detalhes.
        </p>

        <div className="perfil-actions">
          <a
            href="https://github.com/euapariciocoelho1996?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <button className="perfil-btn-primary">Ver projetos</button>
          </a>
          <button
            className="perfil-btn-primary perfil-btn-alt"
            onClick={() =>
              document
                .querySelector("#tecnologias")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Tecnologias
          </button>
        </div>

        <div className="perfil-social">
          <a
            href="https://github.com/euapariciocoelho1996"
            target="_blank"
            rel="noreferrer"
            className="perfil-social-link"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://linkedin.com/in/franciscoaparicio/"
            target="_blank"
            rel="noreferrer"
            className="perfil-social-link"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://www.instagram.com/euapariciocoelho_/"
            target="_blank"
            rel="noreferrer"
            className="perfil-social-link"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>

      {/* ── Right: carousel ── */}
      <div className="perfil-avatar-wrap">
        <PhotoCarousel />
      </div>
    </section>
  );
}
