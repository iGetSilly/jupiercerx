function Info() {
    return (
        <section className="info_section">
            <div className="flex-colunm center">
                <img className="info_img" src="src\assets\frete.svg" alt="Caminhao do frete" />
                <h1>FRETE GRÁTIS</h1>
                <p>a partir de R$ 500,00</p>
            </div>
            <div className="flex-colunm center">
                <img className="info_img" src="src\assets\mapa.svg" alt="Um mapa" />
                <h1>ENVIAMOS</h1>
                <p>para todo brasil</p>
            </div>
            <div className="flex-colunm center">
                <img className="info_img" src="src\assets\card.svg" alt="Um cartão de credito" />
                <h1>EM ATÉ 12X</h1>
                <p>5% OFF no pix</p>
            </div>
            <div className="flex-colunm center">
                <img className="info_img" src="src\assets\safe.svg" alt="Um icone que trasmite segurança" />
                <h1>100% SEGURO</h1>
                <p>Certificado SSL</p>
            </div>
        </section>
    )
}

export default Info