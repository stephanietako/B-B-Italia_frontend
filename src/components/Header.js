import React from "react";
import "../styles/header.scss";
import Navbar from "./Navbar";

const Header = () => (
  <div className="header">
    <header className="header__container">
      <p id="nav-title"> LOGO </p>
      <Navbar />
    </header>
  </div>
);

export default Header;
