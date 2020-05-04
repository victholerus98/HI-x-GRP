import React, { useState } from "react";
import "./styles/searchbar.scss";

const Searchbar = ({ data, setData, defaultData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  let wordMatch = 0;
  const handleSearch = () => {
    const activeData = data.length === 0 ? defaultData : data;
    // console.log(typeof activeData);
    //ActiveData can be the thing that breaks all the other functions

    const results = activeData.filter((item) => {
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

    if (searchTerm.length > 0) {
      setData(results);
    } else {
      setData(defaultData);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    if (event.key === "Enter") handleSearch();
  };

  return (
    <div className="searchContainer">
      <input
        className="searchBar"
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            handleSearch();
          }
        }}
        type="text"
        placeholder="Search..."
      ></input>
      <input
        className="searchButton"
        id="submitButton"
        type="submit"
        value=""
        onClick={handleSearch}
      ></input>
    </div>
  );
};

export default Searchbar;
