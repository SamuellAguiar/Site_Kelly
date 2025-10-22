import "./Dentista2.css";

const Dentista2 = () => {
  return (
    <section className="dentist2-section">
      <div className="dentist2-container">
        <div className="dentist2-image">
          <img src="dentista2.jpeg" alt="Dra. Kelly Krysley de Oliveira Aguiar" className="dentist2-img" />
        </div>
        <div className="dentist2-texto">
          <h2>Kelly Krysley de Oliveira Aguiar</h2>
            <ul>
              <li><strong>Graduação:</strong> Universidade Federal de Juiz de Fora.</li>
              <li><strong>Especialização em Dentística:</strong> FOB - USP.</li>
              <li>Atua como especialista em dentística em consultório, tendo também como foco a fotografia odontológica e o tratamento do bruxismo, por possuir atualizações nessas áreas.</li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Dentista2;
