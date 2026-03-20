import "./App.css";
import Footer from "./components/headerEfooter/Footer";
import Header from "./components/headerEfooter/Header";
import Perfil from "./components/perfil/perfil";

import Sobre from "./components/sobre/Sobre";
import Tecnologias from "./components/tecnologias/Tecnologias";

function App() {
  return (
    <>
      <Header />
      <Perfil />
      <Sobre />
      <Tecnologias />
      <Footer />
    </>
  );
}

export default App;
