import React, { useState } from "react";
import "../styles/Slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Slider = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const goToPrevious = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="wrapper">
      <div className="slider">
        <button onClick={goToPrevious} className="arrow">
          <FontAwesomeIcon icon={faChevronLeft} className="opacity" />
        </button>
        <div className="slideContainer">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${
                index === activeSlide ? "visible" : "hidden"
              }`}
            >
              {slide.content}
            </div>
          ))}
        </div>
        <button onClick={goToNext} className="arrow">
          <FontAwesomeIcon icon={faChevronRight} className="opacity" />
        </button>
      </div>
      <div className="navLinks">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`navButton ${
              activeSlide === index ? "activeNavButton" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
