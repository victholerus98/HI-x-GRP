import React from "react";
import Infocards from "./Infocards";
import "./styles/infographic.scss";
import background from "../assets/background_img.jpg";


const Infographic = () => {
    return(
        <div className="infographic">
            <Infocards />   
            <Infocards />
            <Infocards />
        </div>
    )
}

export default Infographic;
//<img src={background} alt="background-image"></img>