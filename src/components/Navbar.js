import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="navLinks">
        <Link to="/">Dogs</Link>
        <Link to="/">Cats</Link>
        <Link to="/">Sheeps</Link>
        <Link to="/">Goats</Link>
      </div>
    </nav>
  );
};

export default Navbar;
