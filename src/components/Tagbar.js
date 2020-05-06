import React, { useState } from "react";
import "./styles/tagbar.scss";

const tagsArray = [
  "Public",
  "Private",
  "CSO",
  "UNCAS",
  "Policy",
  "Knowledge",
  "Finance",
  "Innovation",
  "Active on COVID-19",
];

const tagsRealInitial = [
  "PublicPrivateOrCSOFocus",
  "PublicPrivateOrCSOFocus",
  "PublicPrivateOrCSOFocus",
  "LinkedToUNCAS",
  "PolicyAndPlanning",
  "KnowledgeAndlearning",
  "FinanceAndBudgets",
  "PracticeAndInnovation",
  "ActiveOnCOVID-19",
];

const Tagbar = ({ activeTags, setActiveTags, displayTags, setDisplayTags }) => {
  const [tagdropDownToggle, setDropDownToggle] = useState(false);
  const tagBtnClick = () => setDropDownToggle(!tagdropDownToggle);

  const setTags = (e) => {
    const tagName = e.currentTarget.dataset.name;
    const tagValue = e.currentTarget.dataset.tag;
    if (displayTags.indexOf(tagValue) === -1) {
      setDisplayTags([...displayTags, tagName]);
      setActiveTags([...activeTags, tagValue]);
    }
  };

  const removeTags = (e) => {
    const tagName = e.currentTarget.dataset.name;
    const tagValue = e.currentTarget.dataset.tag;
    setDisplayTags([...displayTags.filter((tag) => tag !== tagName)]);
    setActiveTags([...activeTags.filter((tag) => tag !== tagValue)]);
  };

  return (
    <div className="tagContainer">
      <button className="tagMenu" onClick={tagBtnClick}>
        Tags +
      </button>
      {displayTags &&
        displayTags.map((tag, i) => {
          return (
            <button
              key={i}
              className="tagMenu"
              onClick={removeTags}
              data-name={tag}
              data-tag={tagsRealInitial[tagsArray.indexOf(tag)]}
            >
              {tag + " X"}
            </button>
          );
        })}

      <div className={tagdropDownToggle ? "tagDropDown" : "hidden"}>
        <p>Tags</p>
        <hr />
        {tagsArray.map((tag, i) => {
          return (
            <button
              className="tag"
              key={i}
              onClick={setTags}
              data-name={tag}
              data-tag={tagsRealInitial[i]}
            >
              {tag + " +"}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tagbar;
