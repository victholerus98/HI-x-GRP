import React, { useState, useEffect } from "react";
import Cards from "./Cards";

const TagsFilter = ({ data }) => {
  const [activeTags, setActiveTags] = useState([]);
  const [cardData, setCardData] = useState(data);

  const setTags = (e) => {
    const tagValue = e.currentTarget.dataset.tag;
    if (activeTags.indexOf(tagValue) === -1) {
      // const newAddedArray = [...activeTags, tagValue];
      setActiveTags((prevArr) => [...prevArr, tagValue]);
      // console.log(activeTags);
    }
  };

  const removeTags = (e) => {
    const tagValue = e.currentTarget.dataset.tag;
    // const newRemovedArray = [...activeTags.filter((tag) => tag !== tagValue)];
    setActiveTags([...activeTags.filter((tag) => tag !== tagValue)]);
  };

  useEffect(() => {
    const newDataSet = data.filter((item) => {
      let strictFilter = false;
      for (let i = 0; i < activeTags.length; i++) {
        const keyValue = activeTags[i];
        if (item[keyValue]) {
          strictFilter = true;
          console.log(i, activeTags[i], item[keyValue]);
        } else {
          strictFilter = false;
        }
      }
      return strictFilter;
    });

    // if (newDataSet.length === 0) setCardData(data);
    // if (newDataSet.length !== 0) setCardData(newDataSet);

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
