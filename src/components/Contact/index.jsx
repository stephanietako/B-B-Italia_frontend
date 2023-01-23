import React from "react";
import styles from "./styles.module.scss";
import GoogleMap from "../../components/GoogleMap";

const Contact = ({ address, phone, mail }) => {
  return (
    <div className={styles.contact}>
      <div className={styles.__contact_container}>
        <div className={styles.__text_box}>
          <h1>B&B Italia Saint-Tropez</h1>
          <p>{address}</p>
          <p>{phone}</p>
          <p>{mail}</p>
        </div>

        <div className={styles.__map_box}>
          <div className={styles.map}>
            <GoogleMap />
          </div>
        </div>

        <a
          href="https://www.google.fr/maps/dir//B%26B+Italia,+20+Av.+Foch,+83990+Saint-Tropez/@43.2691807,6.6441104,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x12cec73e4c7ba6b1:0x8d59750a547f25c!2m2!1d6.6441337!2d43.2692179"
          target="_blank"
          rel="noreferrer noopener"
        >
          <button className={styles.__btn_googlemap}>OUVRIR DANS MAPS</button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
