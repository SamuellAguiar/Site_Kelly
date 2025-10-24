import "./Cards.css";


const Cards = () => {
  
  const whatsappNumber = '+5532984680550';
  const defaultMessage = 'Olá, tenho interesse na inscrição do curso e gostaria de mais informações. Obrigado!';

  return (
    <section className="values-section" id="valores">
      <h3 className="values-title">Investimento</h3>

      <div className="values-container">
        <div className="value-card highlight">
          <span className="highlight-badge">🔥 Primeira Turma</span>

          <p className="old-price">De: R$ 2.300,00</p>
          <p className="new-price">Por: R$ 1.800,00</p>

          <p className="payment-info">
            <em>Pagamento <strong>à vista</strong> via PIX ou boleto</em>
          </p>

          <p className="card-description">
            Aproveite o <strong>preço exclusivo</strong> da primeira turma pagando à vista!
          </p>
        </div>

        <div className="value-card">
          <h4>Parcelado</h4>
          <p className="new-price">4x de R$ 500,00</p>

          <p className="payment-info">
            <em>Parcelado no cartão de crédito em até 4x sem juros</em>
          </p>

          <p className="card-description">
            Ideal para quem prefere flexibilidade no pagamento.
          </p>
        </div>
      </div>

      <div className="inscricao-container">
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inscricao-button"
        >
          Quero me inscrever
        </a>
      </div>
    </section>
  );
};

export default Cards;
