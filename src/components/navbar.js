import React from "react";
import "./styles/Navbar.scss";
import logo from "../assets/grp_logo.png";
import Userbutton from "./Userbutton";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo"></img>
      <Userbutton buttonName="Login" />
      <Userbutton buttonName="Sign Up" />
    </nav>
  );
};

export default Navbar;
