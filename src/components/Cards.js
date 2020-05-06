import React from "react";
import Card from "./Card";
import Masonry from "react-masonry-css";
import "./styles/cards.scss";

const Cards = ({ data }) => {
  if (data.length !== 0) {
    return (
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.map((item, i) => {
          return <Card key={i} item={item} />;
        })}
      </Masonry>
    );
  } else {
    return (
      <Masonry
        breakpointCols={1}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
      <p>There are no results matching your search</p>
      </Masonry>
    )}
};

export default Cards;
