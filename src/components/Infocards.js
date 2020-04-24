import React from "react";
import "./styles/infocards.scss";

const Infocards = ({ copy1, title, copy2 }) => {
  return (
    <div className="infoCards">
      <div className="outerContainer">

        <div className="linkContainer">
          <a className="linkButton" href="/">
            <object
              data={require("../assets/externalLink.svg")}
              aria-label="link button"
            ></object>
          </a>
        </div>
        
        <div className="textContainer">
          <p>{copy1}</p>
          <h1>{title}</h1>
          <p>{copy2}</p>
        </div>

        
      </div>
    </div>
  );
};

export default Infocards;
