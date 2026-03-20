import { useEffect, useState } from "react";
import "./Header.css";

const NAV_LINKS = [
  { label: "Início", href: "#perfil" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tecnologias", href: "#tecnologias" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#perfil");

  /* scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* active section — scroll-based, works with inner-scroll containers */
  useEffect(() => {
    const getActive = () => {
      const scrollY = window.scrollY + 80; // offset for fixed header height

      // walk sections bottom-up and pick the first whose top <= scrollY
      const sections = NAV_LINKS.map(({ href }) => ({
        href,
        el: document.querySelector(href) as HTMLElement | null,
      })).filter((s) => s.el !== null);

      let current = sections[0]?.href ?? "#perfil";
      for (const { href, el } of sections) {
        if (el && el.getBoundingClientRect().top + window.scrollY <= scrollY) {
          current = href;
        }
      }
      setActive(current);
    };

    getActive(); // run once on mount
    window.addEventListener("scroll", getActive, { passive: true });
    return () => window.removeEventListener("scroll", getActive);
  }, []);

  /* smooth scroll */
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className={`header${scrolled ? " is-scrolled" : ""}`}>
        {/* logo */}
        <a
          href="#perfil"
          className="header__logo"
          onClick={(e) => handleNav(e, "#perfil")}
        >
          <div className="header__logo-mark">
            <span className="header__logo-letters">AC</span>
          </div>
          <span className="header__logo-name">Aparicio Coelho</span>
        </a>

        {/* nav */}
        <nav className="header__nav" aria-label="Navegação principal">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`header__nav-link${active === href ? " is-active" : ""}`}
              onClick={(e) => handleNav(e, href)}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* right group */}
        <div className="header__right">
          <a
            href="https://wa.me/5587981721791"
            target="_blank"
            rel="noreferrer"
            className="header__cta"
          >
            Contato
          </a>

          {/* burger */}
          <button
            className={`header__burger${menuOpen ? " is-open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span className="header__burger-line" />
            <span className="header__burger-line" />
            <span className="header__burger-line" />
          </button>
        </div>
      </header>

      {/* mobile drawer */}
      <div
        className={`header__drawer${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="header__drawer-link"
            onClick={(e) => handleNav(e, href)}
          >
            {label}
          </a>
        ))}
        <a
          href="https://wa.me/5587981721791"
          target="_blank"
          rel="noreferrer"
          className="header__drawer-cta"
        >
          Contato
        </a>
      </div>
    </>
  );
}
