import React from "react";
import "./styles/filter.scss";

// child components
import Type from "./Type";
import Geographics from "./Geographics";


const Filter = () => {
  return (
    <div className="filter">
      <Type />
      <Geographics />
    </div>
  );
};

export default Filter;
