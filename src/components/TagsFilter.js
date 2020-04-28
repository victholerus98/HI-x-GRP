import React, { useState, useEffect } from "react";
import Cards from "./Cards";

const TagsFilter = ({ data }) => {
  const [activeTags, setActiveTags] = useState([]);
  const [cardData, setCardData] = useState(data);

  const setTags = (e) => {
    const tagValue = e.currentTarget.dataset.tag;
    if (activeTags.indexOf(tagValue) === -1) {
      setActiveTags((prevArray) => [...prevArray, tagValue]);
      console.log(activeTags);
    }
  };

  const filterData = () => {
    const newDataSet = data.filter((item) => {
      for (let i = 0; i < activeTags.length; i++) {
        const keyValue = activeTags[i];
        return item[keyValue];
      }
    });

    console.log(newDataSet);
    if (newDataSet.length !== 0) setCardData(newDataSet);
  };

  useEffect(() => {
    const newDataSet = data.filter((item) => {
      for (let i = 0; i < activeTags.length; i++) {
        const keyValue = activeTags[i];
        return item[keyValue];
      }
    });

    console.log(newDataSet);
    if (newDataSet.length !== 0) setCardData(newDataSet);
  }, [activeTags]);
  return (
    <div>
      {activeTags &&
        activeTags.map((tag, i) => {
          return <button key={i}>{tag}</button>;
        })}
      <button className="tag" onClick={setTags} data-tag="PolicyAndPlanning">
        Policy
      </button>
      <button className="tag" onClick={setTags} data-tag="KnowledgeAndlearning">
        Knowledge
      </button>
      <button
        className="tag"
        onClick={setTags}
        data-tag="PracticeAndInnovation"
      >
        Innvation
      </button>
      <Cards data={cardData} />
    </div>
  );
};

export default TagsFilter;
