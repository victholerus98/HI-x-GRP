import React, { useState, useEffect } from "react";
import "./styles/search.scss";
import "./styles/filter.scss";
import "./styles/resetbtn.scss";

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

const geoInitials = [
  "All",
  "Global",
  "Regional - Asia",
  "Regional - SE Asia",
  "Regional - S Asia",
  "Regional - SIDS",
  "Regional - Africa",
  "Regional - LA",
  "Regional - MENA",
  "Other (e.g Europe NA)",
];

const Search = ({ setData, defaultData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectType, setSelectType] = useState("All");
  const [selectGeo, setSelectGeo] = useState("All");
  const [activeTags, setActiveTags] = useState([]);
  const [displayTags, setDisplayTags] = useState([]);
  const [searchActive, setSearchActive] = useState(false);

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
      setSearchActive(true);
    } else {
      setData(defaultData);
      setSearchActive(false);
    }
  }, [searchTerm, selectType, selectGeo, activeTags]);

  function search(data) {
    return data.filter((item) => {
      let wordMatch = 0;
      if (
        item.NameOfInitiative.toUpperCase().includes(searchTerm.toUpperCase())
      ) {
        wordMatch++;
      }
      if (item.Summary.toUpperCase().includes(searchTerm.toUpperCase())) {
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

  function reset() {
    setSearchTerm("");
    setSelectType("All");
    setSelectGeo("All");
    setActiveTags([]);
    setDisplayTags([]);
    setData(defaultData);
    setSearchActive(false);
  }

  function tag(data) {
    return data.filter((item) => {
      let strictFilter = 0;
      for (let i = 0; i < activeTags.length; i++) {
        const keyValue = activeTags[i];
        if (item[keyValue] && keyValue === "PublicPrivateOrCSOFocus") {
          if (item[keyValue].indexOf(displayTags[i]) > -1) strictFilter++;
        }
        if (item[keyValue] && keyValue !== "PublicPrivateOrCSOFocus") {
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
            filterItems={geoInitials}
            styleDropDown="geoDisplacement"
            selectFilter={selectGeo}
            setSelectFilter={setSelectGeo}
          />
        </div>
        <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <hr className="hrBlue" />
      <div className="searchLine2">
        <Tagbar
          activeTags={activeTags}
          setActiveTags={setActiveTags}
          displayTags={displayTags}
          setDisplayTags={setDisplayTags}
        />
        {searchActive ? (
          <button onClick={reset} className="resetBtn">
            <p>Reset Search</p>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Search;
