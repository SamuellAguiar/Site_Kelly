import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="sobre-mim-section" id="sobre-nos">
      <div className="sobre-mim-container">
        <div className="sobre-mim-image">
          {/* Substitua este SVG por outro quando tiver o definitivo */}
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" rx="20" fill="#ccc" />
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#666" fontSize="16">
              Placeholder
            </text>
          </svg>
        </div>
        <div className="sobre-mim-texto">
          <h2>Sobre O Curso</h2>
          <p>
            Resinas compostas em dentes anteriores por Kelly Aguiar e Laís Albergaria visa preparar estudantes e profissionais da odontologia a desenvolverem habilidades com a resina composta, que permitirão elevar o nível técnico dos procedimentos!
            Unindo teoria e prática, sempre embasadas em uma odontologia ética e baseada em evidências, buscamos que os alunos sejam capacitados a realizar desde procedimentos mais básicos até procedimentos complexos de estratificação em dentes anteriores, com resultados o mais naturais possíveis!

          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
