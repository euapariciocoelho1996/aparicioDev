import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contato.css";

const EMAILJS_SERVICE_ID = "service_751us57";
const EMAILJS_TEMPLATE_ID = "template_8edj5cm"; // ex: "template_xyz789"
const EMAILJS_PUBLIC_KEY = "GYGhRxy2NEj5jKfZg"; // ex: "aBcDeFgHiJkLmNoP"

/* ── Constants ──────────────────────────────────────────────────────────────── */

const MAX_MSG = 500;

const TAGS = ["Projetos", "Freelance", "Parcerias", "Dúvidas"];

/* ── Inline SVG icons ────────────────────────────────────────────────────────── */

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="22"
    height="22"
    strokeWidth="2"
    stroke="#fff"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* ── Types ───────────────────────────────────────────────────────────────────── */

interface FormState {
  nome: string;
  email: string;
  mensagem: string;
}

interface FormErrors {
  nome?: string;
  email?: string;
  mensagem?: string;
}

type Status = "idle" | "loading" | "success";

/* ── Validation ──────────────────────────────────────────────────────────────── */

function validate(values: FormState): FormErrors {
  const errs: FormErrors = {};
  if (!values.nome.trim()) errs.nome = "Nome obrigatório";
  if (!values.email.trim()) {
    errs.email = "E-mail obrigatório";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errs.email = "E-mail inválido";
  }
  if (!values.mensagem.trim()) errs.mensagem = "Mensagem obrigatória";
  return errs;
}

/* ── Component ───────────────────────────────────────────────────────────────── */

export default function Contato() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const [values, setValues] = useState<FormState>({
    nome: "",
    email: "",
    mensagem: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  /* IntersectionObserver — igual ao Tecnologias */
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

  /* Handlers */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    if (name === "mensagem" && value.length > MAX_MSG) return;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(validate({ ...values, [name]: value }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = async () => {
    const allTouched = { nome: true, email: true, mensagem: true };
    setTouched(allTouched);
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("loading");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: values.nome,
          from_email: values.email,
          message: values.mensagem,
          to_email: "faparicionc@gmail.com",
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
    } catch (err) {
      console.error("EmailJS error:", err);
      setErrors({ mensagem: "Falha ao enviar. Tente novamente." });
      setStatus("idle");
    }
  };

  const handleReset = () => {
    setValues({ nome: "", email: "", mensagem: "" });
    setErrors({});
    setTouched({});
    setStatus("idle");
  };

  const remaining = MAX_MSG - values.mensagem.length;

  return (
    <section
      id="contato"
      ref={sectionRef}
      className={`ctt-section${visible ? " is-visible" : ""}`}
    >
      {/* ── Left: text panel ── */}
      <div className="ctt-text">
        <span className="ctt-eyebrow">
          <span className="ctt-eyebrow-line" />
          Fale comigo
        </span>

        <h2 className="ctt-title">
          Entre em
          <br />
          <em>contato</em>
        </h2>

        <div className="ctt-divider" />

        <p className="ctt-desc">
          Tem um projeto em mente, quer colaborar ou apenas bater um papo sobre
          tecnologia? Manda uma mensagem — respondo em até 24 horas.
        </p>

        <div className="ctt-tags">
          {TAGS.map((tag) => (
            <span key={tag} className="ctt-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── Right: form ── */}
      <div className="ctt-form-wrap">
        {status === "success" ? (
          <div className="ctt-success">
            <div className="ctt-success-icon">
              <CheckIcon />
            </div>
            <p className="ctt-success-title">Mensagem enviada!</p>
            <p className="ctt-success-sub">
              Obrigado pelo contato. Retorno em breve.
            </p>
            <button className="ctt-success-reset" onClick={handleReset}>
              Enviar outra
            </button>
          </div>
        ) : (
          <div className="ctt-card">
            {/* Nome + Email */}
            <div className="ctt-row">
              <div className="ctt-field">
                <label className="ctt-label">Nome</label>
                <input
                  className={`ctt-input${touched.nome && errors.nome ? " has-error" : ""}`}
                  type="text"
                  name="nome"
                  placeholder="Seu nome"
                  value={values.nome}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="name"
                />
                {touched.nome && errors.nome && (
                  <span className="ctt-error">{errors.nome}</span>
                )}
              </div>

              <div className="ctt-field">
                <label className="ctt-label">E-mail</label>
                <input
                  className={`ctt-input${touched.email && errors.email ? " has-error" : ""}`}
                  type="email"
                  name="email"
                  placeholder="faparicionc@gmail.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="email"
                />
                {touched.email && errors.email && (
                  <span className="ctt-error">{errors.email}</span>
                )}
              </div>
            </div>

            {/* Mensagem */}
            <div className="ctt-field">
              <label className="ctt-label">Mensagem</label>
              <textarea
                className={`ctt-textarea${touched.mensagem && errors.mensagem ? " has-error" : ""}`}
                name="mensagem"
                placeholder="Descreva seu projeto ou dúvida…"
                value={values.mensagem}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span
                className={`ctt-char${remaining <= 60 ? " near-limit" : ""}`}
              >
                {remaining} caracteres restantes
              </span>
              {touched.mensagem && errors.mensagem && (
                <span className="ctt-error">{errors.mensagem}</span>
              )}
            </div>

            {/* Footer */}
            <div className="ctt-footer">
              <span className="ctt-note">Sem spam. Promessa.</span>
              <button
                className={`ctt-btn${status === "loading" ? " ctt-btn--loading" : ""}`}
                onClick={handleSubmit}
                disabled={status === "loading"}
              >
                <span className="ctt-btn-text">Enviar mensagem</span>
                {status === "loading" && (
                  <span className="ctt-btn-spinner">
                    <span />
                  </span>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
