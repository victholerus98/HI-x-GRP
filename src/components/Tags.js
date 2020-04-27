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
  return (
    <div>
      <button className="tags">{PublicPrivateOrCSOFocus}</button>
    </div>
  )
}
export default Tags
