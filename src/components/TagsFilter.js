import React, { useState, useEffect } from "react";
import Cards from "./Cards";

const TagsFilter = ({ data }) => {
  const [activeTags, setActiveTags] = useState([]);
  const [cardData, setCardData] = useState(data);

  const setTags = (e) => {
    const tagValue = e.currentTarget.dataset.tag;
    if (activeTags.indexOf(tagValue) === -1) {
      setActiveTags((prevArr) => [...prevArr, tagValue]);
    }
  };

  const removeTags = (e) => {
    const tagValue = e.currentTarget.dataset.tag;
    setActiveTags([...activeTags.filter((tag) => tag !== tagValue)]);
  };

  useEffect(() => {
    const newDataSet = data.filter((item) => {
      let strictFilter = 0;
      for (let i = 0; i < activeTags.length; i++) {
        const keyValue = activeTags[i];
        if (item[keyValue]) {
          strictFilter++;
        }
      }
      return strictFilter === activeTags.length;
    });

    switch (newDataSet.length) {
      case 0:
        setCardData(data);
        break;
      default:
        setCardData(newDataSet);
        break;
    }
  }, [activeTags, data]);

  return (
    <div>
      {activeTags &&
        activeTags.map((tag, i) => {
          return (
            <button key={i} onClick={removeTags} data-tag={tag}>
              {tag}
            </button>
          );
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
