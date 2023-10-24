import Cabecalho from "../Cabecalho/cabecalho";
import Carousel_produto from "../Carousel_produto/Carousel_produto";
import Footer from "../Footer/Footer";
import Hero from "../Hero/hero";

function Loja() {
  return (
    <div>
      <Cabecalho></Cabecalho>
      <Hero></Hero>
      <section>
        <h1 className="flex center todos_produto">TODOS OS PRODUTOS</h1>
        <div className="dropdown_container">
          <ul className="dropdown_loja">
            <p>Selecionar Por</p>
            <li className="dropdownchild_loja">Tamanho</li>
            <li className="dropdownchild_loja">Tipo</li>
            <li className="dropdownchild_loja">Local</li>
          </ul>
        </div>
      </section>

      <Carousel_produto></Carousel_produto>
      <Carousel_produto></Carousel_produto>
      <Footer></Footer>
    </div>
  );
}

export default Loja;
