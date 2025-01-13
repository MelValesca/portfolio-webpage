import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink for routing
import "../styles/SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const SideBar = ({ categories }) => {
  const [expandedCategories, setExpandedCategories] = useState(new Set());
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const initialExpandedCategories = new Set();
      categories.forEach((_, index) => initialExpandedCategories.add(index));
      setExpandedCategories(initialExpandedCategories);
    } else {
      setExpandedCategories(new Set());
    }
  }, [isMobile, categories]);

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

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className={`sideBarWrap ${isSidebarOpen ? "open" : ""}`}>
      {isMobile && (
        <div className="categoryWrap">
          <div className="categoryHeader" onClick={toggleSidebar}>
            <span>Projects Categories</span>
            <FontAwesomeIcon icon={faChevronDown} className="sideBarArrow" />
          </div>
        </div>
      )}

      {(isMobile && isSidebarOpen) || !isMobile ? (
        <div className="sideBarContent">
          {categories.map((category, index) => (
            <div className="categoryWrap" key={index}>
              <div
                className="categoryHeader"
                onClick={() => toggleCategory(index)}
              >
                <span>{category.name}</span>
                <FontAwesomeIcon
                  icon={
                    expandedCategories.has(index) ? faChevronUp : faChevronDown
                  }
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
      ) : null}
    </div>
  );
};

export default SideBar;
