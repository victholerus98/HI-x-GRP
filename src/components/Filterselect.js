import React, { useState, useEffect, useRef } from "react";
import "./styles/filterselect.scss";

const Filterselect = ({ filterName, filterItems, styleDropDown }) => {
  const [dropDownToggle, setDropDownToggle] = useState(false);
  const [selectFilter, setSelectFilter] = useState("All");

  const filterBtnClick = () => setDropDownToggle(!dropDownToggle);
  // const dropDown = useRef();

  // const dropDownDeselect = (e) => {
  //   if (dropDown.current.contains(e.target) === false) {
  //     setDropDownToggle(false);
  //   }
  //   return;
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", dropDownDeselect);
  //   return () => {
  //     document.removeEventListener("mousedown", dropDownDeselect);
  //   };
  // }, []);

  const setFilter = (e) => {
    console.log(e.currentTarget.dataset.filter);
    setSelectFilter(e.currentTarget.dataset.filter);
  };

  return (
    <div>
      <div className="filterContainer" /*ref={dropDown}*/>
        <p>{filterName}</p>
        <button onClick={filterBtnClick}>
          {selectFilter}
          <object
            data={require("../assets/arrow.svg")}
            aria-label="arrow"
          ></object>
        </button>
      </div>
      <div
        className={
          dropDownToggle
            ? `filterDropDown ${styleDropDown}`
            : `hidden filterDropDown ${styleDropDown}`
        }
      >
        {filterItems.map((item) => (
          <button
            className="filterItem"
            key={item}
            data-filter={item}
            onClick={setFilter}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filterselect;
