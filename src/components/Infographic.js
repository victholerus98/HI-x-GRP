import React from "react"
import Infocards from "./Infocards"
import "./styles/infographic.scss"

const Infographic = ({ totalOrg, partners, covidSum }) => {
  return (
    <div className="infographic">
      <h1 className="infographicTitle">Resilience Organizations</h1>
      <div className="innerInfo">
        <Infocards
          copy1="Today we have"
          title={[
            <span className="cardOneTitle" key="span1" >{totalOrg} </span>,
            "initiatives"
          ]}
          copy2="and counting..."
        />
        <Infocards
          copy1="We work actively with"
          title={[<span className="cardTwoTitle" key="span2" >50+ </span>, "initiatives"]}
          linkImg={
            <a className="linkButton" href="/">
              <object
                data={require("../assets/externalLink.svg")}
                aria-label="link button"
              ></object>
            </a>
          }
        />{" "}
        <Infocards
          title={[<span className="cardThreeTitle" key="span3" >Covid 19</span>]}
          copy2={covidSum}
          linkImg={
            <a className="linkButton" href="/">
              <object
                data={require("../assets/externalLink.svg")}
                aria-label="link button"
              ></object>
            </a>
          }
        />
      </div>
    </div>
  )
}

export default Infographic
