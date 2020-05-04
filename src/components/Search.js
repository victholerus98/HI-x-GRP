import React from "react";
import "./styles/search.scss";

// child components
import Searchbar from "./Searchbar";
import Filter from "./Filter";
import Tagbar from "./Tagbar";

const Search = ({ data, setData, defaultData }) => {
  return (
    <div>
      <div className="search">
        <Filter data={data} setData={setData} defaultData={defaultData} />
        <Searchbar data={data} setData={setData} defaultData={defaultData} />
      </div>
      <hr className="hrBlue" />
      <Tagbar />
    </div>
  );
};

export default Search;
