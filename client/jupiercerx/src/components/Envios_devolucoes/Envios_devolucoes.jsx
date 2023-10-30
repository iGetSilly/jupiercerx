import Cabecalho from "../Cabecalho/cabecalho";
import Footer from "../Footer/Footer";
import Hero from "../Hero/hero";

function Envios_devolocoes() {
  return (
    <div>
      <Cabecalho></Cabecalho>
      <Hero></Hero>
      <section className="container_verde">
        <div className="flex_colunm center espacamento">
          <h1 >Envios e devoluções</h1>
          <div>
            <h2 className="espacamento_titulos">Política de envio</h2>
            <p className="espacamento_texto">
              O prazo de envio é de até 7 dias úteis;<br/> O prazo de entrega depende
              do frete que o cliente escolher (PAC ou SEDEX);<br/> Entregamos em todo
              o território nacional;<br /> Todas as joias são em Titânio(Ti).
            </p>
          </div>
          <div>
            <h2 className="espacamento_titulos">Política de devolução e troca</h2>
            <p className="espacamento_texto">
              Todas as joias são sob encomenda e todas as informações se
              encontram nos cards individuais; Todas as joias têm garantia de 1
              ano para pedrarias e vitalícia para o metal;{" "}
              <b>**TROCAMOS APENAS JOIAS COM DEFEITO DE FABRICAÇÃO!**</b>
            </p>
          </div>
          <img src="src\assets\logo_verde.svg" alt="" className="position_logo"/>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Envios_devolocoes;
