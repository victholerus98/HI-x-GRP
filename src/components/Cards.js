import React from "react";
import Card from "./Card";

const Cards = ({ data }) => {
    return (
    data.map((item, index) => {
        <Card />
    })
    )
}

export default Cards;