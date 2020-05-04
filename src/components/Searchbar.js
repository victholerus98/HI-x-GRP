import React, { useState } from "react";
import "./styles/searchbar.scss";

const Searchbar = ({ setSearchTerm }) => {
  const [preSearchTerm, setPreSearchTerm] = useState("");

  const handleChange = (event) => {
    setPreSearchTerm(event.target.value);
    if (event.key === "Enter") handleSearch();
  };

  const handleSearch = () => {
    setSearchTerm(preSearchTerm);
  };

  return (
    <div className="searchContainer">
      <input
        className="searchBar"
        value={preSearchTerm}
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
