import React from "react";
import "./styles/card.scss";
import Tags from "./Tags";

const Card = ({ item }) => {
  const { NameOfInitiative, Summary, WebAddress, logo } = item;

  return (
    <div className="card">
      <h2>{NameOfInitiative}</h2>
      {logo ? (
        <img src={`${logo}`} alt="logo" />
      ) : (
        <img src={require("../assets/IconPlaceholder.png")} alt="placeholder" />
      )}

      <p>{Summary}</p>
      <div className="card-links">
        <Tags item={item} />
        {WebAddress ? (
          <a className="homebutton" href={WebAddress}>
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
