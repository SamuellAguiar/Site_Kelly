import React from "react";
import "./dentista2.css";

const Dentista2 = () => {
  return (
    <section className="dentist2-section">
      <div className="dentist2-container">
        <div className="dentist2-image">
          {/* Substitua por imagem real depois */}
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" rx="20" fill="#ccc" />
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#666" fontSize="16">
              Placeholder
            </text>
          </svg>
        </div>
        <div className="dentist2-texto">
          <h2>Dra. Laís Albergaria</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium iure asperiores voluptatibus nisi a consequuntur deleniti explicabo doloribus. Vel amet veniam perferendis beatae, adipisci ducimus non sunt voluptatum consequatur dolore.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Dentista2;
