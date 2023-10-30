// Componentes

import Cabecalho from "./components/Cabecalho/cabecalho";
import Hero from "./components/Hero/hero";
import Info from "./components/Info/Info";
import Carousel_produto from "./components/Carousel_produto/Carousel_produto";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Carousel/carousel";

// CSS

import "./App.css";

function App() {
  return (
    <div>
      <Cabecalho></Cabecalho>
      <Hero></Hero>{" "}
      <section className="carousel">
        <Carousel></Carousel>
      </section>
      <Info></Info>
      <Carousel_produto></Carousel_produto>
      <Carousel_produto></Carousel_produto>
      {/* Agendamento */}
      <div className="agendamento flex_colunm center">
        <p className="h2">
          Nosso atendimento de perfuração e troca de joias presencial é
          realizado apenas com horário marco! Mande uma mensagem para agendar o
          seu{" "}
        </p>
        <button className="btn_agendamento">AGENDE JÁ</button>
        <img
          className="img_agendamento"
          src="src\assets\logo_agendamento.svg"
          alt=""
        />
      </div>
      <Carousel_produto></Carousel_produto>{" "}
      {/* Criar um novo elemento para o carousel, já que este carousel será usado para um proposito diferente*/}
      <Footer></Footer>
      
    </div>
  );
}

export default App;
