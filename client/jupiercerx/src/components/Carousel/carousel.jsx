import Slider from "react-slick";

function Carousel({ children }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    variableWidth: true,
    adaptiveHeight: true,
  };

  return (
    <div className="container">
      <Slider {...settings}>
        <div>
          <h2 className="h2">DUVIDO VOCÊ NÃO QUERER TODAS!</h2>
          <img src="src/assets/carossel_exemplo_1.png" alt="Imagem 1" />
          <button className="style_btn">Comprar já</button>
        </div>
        <div>
          <h1 className="h1">
            JOIAS SOB ENCOMENDA, PRAZO DE 7 DIAS PARA O ENVIO
          </h1>
          <img src="src/assets/carossel_exemplo_2.png" alt="Imagem 2" />
          <button className="style_btn">Comprar já</button>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
