import React from "react";
import styles from "./styles.module.scss";
import Navbar from "../Navbar";
// import logo from "../../assets/logo/bb-logo-noir.png";

const Header = () => (
  <div className={styles.header}>
    <header className={styles.__container}>
      <Navbar />
    </header>
  </div>
);

export default Header;
