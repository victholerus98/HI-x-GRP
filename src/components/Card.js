import React, { useState, useEffect } from "react";
import "./styles/card.scss";
import Tags from "./Tags";

const Card = ({ item }) => {
  const { NameOfInitiative, Summary, Webaddress, logo } = item;

  return (
    <div className="card">
      <h2>{NameOfInitiative}</h2>
      {logo ? <img src={`${logo}`} alt="logo" /> : null}

      <p>{Summary}</p>
      <div className="card-links">
        <Tags item={item} />
        {Webaddress ? (
          <a className="homebutton" href={Webaddress}>
            <object
              data={require("../assets/homebtn.svg")}
              aria-label="homebutton"
            ></object>
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
