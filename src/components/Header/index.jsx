import React from "react";
import styles from "./styles.module.scss";
import Navbar from "../Navbar";
import logo from "../../assets/logo/bb-logo-noir.png";

const Header = () => (
  <div className={styles.header}>
    <header className={styles.header__container}>
      <Navbar />
      <img
        src={logo}
        className={styles.header__logo}
        alt="logo B and B Italia"
      />
    </header>
  </div>
);

export default Header;
