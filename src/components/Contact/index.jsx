import React from "react";
import styles from "./styles.module.scss";
import GoogleMap from "../../components/GoogleMap";

const Contact = ({ address, phone, mail }) => {
  return (
    <div className={styles.contact}>
      <div className={styles.__contact_container}>
        <div className={styles.__text_box}>
          <h2>B&B Italia Saint-Tropez</h2>
          <p>{address}</p>
          <p>{phone}</p>
          <p>{mail}</p>
        </div>

        <div className={styles.__map_box}>
          <div className={styles.__map}>
            <GoogleMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
