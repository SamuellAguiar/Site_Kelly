import React from "react";
import "./aboutUs.css";

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel inventore rerum repellendus nobis distinctio sapiente excepturi incidunt temporibus laudantium reiciendis, beatae facilis in voluptate assumenda dignissimos. Eius, praesentium aliquam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
