import React from "react";
import "./styles/search.scss";

const Search = () => {
  return (
    <div className="searchContainer">
      <input className="searchBar" type="text" placeholder="Search..."></input>
      <input
        className="searchButton"
        id="submitButton"
        type="submit"
        value=""
      ></input>
    </div>
  );
};

export default Search;
