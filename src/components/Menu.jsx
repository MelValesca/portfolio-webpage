import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Menu.css";

const Menu = ({ title, links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="menuBar">
      <div className="titleBox">{title}</div>
      <button className="menuToggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`linkBox ${isMenuOpen ? "open" : ""}`}>
        {links.map((link, index) => (
          <NavLink
            key={index}
            className={({ isActive }) =>
              isActive ? "menuLink active" : "menuLink"
            }
            to={link.path}
            onClick={closeMenu}
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Menu;
