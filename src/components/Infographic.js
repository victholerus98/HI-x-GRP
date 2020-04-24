import React from "react";
import Infocards from "./Infocards";
import "./styles/infographic.scss";

const Infographic = ({ totalOrg, partners }) => {
  return (
    <div className="infographic">
      <h1>Resiliance Organizations</h1>
      <div className="innerInfo">
        <Infocards />
        <Infocards />
        <Infocards />
      </div>
    </div>
  );
};

export default Infographic;
