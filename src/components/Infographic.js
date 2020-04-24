import React from "react";
import Infocards from "./Infocards";
import "./styles/infographic.scss";

const Infographic = ({ totalOrg, partners }) => {
  return (
    <div className="infographic">
      <h1>Resilience Organizations</h1>
      <div className="innerInfo">
        <Infocards
          copy1="Today we have"
          title={`${totalOrg} Initiatives`}
          copy2="and counting..."
        />
        <Infocards copy1="We work actively with" title="50+ Initiatives" />
        <Infocards
          title="COVID-19"
          copy2={`${"These are the actions taken by the \n initiatives"}`}
        />
      </div>
    </div>
  );
};

export default Infographic;
