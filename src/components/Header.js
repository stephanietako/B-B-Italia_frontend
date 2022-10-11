import React from "react";
import "../styles/Header.css";
import Navbar from "./Navbar";

const Header = () => (
  <div className="header">
    <header className="header-container">
      <h1 id="nav-title"> LOGO </h1>
      <Navbar />
    </header>
  </div>
);

export default Header;
