import Cabecalho from "../Cabecalho/cabecalho";
import Footer from "../Footer/Footer";
import Hero from "../Hero/hero";

function Contato() {
  return (
    <div>
      <Cabecalho />
      <Hero />
      <section className="contato flex center">
        <h1 className="contato_h1 flex center">Contato</h1>
        <div className="info_contato">
          <div className="flex center_align">
            <img src="src\assets\map-pin.svg" className="pd-right" alt="" />
            CLN 311, Bloco C, Subsolo, Loja 22 - Brasília, DF - CEP: 70757530{" "}
          </div>
          <div className="flex center_align">
            <img src="src\assets\phone.svg" className="pd-right" alt="" />
            (61) 98357‑2280
          </div>
          <div className="flex center_align">
            <img src="src\assets\mail.svg" className="pd-right" alt="" />
            juguimaraesbp@gmail.com
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
        <form
          className="form_contato flex"
          action="https://formsubmit.co/iuoyyp@gmail.com"
          method="POST"
          encType="text/plain"
        >
          <div className="div_form">
            <label htmlFor="nome">Nome</label>
            <br />
            <input className="form_height" type="text" name="nome" required />
          </div>
          <div className="div_form">
            <label htmlFor="sobrenome">Sobrenome</label>
            <br />
            <input className="form_height" type="text" name="sobrenome" required/>
          </div>
          <div className="div_form_2">
            <label htmlFor="email">E-mail</label>
            <br />
            <input
              className="form_height form_width_2"
              type="email"
              name="email" required
            />
          </div>
          <div className="div_form_2">
            <label htmlFor="telefone">Telefone</label>
            <br />
            <input
              className="form_height form_width_2"
              type="phone"
              name="telefone" required
            />
          </div>
          <div className="div_form_2">
            <label htmlFor="mensagem">Mensagem</label>
            <br />
            <textarea className="form_width_2" name="mensagem" rows="5" required/>
          </div>
          <input className="contato_btn" type="submit" value="Enviar" />
        </form>
        <iframe
          className="google_maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d285.40261845456894!2d-47.89112367907177!3d-15.756184164319782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a398b3f6d5181%3A0x369095b7a5161dd1!2sJ%C3%BA%20Guimar%C3%A3es%20Body%20Piercing!5e0!3m2!1spt-BR!2sbr!4v1696670903986!5m2!1spt-BR!2sbr"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <Footer />
    </div>
  );
}

export default Contato;
