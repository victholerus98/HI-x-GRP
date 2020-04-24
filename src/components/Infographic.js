import React from "react";
import Infocards from "./Infocards";
import "./styles/infographic.scss";
import background from "../assets/background_img.jpg";


const Infographic = () => {
    return(
        <div className="infographic">
            <img src={background} alt="background-image"></img>
            <Infocards />
        </div>
    )
}

export default Infographic;