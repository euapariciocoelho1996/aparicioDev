import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header bg-black border-bottom border-secondary border-opacity-25">
      <div className="logo">MeuPortfólio</div>

      {/* Botão mobile */}
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>

      {/* Navegação */}
      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <a href="#sobre" onClick={() => setMenuOpen(false)}>
          Sobre
        </a>
        <a href="#tecnologias" onClick={() => setMenuOpen(false)}>
          Tecnologias
        </a>
        <a href="#contato" onClick={() => setMenuOpen(false)}>
          Contato
        </a>
      </nav>
    </header>
  );
};

export default Header;
