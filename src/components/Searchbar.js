import React from "react";
import "./styles/searchbar.scss";

const Searchbar = () => {
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

export default Searchbar;
