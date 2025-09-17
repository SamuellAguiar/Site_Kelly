import "./Cards.css";

const Cards = () => {
  return (
    <section className="values-section" id="valores">
      <h3 className="values-title">Investimento</h3>

      <div className="values-container">
        {/* CARD 1 - Destaque */}
        <div className="value-card highlight">
          <span className="highlight-badge">🔥 Primeira Turma</span>

          {/* Preço com desconto */}
          <p className="old-price">De: R$ 2.300,00</p>
          <p className="new-price">Por: R$ 1.800,00</p>

          {/* Pagamento à vista em itálico */}
          <p className="payment-info">
            <em>Pagamento <strong>à vista</strong> via PIX ou boleto</em>
          </p>

          <p className="card-description">
            Aproveite o <strong>preço exclusivo</strong> da primeira turma pagando à vista!
          </p>
        </div>

        {/* CARD 2 - Parcelado */}
        <div className="value-card">
          <h4>Parcelado</h4>
          <p className="new-price">Entrada de R$ 600,00 + 3x de R$ 400,00</p>

          <p className="payment-info">
            <em>Divida no cartão de crédito em até 3x sem juros</em>
          </p>

          <p className="card-description">
            Ideal para quem prefere flexibilidade no pagamento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cards;
