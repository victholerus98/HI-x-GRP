import React from "react"

const Tags = ({item}) => {
  const {
    LinkedToUNCAS,
    MainGeographicFocus,
    PublicPrivateOrCSOFocus,
    PolicyAndPlanning,
    KnowledgeAndlearning,
    FinanceAndBudgets,
    PracticeAndInnovation
  } = item
  const tagArray = [
    LinkedToUNCAS,
    PolicyAndPlanning,
    KnowledgeAndlearning,
    FinanceAndBudgets,
    PracticeAndInnovation
  ]
  console.log(tagArray) //prettier-ignore
  // const [, , , , , , , uncas, , , policy, knowledge, finance, practice] = Object.values(item)
  // console.log(uncas, policy, knowledge, finance, practice)
  return (
    <div>
      {PublicPrivateOrCSOFocus && (
        <button className="tag">{PublicPrivateOrCSOFocus}</button>
      )}
    </div>
  )
}
export default Tags
