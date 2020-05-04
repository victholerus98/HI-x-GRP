import React, { useState, useEffect } from "react";
import "./styles/search.scss";

// child components
import Searchbar from "./Searchbar";
import Filter from "./Filter";
import Tagbar from "./Tagbar";

const Search = ({ data, setData, defaultData }) => {
  //Search Bar functionalities
  const [searchTerm, setSearchTerm] = useState("");
  const [selectFilter, setSelectFilter] = useState("All");

  let wordMatch = 0;
  const handleSearch = () => {
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
  };

  //Filter functionality
  useEffect(() => {
    const filteredData = data.filter((item) => {
      console.log(item[filtertype] === selectFilter);
      return item[filtertype] === selectFilter;
    });

    if (filteredData.length) setData(filteredData);
  }, [selectFilter]);

  return (
    <div>
      <div className="search">
        <Filter />
        <Searchbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
        />
      </div>
      <hr className="hrBlue" />
      <Tagbar />
    </div>
  );
};

export default Search;
