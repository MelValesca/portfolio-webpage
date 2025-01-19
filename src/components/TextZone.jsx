import React from "react";
import "../styles/TextZone.css";

const Screen = ({ content }) => {
  return (
    <div className="textWrap">
      <div className="TextContent">{content}</div>
    </div>
  );
};

export default Screen;
