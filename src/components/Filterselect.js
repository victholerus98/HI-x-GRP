import React, { useState } from "react";
import "./styles/filterselect.scss";

const Filterselect = ({ filterName, filterItems, style }) => {
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
        className={
          dropDownToggle
            ? `filterDropDown ${style}`
            : `hidden filterDropDown ${style}`
        }
      >
        {filterItems.map((item) => (
          <li className="filterItem" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filterselect;
