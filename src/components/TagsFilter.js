import React, { useState } from "react";
import Cards from "./Cards";

const TagsFilter = ({ data }) => {
  const [activeTags, setActiveTags] = useState(null);
  const setTags = (e, data) => {
    console.log(data.id);
  };
  const tagData = data.filter((item, i) => {});

  return (
    <div>
      <button
        className="tag"
        onClick={setTags}
        id="PolicyAndPlanning"
        value={data.id}
      >
        Policy
      </button>
      <button className="tag">Knowledge</button>
      <button className="tag">Innvation</button>
      <Cards data={tagData} />
    </div>
  );
};

export default TagsFilter;
