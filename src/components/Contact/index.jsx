import React from "react";
import styles from "./styles.module.scss";
import logo from "../../assets/logo/bandb-logo-blanc.png";
import map from "../../assets/images/map.jpeg";

const Contact = ({ text }) => {
  return (
    <div className={styles.contact}>
      <div className={styles.__heroSection}>
        <div className={styles.__img}>
          <img src={map} alt="plan" />
        </div>
        <div className={styles.__logo}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={styles.__container}>
          <div className={styles.__text}>
            <p>{text}</p>
            <p>
              {" "}
              <a href="tel:+0494457720">04 94 45 77 20</a>
            </p>
            <p>
              <a href="mailto:contact@bebsttropez.fr">contact@bebsttropez.fr</a>
            </p>
          </div>
          <button className={styles.__btn_googlemap}>OUVRIR DANS MAPS</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
