import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink for routing
import "../styles/SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const SideBar = ({ categories }) => {
  const [expandedCategories, setExpandedCategories] = useState(new Set());

  const toggleCategory = (index) => {
    setExpandedCategories((prev) => {
      const newExpandedCategories = new Set(prev);
      if (newExpandedCategories.has(index)) {
        newExpandedCategories.delete(index);
      } else {
        newExpandedCategories.add(index);
      }
      return newExpandedCategories;
    });
  };

  return (
    <div className="sideBarWrap">
      {categories.map((category, index) => (
        <div className="categoryWrap" key={index}>
          <div className="categoryHeader" onClick={() => toggleCategory(index)}>
            <span>{category.name}</span>
            <FontAwesomeIcon
              icon={expandedCategories.has(index) ? faChevronUp : faChevronDown}
              className="sideBarArrow"
            />
          </div>

          {expandedCategories.has(index) && (
            <div className="categoryLinks">
              {category.links.map((link, i) => (
                <div key={i} className="sideBarLink">
                  <NavLink
                    to={link.path}
                    className="sideBarLink"
                    activeClassName="active"
                  >
                    {link.name}
                  </NavLink>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
