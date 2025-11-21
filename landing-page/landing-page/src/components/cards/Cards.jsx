import "./Cards.css";


const Cards = () => {
  const whatsappNumber = '+5532984680550';
  const defaultMessage = 'Olá, tenho interesse na inscrição do curso e gostaria de mais informações. Obrigado!';

  return (
    <section className="values-section" id="valores">
      <h3 className="values-title">Investimento</h3>

      <div className="values-container">
        {/* Card de benefícios para a primeira turma */}
        <div className="value-card highlight">
          <span className="highlight-badge">🔥 Primeira Turma</span>

          <ul className="benefits-list">
            <li className="benefit-item">Valor promocional exclusivo para primeira turma!</li>
            <strong><li className="benefit-item" >Parcelamos de forma facilitada em até 12x</li></strong>
          </ul>

          <p className="card-description">Vagas limitadas — garanta sua participação através do nosso WhatsApp.</p>
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
    </section >
  );
};

export default Cards;
