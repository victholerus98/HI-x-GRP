import React from "react";
import "./styles/filter.scss";
import Filterselect from "./Filterselect";

const typeItems = [
  "Fund and financing facilities",
  "Networks, alliances & partnership",
  "Organisations",
  "Programmes & projects",
];
const geoItems = [
  "Global",
  "Asia",
  "South East Asia",
  "South Asia",
  "SIDS",
  "Africa",
  "LA",
  "MENA",
  "Other (e.g Europe NA)",
];

const Filter = () => {
  return (
    <div className="filter">
      <Filterselect
        filterName="Type"
        filterItems={typeItems}
        style="typeDisplacement"
      />
      <Filterselect
        filterName="Geographic Focus"
        filterItems={geoItems}
        style="geoDisplacement"
      />
    </div>
  );
};

export default Filter;
