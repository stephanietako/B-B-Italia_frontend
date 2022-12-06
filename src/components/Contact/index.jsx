import React from "react";
import styles from "./styles.module.scss";
import logost from "../../assets/logo/bb.png";
import map from "../../assets/images/map.jpeg";

const Contact = () => {
  return (
    <div className={styles.hero_image}>
      <img src={map} alt="plan" />
      <div className={styles.hero_texte}>
        <img src={logost} alt="Logo" />
        <p>avenue FOCH</p>
        <p>83990 Saint-Tropez</p>
        <p>Accès direct par le Parking Foch</p>
        <p>04 94 77 20</p>
        <p>contact@bebsainttropez</p>
        <button>Hire me</button>
      </div>
    </div>
  );
};

export default Contact;
