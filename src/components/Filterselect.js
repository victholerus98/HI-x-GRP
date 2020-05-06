import React, { useState } from "react";
import "./styles/filterselect.scss";

const Filterselect = ({
  filterName,
  filterItems,
  styleDropDown,
  selectFilter,
  setSelectFilter,
}) => {
  const [dropDownToggle, setDropDownToggle] = useState(false);
  const filterBtnClick = () => setDropDownToggle(!dropDownToggle);

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
    setDropDownToggle(false);
    setSelectFilter(e.currentTarget.dataset.filter);
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
          dropDownToggle ? `filterDropDown ${styleDropDown}` : `hidden`
        }
        // ref={dropDown}
      >
        {filterItems.map((item, i) => (
          <button
            className="filterItem"
            key={i}
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
