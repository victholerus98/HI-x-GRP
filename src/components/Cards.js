import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./styles/cards.scss";

const Cards = ({ data }) => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    resizeAllGridItems();
  }, [dimensions, setDimensions]);

  return (
    <div className="masonry">
      <div className="item content">
        {data.map((item, i) => {
          return <Card key={i} item={item} />;
        })}
      </div>
    </div>
  );
};

function resizeGridItem(item) {
  const grid = document.getElementsByClassName("masonry")[0];
  const rowHeight = parseInt(
    window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
  );
  const rowGap = parseInt(
    window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
  );
  const rowSpan = Math.ceil(
    (item.querySelector(".content").getBoundingClientRect().height + rowGap) /
      (rowHeight + rowGap)
  );
  item.style.gridRowEnd = "span " + rowSpan;
}

function resizeAllGridItems() {
  const allItems = document.getElementsByClassName("item");
  for (let x = 0; x < allItems.length; x++) {
    resizeGridItem(allItems[x]);
  }
}

export default Cards;
