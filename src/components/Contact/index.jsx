import React from "react";
import styles from "./styles.module.scss";
import logo from "../../assets/logo/bandb-logo-blanc-crop.png";
import GoogleMap from "../../components/GoogleMap";

const Contact = ({ text }) => {
  return (
    <div className={styles.contact}>
      <div className={styles.__heroSection}>
        <div className={styles.__container}>
          <GoogleMap />
          {/* <div className={styles.__text}>
            <p>{text}</p>
            <p>
              {" "}
              <a href="tel:+0494457720">04 94 45 77 20</a>
            </p>
            <p>
              <a href="mailto:contact@bebsttropez.fr">contact@bebsttropez.fr</a>
            </p>
          </div> */}
        </div>
        <button className={styles.__btn_googlemap}>OUVRIR DANS MAPS</button>
      </div>
    </div>
  );
};

export default Contact;
