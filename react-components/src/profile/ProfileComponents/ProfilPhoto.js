import React from "react";

import "./ProfilPhoto.scss";

import profileImg from "../assets/profileImg.jpg";

const ProfilPhoto = () => {
  return (
    <div className="profile--photo">
      <img src={profileImg} />
    </div>
  );
};

export default ProfilPhoto;
