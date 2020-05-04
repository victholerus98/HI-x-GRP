import React, { useState, useEffect, useRef } from "react";
import "./styles/filterselect.scss";

const Filterselect = ({
  filterName,
  filterItems,
  styleDropDown,
  filtertype,
  data,
  setData,
  defaultData,
}) => {
  const [dropDownToggle, setDropDownToggle] = useState(false);
  const [selectFilter, setSelectFilter] = useState("All");

  const filterBtnClick = () => setDropDownToggle(!dropDownToggle);

  useEffect(() => {
    const filteredData = data.filter((item) => {
      console.log(item[filtertype] === selectFilter);
      return item[filtertype] === selectFilter;
    });

    if (filteredData.length) setData(filteredData);
  }, [selectFilter]);

  // const dropDown = useRef();

  // const dropDownDeselect = (e) => {
  //   if (dropDown.current.contains(e.target) === false) {
  //     setDropDownToggle(false);
  //   }
  //   e.preventDefault();
  //   return;
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", dropDownDeselect);
  //   return () => {
  //     document.removeEventListener("mousedown", dropDownDeselect);
  //   };
  // }, []);

  const setFilter = (e) => {
    setSelectFilter(e.currentTarget.dataset.filter);
    setDropDownToggle(false);
  };

  return (
    <div>
      <div className="filterContainer">
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
        // ref={dropDown}
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
