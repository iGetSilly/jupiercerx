import Slider from "react-slick";

function Carousel_produto() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrrows: true,
    variableWidth: true,
    adaptiveHeight: true,
  };

  return (
    <div className="container_produto">
      <Slider {...settings}>
        <div className="produto pd-right">
          <img
            className="img_produto"
            src="src\assets\card_produto.svg"
            alt=""
          />
          <div className="produto_view">
            <a href="#">Visualização Rapida</a>
          </div>
          <div className="flex_colunm center">
            <p>Pingente Navete Swarovski</p>
            <img src="src\assets\divisor_cobra.svg" alt="" />
            <p className="prod_preco">R$ 190,00</p>
          </div>
        </div>
        <div className="pd-left pd-right">
          <img
            className="img_produto"
            src="src\assets\card_produto.svg"
            alt=""
          />
          <div className="flex_colunm center">
            <p>Pingente Navete Swarovski</p>
            <img src="src\assets\divisor_cobra.svg" alt="" />
            <p className="prod_preco">R$ 190,00</p>
          </div>
        </div>
        <div className="pd-left pd-right">
          <img
            className="img_produto"
            src="src\assets\card_produto.svg"
            alt=""
          />
          <div className="flex_colunm center">
            <p>Pingente Navete Swarovski</p>
            <img src="src\assets\divisor_cobra.svg" alt="" />
            <p className="prod_preco">R$ 190,00</p>
          </div>
        </div>
        <div className="pd-left pd-right">
          <img
            className="img_produto"
            src="src\assets\card_produto.svg"
            alt=""
          />
          <div className="flex_colunm center">
            <p>Pingente Navete Swarovski</p>
            <img src="src\assets\divisor_cobra.svg" alt="" />
            <p className="prod_preco">R$ 190,00</p>
          </div>
        </div>
        <div className="pd-left">
          <img
            className="img_produto"
            src="src\assets\card_produto.svg"
            alt=""
          />
           <div className="flex_colunm center">
            <p>Pingente Navete Swarovski</p>
            <img src="src\assets\divisor_cobra.svg" alt="" />
            <p className="prod_preco">R$ 190,00</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel_produto;
