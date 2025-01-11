import React from "react";
import "../styles/Profile.css";

const Profile = ({ image, title, content }) => {
  return (
    <div className="wrap">
      <div className="picture-box">
        <img src={image} alt={`${title}-picture`} className="picture" />
      </div>
      <div className="text-box">
        <h2>{title}</h2>
        {content.map((paragraph, index) => (
          <div key={index} className="intro">
            {paragraph}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
