import React from "react";
import "./Dentista1.css";

const Dentista1 = () => {
  return (
    <section className="dentist1-section">
      <div className="dentist1-container">

        <div className="dentist1-texto">
          <h2>Dra. Laís Santos Albergaria</h2>
          <p>
            Graduada pela Universidade Federal de Juiz de Fora, especialista, mestre e doutora em dentística pela FOB - USP, a Dra Lais além de atuar como professora de Dentistica da graduação também atua na prática clínica do consultório.
          </p>
        </div>

        <div className="dentist1-image">
          {/* Substitua por imagem real depois */}
          <img src="DSC_1209.jpg" alt="Dra. Laís Santos Albergaria" className="dentist1-img"/>
        </div>

      </div>
    </section>
  );
};

export default Dentista1;
