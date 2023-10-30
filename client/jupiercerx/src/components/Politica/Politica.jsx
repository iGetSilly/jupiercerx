import Cabecalho from "../Cabecalho/cabecalho";
import Footer from "../Footer/Footer";
import Hero from "../Hero/hero";

function Politica() {
  return (
    <div>
      <Cabecalho></Cabecalho>
      <Hero></Hero>
      <section className="container_verde">
        <div className="flex_colunm center espacamento">
          <h1>POLÍTICA DA LOJA</h1>
          <div className="tamanho_width">
            <h2>Sobre a loja</h2>
            <p>
              O Ju Piercer Store é idealizado pela Jú Guimarães, que trabalha
              com piercing desde 2018. <br />
              Realizamos também perfurações corporais no nosso estúdio, em
              Brasília-DF, com horário marcado! <br /> Nos orgulhamos em
              oferecer um ambiente limpo e seguro, assim como nossas joias.{" "}
            </p>
          </div>
          <div className="tamanho_width">
            <h2>Vendas</h2>
            <p>A nossa loja atende apenas no varejo, não vendemos atacado.</p>
          </div>
          <div className="tamanho_width">
            <h2>Métodos de pagamento</h2>
            <p>Cartões de crédito/débito - Pix - Boleto</p>
          </div>
          <div className="tamanho_width">
            <h2>​Privacidade e segurança</h2>
            <p>
              A sua privacidade é importante para nós. É política do Ju Piercer
              respeitar a sua privacidade em relação a qualquer informação sua
              que possamos coletar no site Ju Piercer, e outros sites que
              possuímos e operamos. <br /> Solicitamos informações pessoais
              apenas quando realmente precisamos delas para lhe fornecer um
              serviço. Fazemo-lo por meios justos e legais, com o seu
              conhecimento e consentimento. Também informamos por que estamos
              coletando e como será usado. <br /> Apenas retemos as informações
              coletadas pelo tempo necessário para fornecer o serviço
              solicitado. Quando armazenamos dados, protegemos dentro de meios
              comercialmente aceitáveis ​​para evitar perdas e roubos, bem como
              acesso, divulgação, cópia, uso ou modificação não autorizados.{" "}
              <br /> Não compartilhamos informações de identificação pessoal
              publicamente ou com terceiros, exceto quando exigido por lei.{" "}
              <br /> O nosso site pode ter links para sites externos que não são
              operados por nós. Esteja ciente de que não temos controle sobre o
              conteúdo e práticas desses sites e não podemos aceitar
              responsabilidade por suas respectivas políticas de privacidade.
              Você é livre para recusar a nossa solicitação de informações
              pessoais, entendendo que talvez não possamos fornecer alguns dos
              serviços desejados. O uso continuado de nosso site será
              considerado como aceitação de nossas práticas em torno de
              privacidade e informações pessoais. Se você tiver alguma dúvida
              sobre como lidamos com dados do usuário e informações pessoais,
              entre em contacto connosco.
              <ol className="tamanho_width">
                <li>
                  O serviço Google AdSense que usamos para veicular publicidade
                  usa um cookie DoubleClick para veicular anúncios mais
                  relevantes em toda a Web e limitar o número de vezes que um
                  determinado anúncio é exibido para você.
                </li>
                <li>
                  Para mais informações sobre o Google AdSense, consulte as FAQs
                  oficiais sobre privacidade do Google AdSense.
                </li>
                <li>
                  Utilizamos anúncios para compensar os custos de funcionamento
                  deste site e fornecer financiamento para futuros
                  desenvolvimentos. Os cookies de publicidade comportamental
                  usados ​​por este site foram projetados para garantir que você
                  forneça os anúncios mais relevantes sempre que possível,
                  rastreando anonimamente seus interesses e apresentando coisas
                  semelhantes que possam ser do seu interesse.
                </li>
                <li>
                  Vários parceiros anunciam em nosso nome e os cookies de
                  rastreamento de afiliados simplesmente nos permitem ver se
                  nossos clientes acessaram o site através de um dos sites de
                  nossos parceiros, para que possamos creditá-los adequadamente
                  e, quando aplicável, permitir que nossos parceiros afiliados
                  ofereçam qualquer promoção que pode fornecê-lo para fazer uma
                  compra.
                </li>
              </ol>
            </p>
          </div>

          <img
            src="src\assets\logo_verde.svg"
            alt=""
            className="position_logo"
          />
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Politica;
