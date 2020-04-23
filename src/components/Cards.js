import React from "react"
import Card from "./Card"

const Cards = ({data}) => {
  return data.map((item, i) => {
    return <Card key={i} item={item} />
  })
}

export default Cards
