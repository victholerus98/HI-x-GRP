import React, { useState, useEffect } from "react";
import Cards from "./Cards";

const TagsFilter = ({ data }) => {
  const [activeTags, setActiveTags] = useState([]);
  const [cardData, setCardData] = useState(data);
  console.log(cardData);
  const setTags = (e) => {
    const tagValue = e.target.dataset.tag;
    if (activeTags.indexOf(tagValue) === -1)
      setActiveTags((prevArray) => [...prevArray, tagValue]);
    e.preventDefault();
    console.log(activeTags);
  };

  useEffect(() => {
    setCardData(() => {
      data.filter((item) => {
        for (let i = 0; i < activeTags; i++) {
          return item.activeTags[i] === "1";
        }
        return null;
      });
    });
    //   setData(data.filter((item) => {
    // let filterMatch = -1;
    //   const itemKeyArray = Object.keys(item);
    //   for (let i = 0; i < activeTags.length; i++) {
    //     filterMatch = itemKeyArray.indexOf(activeTags[i]);
    //   }
    //   if (filterMatch != -1) return item;
    // });
    // );
  }, [activeTags]);
  return (
    <div>
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
