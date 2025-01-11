import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Menu.css";

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
      <nav className={`linkBox ${isMenuOpen ? "open" : ""}`}>
        <NavLink
          className={({ isActive }) =>
            isActive ? "menuLink active" : "menuLink"
          }
          to="/"
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "menuLink active" : "menuLink"
          }
          to="/about"
          onClick={closeMenu}
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "menuLink active" : "menuLink"
          }
          to="/projects"
          onClick={closeMenu}
        >
          Projects
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "menuLink active" : "menuLink"
          }
          to="/contact"
          onClick={closeMenu}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Menu;
