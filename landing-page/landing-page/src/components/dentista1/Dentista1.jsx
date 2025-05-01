import React from "react";
import "./Dentista1.css";

const Dentista1 = () => {
  return (
    <section className="dentist1-section">
      <div className="dentist1-container">
        
        <div className="dentist1-texto">
          <h2>Dra. Kelly Krysley de Aguiar</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea id modi distinctio accusamus enim repellendus, dolorum minima perspiciatis quisquam dolores possimus. Consequatur animi fuga aliquid reprehenderit recusandae corrupti ab asperiores?
          </p>
        </div>

        <div className="dentist1-image">
          {/* Substitua por imagem real depois */}
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" rx="20" fill="#ccc" />
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#666" fontSize="16">
              Placeholder
            </text>
          </svg>
        </div>

      </div>
    </section>
  );
};

export default Dentista1;
