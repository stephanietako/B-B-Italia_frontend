import React from "react";
import styles from "./styles.module.scss";
import Navbar from "../Navbar";
import logo from "../../assets/logo/bb-logo-noir.png";

const Header = () => (
  <div className={styles.header}>
    <header className={styles.header__container}>
      <img src={logo} className={styles.logo} alt="logo B and B Italia" />
      <Navbar />
    </header>
  </div>
);

export default Header;
