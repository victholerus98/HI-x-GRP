import React from "react";
import "./styles/search.scss";

// child components
import Searchbar from "./Searchbar";
import Filter from "./Filter";
import Tagbar from "./Tagbar";

const Search = () => {
  return (
    <div>
     <Searchbar />
     <Filter />
     <Tagbar />
    </div>
  );
};

export default Search;
