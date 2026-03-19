import "./style.css";
import "./btn.css";
import "./background.css";
import me from "../../assets/me.jpg"; // ajuste o caminho correto
import { motion } from "motion/react";

function Intro() {
  return (
    <section className="section1">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div></div>
      <motion.div
        className="in-section1 matrix-grid"
        initial={{ opacity: 0, scale: 0, y: 100 }} // 👈 começa embaixo
        animate={{ opacity: 1, scale: 1, y: 0 }} // 👈 vai para posição normal
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
      >
        {/* TEXTO */}
        <div className="text-content">
          <p className="intro">Olá, eu sou</p>
          <h1>Aparicio Coelho</h1>
          <h2>Desenvolvedor de Software</h2>
          <p className="description">
            Graduado em Sistemas de Informação, apaixonado por criar soluções
            digitais que fazem a diferença. Busco transformar ideias em código!
          </p>

          <button className="button">
            <span>Contato</span>
          </button>
        </div>

        {/* IMAGEM */}
        <div className="imagem1">
          <img src={me} alt="Perfil" />
        </div>
      </motion.div>
    </section>
  );
}

export default Intro;
