import React,{useState} from "react";
import "./styles/geographics.scss";

const typeItems = [
  "Fund and financing facilities",
  "Networks, alliances & partnership",
  "Organisations",
  "Programmes & projects"
]
const geoItems = [
  "Fund and financing facilities",
  "Networks, alliances & partnership",
  "Organisations",
  "Programmes & projects"
]

const Geographics = () => {
  const [typeToggle, setTypeToggle] = useState(false)
  const handleBtnClick = () => setTypeToggle(!typeToggle)

  return (
    <div>
      <div className="geoContainer">
        <p>Geographic focus</p>
        <button onClick={handleBtnClick}>All<object
              data={require("../assets/arrow.svg")}
              aria-label="arrow"
            ></object></button>
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


export default Geographics;
