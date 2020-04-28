import React, { useState, useEffect } from "react";
import "./styles/card.scss";
import Tags from "./Tags";

const Card = ({ item }) => {
  const { NameOfInitiative, Summary, WebAddress } = item;
  // const [image, setImage] = useState();
  const apiLogo = "//logo.clearbit.com/";

  // useEffect(() => {
  //   fetch(apiLogo + WebAddress).then(response => {
  //     if (response.ok) {
  //       setImage(true)
  //     } else {
  //       setImage(false)
  //     }
  //   })
  // }, [WebAddress])

  return (
    <div className="card">
      <h2>{NameOfInitiative}</h2>
      {/* {WebAddress ? (
        <img src={`${apiLogo + WebAddress}`} alt="logo" />
      ) : (
        <img src={require("../assets/IconPlaceholder.png")} alt="placeholder" />
      )} */}

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
