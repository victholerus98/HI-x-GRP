import React from "react";
import "./styles/card.scss";

const Card = ({ item }) => {
  const { NameOfInitiative, Summary, WebAddress } = item;
  return (
    <div className="card">
      <h2>{NameOfInitiative}</h2>
      <img src={require("../assets/adaptation_fund.png")} alt="logo" />
      <p>{Summary}</p>
      <div className="card-links">
        <button className="tag">Global</button>
        <a className="homebutton" href={WebAddress}>
          <object
            data={require("../assets/homebtn.svg")}
            aria-label="homebutton"
          ></object>
        </a>
      </div>
    </div>
  );
};

export default Card;
