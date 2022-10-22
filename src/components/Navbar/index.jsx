import React from "react";
// import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const Navbar = () => {
  return (
    <nav>
      <div className={styles.navLinks}>
        <a href="/#about">About</a>
        <a href="/#products">Products</a>
        <a href="/#projects">Projects</a>
        <a href="/#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
