import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const Navbar = () => {
  return (
    <nav>
      <div className={`${styles.navLinks} ${styles.test}`}>
        <Link to="/">Dogs</Link>
        <Link to="/">Cats</Link>
        <Link to="/">Sheeps</Link>
        <Link to="/">Goats</Link>
      </div>
    </nav>
  );
};

export default Navbar;
