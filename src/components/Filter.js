import React from "react";
import "./styles/filter.scss";
import Filterselect from "./Filterselect";
import Geographics from "./Geographics";

// child components
//import Type from "./Type";
//import Geographics from "./Geographics";

const typeItems = [
  "Fund and financing facilities",
  "Networks, alliances & partnership",
  "Organisations",
  "Programmes & projects"
]
const geoItems = [
  "Fund and financing facilities",
  "Networks, alliances & partnership",
  "Organisations",
  "Programmes & projects"
]

const Filter = () => {
  return (
    <div className="filter">
      <Filterselect filterName={typeItems && geoItems} />
    </div>
  );
};

export default Filter;
