import React, { useState } from "react";
import "./styles/searchbar.scss";

const Searchbar = ({ searchTerm, setSearchTerm, handleSearch }) => {
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
