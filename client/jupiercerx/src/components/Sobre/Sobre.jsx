import Cabecalho from "../Cabecalho/cabecalho";
import Footer from "../Footer/Footer";
import Hero from "../Hero/hero";

function Sobre() {
  return (
    <div>
      <Cabecalho />
      <Hero />
      <section className="sobre flex center">
        <div className="sobre_mini_containers">
          <img src="src\assets\ju.png" alt="" />
        </div>
        <div className="sobre_mini_containers flex_colunm center pd_all_sobre">
          <h1 className="margin_all_sobre">Quem é a Ju?</h1>
          <p>
            A Ju é Body Piercer desde 2018, preza muito pela biossegurança e
            atendimento ao cliente. Decidiu abrir a loja para que as pessoas de
            todo o Brasil tenham acesso a joias delicadas e de qualidade.{" "}
          </p>
        </div>
        <div className="sobre_mini_containers flex_colunm center pd_all_sobre">
          <h1 className="margin_all_sobre">O Studio</h1>
          <p>
            Foi idealizado pela Jú Guimarães e pela Ju Ferraz para ser um
            estúdio feminino e acolhedor. Disponível para realizar serviços de
            perfuração corporal e atualização de joalheria, lembrando que não
            está disponível para retirada de joias. ​ O serviço de tatuagem
            também está disponível.
          </p>
        </div>
        <div className="sobre_mini_containers">
          <img src="src\assets\studio.png" alt="" />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Sobre;
