import React from "react";

const Tags = ({ item }) => {
  const {
    LinkedToUNCAS,
    PublicPrivateOrCSOFocus,
    PolicyAndPlanning,
    KnowledgeAndlearning,
    FinanceAndBudgets,
    PracticeAndInnovation,
  } = item;

  const tagArray = [
    LinkedToUNCAS,
    PolicyAndPlanning,
    KnowledgeAndlearning,
    FinanceAndBudgets,
    PracticeAndInnovation,
  ];

  const tagNameArray = [
    "UNCAS",
    "Policy",
    "Knowledge",
    "Finance",
    "Innovation",
  ];
  const publicPrivateCsoFocus = PublicPrivateOrCSOFocus.replace(/\s+/g, "")
    .replace("&", ",")
    .split(",");
  return (
    <div>
      {tagArray.map((tag, i) => {
        return tag && <button className="tag">{tagNameArray[i]}</button>;
      })}
      {publicPrivateCsoFocus.map((tag, i) => {
        return (
          tag && <button className="tag">{publicPrivateCsoFocus[i]}</button>
        );
      })}
    </div>
  );
};
export default Tags;

// return tag !== null ? <button className="tag">{tagNameArray[i]}</button> : null;
