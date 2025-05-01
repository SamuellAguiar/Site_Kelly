import React from "react";
import "./Dentista2.css";

const Dentista2 = () => {
  return (
    <section className="dentist2-section">
      <div className="dentist2-container">
        <div className="dentist2-image">
          {/* Substitua por imagem real depois */}
          <img src="DSC_1249.jpg" alt="Dra. Kelly Krysley de Oliveira Aguiar" className="dentist2-img" />
        </div>
        <div className="dentist2-texto">
          <h2>Dra. Kelly Krysley de Oliveira Aguiar</h2>
          <p>
            Graduada pela Universidade Federal de Juiz de Fora e especialista em dentística pela FOB-USP, a Dra Kelly atua na prática clínica da dentística desde 2017. Com cursos de atualização nas áreas de resina, fotografia odontológica e bruxismo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Dentista2;
