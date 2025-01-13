import React from "react";
import ButtonLink from "../../components/ButtonLink";

const Curler = () => {
  return (
    <div className="curlerWrap">
      <div className="curlerInfos">
        <h2>Curler 0.0.1</h2>
        <p>
          <h3>Technologies involved :</h3>
          <ul>
            <li>Java</li>
            <li>Maven</li>
            <li>MVC</li>
          </ul>
          <strong>Status:</strong> Incomplete, still a work in progress
        </p>
        <ButtonLink
          url="https://github.com/MelValesca/GUI-curler"
          buttonText="View source code"
        />
        <hr></hr>
      </div>
      <div className="curlerContent">
        <h3>Description</h3>
        <p>
          This project demonstrates a basic <strong>Java Swing</strong>{" "}
          graphical user interface. It uses <strong>Maven</strong> to manage the
          build lifecycle and dependencies.
        </p>
        <p>
          This project is a CTF-focused toolkit that allows you to brute force
          hidden or obscure repositories on a website. Through a user-friendly
          GUI, you can craft and send GET or POST requests, add custom headers,
          and even render returned HTML right inside the application. By
          customizing your requests before brute forcing, you can efficiently
          discover hidden site paths and gather insights for your
          capture-the-flag challenges.
        </p>
      </div>
    </div>
  );
};

export default Curler;
