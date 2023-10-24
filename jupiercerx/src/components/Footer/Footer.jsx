function Footer() {
  return (
    <section className="Footer flex space-around center_align">
      <div className="info_footer">
        <div className="contatos flex ">
          <ul className="lista_contato">
            <li>
              <a href="/contato">Contato</a>
            </li>
            <li>
              <a href="">Envios e devoluções</a>
            </li>
            <li>
              <a href="">Política da loja</a>
            </li>
          </ul>
          <ul className="lista_contato">
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Whatsapp</a>
            </li>
          </ul>
        </div>
        <div className="endereco">
          <p>
            Ju Piercer - CNPJ: 47.424.691/0001-14 - Asa norte, CLN 311, Bloco C,
            Subsolo, Loja 22 - CEP: 70757530 <br /> Tel: (61) 98357‑2280 | Prazo
            para envio de 7 dias úteis.
          </p>
        </div>
        <div className="tipo_pagamento flex">
          <div className="safety_container">
            <div className="safety flex">
              <img src="src\assets\shield.svg" alt="" />
              <p>Segurança</p>
            </div>
            <p>
              Ambiente 100% Seguro. <br /> Sua Informação é Protegida Pela{" "}
              <br /> Criptografia SSL 256-Bit.
            </p>
          </div>
          <div className="pay_methods_container flex_colunm">
            <p>Métodos de pagamentos aceitos</p>
            <div className="pay_methods flex space-around">
              <img src="src\assets\visa.svg" alt="" />
              <img src="src\assets\mastercard.svg" alt="" />
              <img src="src\assets\elo.svg" alt="" />
              <img src="src\assets\barcode.svg" alt="" />
              <img src="src\assets\pix.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src="src\assets\logo_footer.svg" alt="" />
      </div>
    </section>
  );
}

export default Footer;
