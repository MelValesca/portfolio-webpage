import React from 'react';
import '../styles/Menu.css';

const Menu = () => {
  return (
    <header className="menuBar">
      <div className="titleBox">
        Mélissa Vallée's portfolio
      </div>
      <div className="linkBox">
        <a className="menuLink" href="#home">Home</a>
        <a className="menuLink" href="#about">About</a>
        <a className="menuLink" href="#services">Services</a>
        <a className="menuLink" href="#contact">Contact</a>
      </div>
    </header>
  );
};

export default Menu;

