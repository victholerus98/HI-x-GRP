import React, { useState } from "react";
import "./styles/card.scss";
import Tags from "./Tags";

const Card = ({ item }) => {
  const [extraCard, setExtraCard] = useState(false);

  const expandCard = () => {
    setExtraCard(!extraCard);
    console.log(extraCard);
  };

  const {
    NameOfInitiative,
    Summary,
    Webaddress,
    ActiveOnCovid,
    DescriptionOnCOVID,
    HyperlinkToCOVID,
    logo,
  } = item;

  return (
    <div className="cards" onClick={expandCard}>
      <div className="card z-0">
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
      {ActiveOnCovid ? (
        <div
          className={
            extraCard
              ? `extraCard flipCard z-2 `
              : `extraCard flipCardBack z--1`
          }
        >
          <div className="card-desc">
            <p>{DescriptionOnCOVID}</p>
          </div>
          <div className="cardBottom">
            <p>COVID-19</p>
            <a className="covid-btn" href={HyperlinkToCOVID}>
              <object
                data={require("../assets/externalLink-red.svg")}
                aria-label="covid-address"
              ></object>
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
