import React from "react";
import "./styles/navbar.scss";
import logo from "../assets/grp_logo.png";
import Userbutton from "./Userbutton";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo"></img>
      <div>
        <Userbutton buttonName="Login" />
        <Userbutton buttonName="Sign Up" />
      </div>
    </nav>
  );
};

export default Navbar;
