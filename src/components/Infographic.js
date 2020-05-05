import React from "react";
import Infocards from "./Infocards";
import "./styles/infographic.scss";

const Infographic = ({ totalOrg, partners, covidSum }) => {
  return (
    <div className="infographic">
      <h1 className="infographicTitle">Resilience Organizations</h1>
      <div className="innerInfo">
        <Infocards
          copy1="Today we have"
          title={[<span className="cardOneTitle">{totalOrg} </span>, "initiatives"]}
          copy2="and counting..."
        />
        <Infocards copy1="We work actively with" title={[<span className="cardTwoTitle">50+ </span>, "initiatives"]} />
        <Infocards
          title={[<span className="cardThreeTitle">Covid 19</span>]}
          copy2={covidSum}
        />
      </div>
    </div>
  );
};

export default Infographic;

// {`${"Actions taken by the \n initiatives"}`}