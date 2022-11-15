import React from "react";
import styles from "./styles.module.scss";
import Navbar from "../Navbar";

const Header = () => (
  <header className={styles.container}>
    <Navbar />
  </header>
);

export default Header;
