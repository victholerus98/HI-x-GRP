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
  const [searchTerm, setSearchTerm] = useState("");
  const [selectType, setSelectType] = useState("All");
  const [selectGeo, setSelectGeo] = useState("All");
  const [activeTags, setActiveTags] = useState([]);
  const [displayTags, setDisplayTags] = useState([]);

  /*
  useEffect(() => {
    if(Tags) Tags(data)
    if(selectType !== "ALL" && selectGeo !== "ALL") Tags(data)
    if(searchTerm) Search(data)
  }, [])

  function Filter(data)
  function Tags(data)
  function Search(data)
  */

  useEffect(() => {
    let searchResult = defaultData;
    let filterResults = false;

    //tags function
    if (activeTags.length > 0) {
      searchResult = tag(searchResult);
      if (searchResult.length !== 0) filterResults = true;
    }

    //Filter function
    if (selectType !== "All") {
      searchResult = filter(searchResult, "Type", selectType);
      if (searchResult.length !== 0) filterResults = true;
    }

    if (selectGeo !== "All") {
      searchResult = filter(searchResult, "MainGeographicFocus", selectGeo);
      if (searchResult.length !== 0) filterResults = true;
    }

    //Search Bar function
    if (searchTerm) {
      searchResult = search(searchResult);
      if (searchResult !== 0) filterResults = true;
    }

    if (filterResults) {
      console.log("data length " + searchResult.length);
      setData(searchResult);
    } else {
      setData(defaultData);
    }
  }, [searchTerm, selectType, selectGeo, activeTags]);

  function search(data) {
    let wordMatch = 0;
    return data.filter((item) => {
      if (item.NameOfInitiative.includes(searchTerm)) {
        wordMatch++;
      }
      if (item.Summary.includes(searchTerm)) {
        wordMatch++;
      }
      return wordMatch;
    });
  }

  function filter(data, filtertype, selectFilter) {
    return data.filter((item) => {
      return item[filtertype] === selectFilter;
    });
  }

  function tag(data) {
    return data.filter((item) => {
      let strictFilter = 0;
      for (let i = 0; i < activeTags.length; i++) {
        const keyValue = activeTags[i];
        if (item[keyValue]) {
          strictFilter++;
        }
      }
      return strictFilter === activeTags.length;
    });
  }

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
      <Tagbar
        activeTags={activeTags}
        setActiveTags={setActiveTags}
        displayTags={displayTags}
        setDisplayTags={setDisplayTags}
      />
    </div>
  );
};

export default Search;
