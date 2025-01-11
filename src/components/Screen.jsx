import React from "react";
import "../styles/Screen.css";

const Screen = ({ children, title }) => {
  return (
    <div className="main">
      <h1 className="title">{title}</h1>
      <div className="screen">
        <div className="content-main">{children}</div>
      </div>
    </div>
  );
};

export default Screen;
