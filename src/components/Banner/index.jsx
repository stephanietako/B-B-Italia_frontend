import React from "react";
import styles from "./styles.module.scss";
// Logos
import logo from "../../assets/logo/bb-logo-noir.png";

const Banner = () => {
  return (
    <div>
      <div className={styles.banner}>
        <img src={logo} className={styles.__logo} alt="logo B and B Italia" />
      </div>
    </div>
  );
};

export default Banner;
