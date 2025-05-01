import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const links = [
    {nome: "Início", href: "#home" },
    { nome: "Sobre Nós", href: "#sobre-nos" },
    { nome: "Contato", href: "#contato" },
  ];

  const toggleMenu = () => setMenuAberto(!menuAberto);
  const fecharMenu = () => setMenuAberto(false);

  return (
    <>
      {/* Fundo escurecido */}
      {menuAberto && <div className="overlay" onClick={fecharMenu}></div>}

      <nav className="navbar">
        <div className="logo">
          <img src="/19.png" alt="Logo" />
        </div>

        <div className={`menu-icon ${menuAberto ? "aberto" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-links ${menuAberto ? "ativo" : ""}`}>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} onClick={fecharMenu}>
                {link.nome}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
