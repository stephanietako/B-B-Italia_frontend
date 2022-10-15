import React from "react";
import styles from "./styles.module.scss";
import Navbar from "../Navbar";

const Header = () => (
  <div className={styles.header}>
    <header className={styles.header__container}>
      <p id="nav-title"> LOGO </p>
      <Navbar />
    </header>
  </div>
);

export default Header;
