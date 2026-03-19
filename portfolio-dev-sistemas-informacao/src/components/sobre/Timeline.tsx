import "./timeline.css";
import ufpi from "../../assets/UFPI-Picos.jpg";
function Timeline() {
  return (
    <section className="timeline bg-black">
      <article>
        <div className="timeline__content">
          <h1>Sobre Mim</h1>
          <time dateTime="2005"></time>
          <hr />
          <p>
            Sou um desenvolvedor apaixonado por tecnologia e inovação. Gosto de
            resolver problemas complexos com soluções simples e elegantes.
            Acredito que a tecnologia tem o poder de transformar vidas.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1753788132128-a6198b5d2f80?w=400"
          alt="camera on a map on a desk"
        />
      </article>

      <article>
        <div className="timeline__content">
          <h1>Minha Formação</h1>
          <time dateTime="2006">2019-2025</time>
          <hr />
          <p>
            Minha base acadêmica foi construída na Universidade Federal do Piauí
            (UFPI), especificamente no Campus Senador Helvídio Nunes de Barros,
            em Picos/PI.
          </p>
        </div>
        <img src={ufpi} alt="ufpi" />
      </article>
    </section>
  );
}

export default Timeline;
