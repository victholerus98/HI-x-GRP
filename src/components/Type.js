import React, {useState} from "react"
import "./styles/type.scss"

const typeItems = [
  "Fund and financing facilities",
  "Networks, alliances & partnership",
  "Organisations",
  "Programmes & projects"
]

const Type = () => {
  const [typeToggle, setTypeToggle] = useState(false)
  const handleBtnClick = () => setTypeToggle(!typeToggle)

  return (
    <div>
      <div className="typeContainer">
        <p>Type</p>
        <button onClick={handleBtnClick}>All</button>
      </div>
      <ul className={typeToggle ? "typeDropDown" : "hidden typeDropDown"}>
        {typeItems.map(typeItem => (
          <li className="typeItem" key={typeItem}>
            {typeItem}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Type
