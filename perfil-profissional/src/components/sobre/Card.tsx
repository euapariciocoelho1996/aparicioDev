import { useEffect, useRef, useState } from "react";
import "./Card.css";

interface CardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  delay?: number; // ms — for stagger from parent
}

export default function Card({
  title = "Título",
  description = "Descrição do card.",
  icon,
  delay = 0,
}: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`sobre-card${visible ? " is-visible" : ""}`}
    >
      {/* head */}
      <div className="sobre-card__head">
        <span className="sobre-card__head-dot" />
        <span className="sobre-card__head-title">{title}</span>
      </div>

      {/* body */}
      <div className="sobre-card__body">
        {icon && <div className="sobre-card__icon">{icon}</div>}
        <div className="sobre-card__divider" />
        <p className="sobre-card__text">{description}</p>
      </div>
    </div>
  );
}
