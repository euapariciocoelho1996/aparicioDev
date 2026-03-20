import { useEffect, useRef, useState } from "react";
import "./TextCursor.css";

/* ── Types ───────────────────────────────────────────────────────────────────── */
interface TextCursorProps {
  /** Texts to cycle through */
  texts: string[];
  /** Typing speed in ms per character (default 60) */
  typingSpeed?: number;
  /** Pause at end of each word in ms (default 1800) */
  pauseAt?: number;
  /** Erase speed in ms per character (default 35) */
  eraseSpeed?: number;
  /** CSS class for the text span */
  className?: string;
}

/* ── Component ───────────────────────────────────────────────────────────────── */
export default function TextCursor({
  texts,
  typingSpeed = 60,
  pauseAt = 1800,
  eraseSpeed = 35,
  className = "",
}: TextCursorProps) {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "erasing">(
    "typing",
  );
  const [index, setIndex] = useState(0);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const current = texts[index % texts.length];

    if (phase === "typing") {
      if (displayed.length < current.length) {
        timeout.current = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          typingSpeed,
        );
      } else {
        timeout.current = setTimeout(() => setPhase("pausing"), pauseAt);
      }
    } else if (phase === "pausing") {
      timeout.current = setTimeout(() => setPhase("erasing"), 0);
    } else {
      if (displayed.length > 0) {
        timeout.current = setTimeout(
          () => setDisplayed((d) => d.slice(0, -1)),
          eraseSpeed,
        );
      } else {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIndex((i) => (i + 1) % texts.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout.current);
  }, [displayed, phase, index, texts, typingSpeed, pauseAt, eraseSpeed]);

  return (
    <span className={`text-cursor-wrap ${className}`}>
      <span className="text-cursor-text">{displayed}</span>
      <span className="text-cursor-caret" aria-hidden="true">
        |
      </span>
    </span>
  );
}
