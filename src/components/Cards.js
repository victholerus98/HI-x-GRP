import React, { useEffect, useState, useRef } from "react";
import Card from "./Card";
import "./styles/cards.scss";

const Cards = ({ data }) => {
  const inputEl = useRef(null);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  // useEffect(() => {
  //   // resizeAllGridItems();
  //   const allItems = document.getElementsByClassName("item");
  //   for (let x = 0; x < allItems.length; x++) {
  //     resizeGridItem(allItems[x]);
  //   }
  // }, [dimensions, setDimensions]);

  // function resizeGridItem(item) {
  //   const grid = document.getElementsByClassName("masonry")[0];
  //   const rowHeight = parseInt(
  //     window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
  //   );
  //   const rowGap = parseInt(
  //     window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
  //   );
  //   const rowSpan = Math.ceil(
  //     (inputEl.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap)
  //   );
  //   item.style.gridRowEnd = "span " + rowSpan;
  // }

  console.log(inputEl.getBoundingClientRect().height);

  return (
    <div ref={inputEl} className="masonry">
      <div className="item content">
        {data.map((item, i) => {
          return <Card key={i} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Cards;
