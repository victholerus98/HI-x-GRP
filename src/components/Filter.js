import React from "react";
import "./styles/filter.scss";
import Filterselect from "./Filterselect";

const typeItems = [
  "All",
  "Fund and financing facilities",
  "Networks, alliances & partnership",
  "Organisation",
  "Programmes & projects",
];
const geoItems = [
  "All",
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

const Filter = ({ data, setData, defaultData }) => {
  return (
    <div className="filter">
      <Filterselect
        filterName="Type"
        filterItems={typeItems}
        styleDropDown="typeDisplacement"
        filtertype="Type"
        data={data}
        setData={setData}
        defaultData={defaultData}
      />
      <Filterselect
        filterName="Geographic Focus"
        filterItems={geoItems}
        styleDropDown="geoDisplacement"
        filtertype="MainGeographicFocus"
        data={data}
        setData={setData}
        defaultData={defaultData}
      />
    </div>
  );
};

export default Filter;
