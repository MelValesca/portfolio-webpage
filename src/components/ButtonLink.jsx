import React from "react";

const ButtonWithLink = ({ url, buttonText }) => {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return <button onClick={handleClick}>{buttonText}</button>;
};

export default ButtonWithLink;
