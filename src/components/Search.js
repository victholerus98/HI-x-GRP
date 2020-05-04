import React, { useState, useEffect } from "react";
import "./styles/search.scss";
import "./styles/filter.scss";

// child components
import Searchbar from "./Searchbar";
import Tagbar from "./Tagbar";
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

const Search = ({ data, setData, defaultData }) => {
  //Search Bar functionalities
  const [searchTerm, setSearchTerm] = useState("");
  const [selectType, setSelectType] = useState("All");
  const [selectGeo, setSelectGeo] = useState("All");

  useEffect(() => {
    let wordMatch = 0;
    const activeData = data.length === 0 ? defaultData : data;
    //ActiveData can be the thing that breaks all the other functions
    const results = activeData.filter((item) => {
      if (item.NameOfInitiative.includes(searchTerm)) {
        wordMatch++;
      }
      if (item.Summary.includes(searchTerm)) {
        wordMatch++;
      }
      return wordMatch;
    });

    if (searchTerm.length > 0) {
      setData(results);
    } else {
      setData(defaultData);
    }
  }, [data, searchTerm]);
  //Filter functionality

  // useEffect(() => {
  //   const filteredData = data.filter((item) => {
  //     console.log(item[filtertype] === selectFilter);
  //     return item[filtertype] === selectFilter;
  //   });

  //   if (filteredData.length) setData(filteredData);
  // }, [selectFilter]);

  return (
    <div>
      <div className="search">
        <div className="filter">
          <Filterselect
            filterName="Type"
            filterItems={typeItems}
            styleDropDown="typeDisplacement"
            selectFilter={selectType}
            setSelectFilter={setSelectType}
          />
          <Filterselect
            filterName="Geographic Focus"
            filterItems={geoItems}
            styleDropDown="geoDisplacement"
            selectFilter={selectGeo}
            setSelectFilter={setSelectGeo}
          />
        </div>
        <Searchbar setSearchTerm={setSearchTerm} />
      </div>
      <hr className="hrBlue" />
      <Tagbar />
    </div>
  );
};

export default Search;
