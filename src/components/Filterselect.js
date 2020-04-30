import React, { useState, useEffect, useRef } from "react";
import "./styles/filterselect.scss";

const Filterselect = ({ filterName, filterItems, styleDropDown }) => {
  const [dropDownToggle, setDropDownToggle] = useState(false);
  const filterBtnClick = () => setDropDownToggle(!dropDownToggle);
  const dropDown = useRef();

  const dropDownDeselect = (e) => {
    if (dropDown.current.contains(e.target) === false) {
      setDropDownToggle(false);
    }
    return;
  };

  useEffect(() => {
    document.addEventListener("mousedown", dropDownDeselect);
    return () => {
      document.removeEventListener("mousedown", dropDownDeselect);
    };
  }, []);

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
            ? `filterDropDown ${styleDropDown}`
            : `hidden filterDropDown ${styleDropDown}`
        }
        ref={dropDown}
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
