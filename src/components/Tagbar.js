import React, { useState } from "react";
import "./styles/tagbar.scss";

const tagsArray = [
  "Global",
  "Asia",
  "South East Asia",
  "South Asia",
  "SIDS",
  "Africa",
  "LA",
  "MENA",
  "Other (e.g Europe NA)",
];

const Tagbar = () => {
  const [tagdropDownToggle, setDropDownToggle] = useState(false);
  const tagBtnClick = () => setDropDownToggle(!tagdropDownToggle);

  return (
    <div className="tagContainer">
      <button className="tagMenu" onClick={tagBtnClick}>
        Tags +
      </button>

      <div className={tagdropDownToggle ? "tagDropDown" : "hidden"}>
        <p>Tags</p>
        <hr />
        {tagsArray.map((tag, i) => {
          return (
            <button className="tag" key={i}>
              {tag + " x"}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tagbar;
