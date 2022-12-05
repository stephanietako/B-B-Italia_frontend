import React from "react";
import styles from "./styles.module.scss";
// Logos
import logo from "../../assets/logo/bb-logo-noir.png";
import ScrollButton from "../ScrollToBottom";

const Banner = () => {
  <ScrollButton />;
  return (
    <div className={styles.banner}>
      <img src={logo} className={styles.__logo} alt="logo B and B Italia" />
    </div>
  );
};

export default Banner;
