import React from "react";
import Screen from "../components/Screen";
import Slider from "../components/Slider";

const About = () => {
  const slides = [
    {
      id: 1,
      content: <div className="slideContent">Slide 1</div>,
    },
    {
      id: 2,
      content: <div className="slideContent">Slide 2</div>,
    },
    {
      id: 3,
      content: <div className="slideContent">slide 3</div>,
    },
    {
      id: 4,
      content: <div className="slideContent">slide 4</div>,
    },
  ];

  return (
    <Screen title="About Me">
      <Slider slides={slides} />
    </Screen>
  );
};

export default About;
