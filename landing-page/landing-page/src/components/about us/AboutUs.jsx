import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="sobre-mim-section" id="sobre-nos">
      <div className="sobre-mim-container">
        <div className="sobre-mim-image">
          {/* Substitua este SVG por outro quando tiver o definitivo */}
          <img src="aboutUs-img.jpeg" alt="Imagem sobre o curso" className="aboutUs-img"/>
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
