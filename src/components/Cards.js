import React from "react"
import Card from "./Card"
import Masonry from "react-masonry-css"
import "./styles/cards.scss"

const Cards = ({data}) => {
  return (
    <Masonry
      breakpointCols={4}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {data.map((item, i) => {
        return <Card key={i} item={item} />
      })}
    </Masonry>
  )
}

export default Cards
