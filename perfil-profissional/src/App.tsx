import "./App.css";
import Contato from "./components/contato/Contato";
import Curriculo from "./components/curriculo/Curriculo";

import Footer from "./components/headerEfooter/Footer";
import Header from "./components/headerEfooter/Header";
import Perfil from "./components/perfil/Perfil";

import Sobre from "./components/sobre/Sobre";
import Tecnologias from "./components/tecnologias/Tecnologias";

function App() {
  return (
    <>
      <Header />
      <Perfil />
      <Sobre />
      <Tecnologias />
      <Curriculo />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
