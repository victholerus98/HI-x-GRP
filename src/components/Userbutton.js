import React from "react";
import "./styles/userbutton.scss";

const Userbutton = ({ buttonName }) => {
  return (
    <button className="userbutton margin-right-10">
      <p>{buttonName}</p>
    </button>
  );
};

export default Userbutton;
