import React, { useState } from 'react';
import '../styles/Menu.css'; 

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="menuBar">
      <div className="titleBox">Mélissa Vallée's Portfolio</div>
      <button className="menuToggle" onClick={toggleMenu}>
        ☰ 
      </button>
      <nav className={`linkBox ${isMenuOpen ? 'open' : ''}`}>
        <a className="menuLink" href="#home" onClick={closeMenu}>Home</a>
        <a className="menuLink" href="#about" onClick={closeMenu}>About</a>
        <a className="menuLink" href="#services" onClick={closeMenu}>Projects</a>
        <a className="menuLink" href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  );
};

export default Menu;


