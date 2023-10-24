function Hero() {
  return (
    <>
      <section className="hero">
        <div className="logo">
          <h1>JU PIERCER STORE</h1>
          <img src="src\assets\logo.svg" className="logo_img"></img>
        </div>
        <nav>
          <ul className="flex space-between center_align">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/loja">Loja</a>
            </li>
            <li>
              <a href="/sobre">Sobre</a>
            </li>
            <li>
              <a href="/contato">Contato</a>
            </li>
            <li>
              <a href="/elasusam">#Elas Usam</a>
            </li>
            <li className="flex center">
              <img src="src\assets\search.svg" className="search_img"></img>
              <input
                type="search"
                id="txtsearch"
                placeholder="Pesquisar..."
                className="input_search"
              ></input>
            </li>
            <li className="flex center">
              <img src="src\assets\user.svg" className="search_img"></img>
              <a href="#">Login</a>
            </li>
            <li className="flex center">
              <img src="src\assets\cart.svg" className="search_img"></img>
              <a href="#">Carrinho</a>
            </li>
          </ul>
        </nav>
        <img src="src\assets\cobra.svg" className="elementoComposicao1"></img>
        <img
          src="src\assets\flor_hero.svg"
          className="elementoComposicao2"
        ></img>
      </section>
    </>
  );
}

export default Hero;
