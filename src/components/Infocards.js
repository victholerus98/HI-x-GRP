import React from "react";
import "./styles/infocards.scss";

const Infocards = ({ copy1, title, copy2 }) => {
  return (
    <div className="infoCards">
      <div className="textContainer">
        <p>{copy1}</p>
        <h1>{title}</h1>
        <p>{copy2}</p>
      </div>
    </div>
  );
};

export default Infocards;
