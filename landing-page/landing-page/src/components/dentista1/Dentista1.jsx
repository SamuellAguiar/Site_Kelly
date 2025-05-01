import React from "react";
import "./Dentista1.css";

const Dentista1 = () => {
  return (
    <section className="dentist1-section">
      <div className="dentist1-container">

        <div className="dentist1-texto">
          <h2>Laís Santos Albergaria</h2>
          <p>
            <ul>
              <li><strong>Graduação:</strong> Universidade Federal de Juiz de Fora.</li>
              <li><strong>Especialização, mestrado e doutorado em Dentística:</strong> FOB - USP.</li>
              <li>Atua como professora de Dentística na graduação e também na prática clínica em consultório.</li>
            </ul>
          </p>
        </div>

        <div className="dentist1-image">
          {/* Substitua por imagem real depois */}
          <img src="dentista1.jpeg" alt="Dra. Laís Santos Albergaria" className="dentist1-img" />
        </div>

      </div>
    </section>
  );
};

export default Dentista1;
