import React, { useState } from "react";

const Filterselect = ({ filterName, filterItems }) => {
  const [dropDownToggle, setDropDownToggle] = useState(false);
  const filterBtnClick = () => setDropDownToggle(!dropDownToggle);

  return (
    <div>
      <div className="filterContainer">
        <p>{filterName}</p>
        <button onClick={filterBtnClick}>
          All
          <object
            data={require("../assets/arrow.svg")}
            aria-label="arrow"
          ></object>
        </button>
      </div>
      <ul
        className={dropDownToggle ? "filterDropDown" : "hidden filterDropDown"}
      >
        {filterItems.map(item => (
          <li className="filterItem" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filterselect;
