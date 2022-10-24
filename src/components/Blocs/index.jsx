import React from "react";
import styles from "./styles.module.scss";
import logo from "../../assets/logo/bb-logo-noir.png";

const Blocs = ({ img, alt, text }) => {
  return (
    <div className={styles.blocs}>
      <div className={styles.blocs__content}>
        <div className={styles.blocs__img}>
          <img src={img} alt={alt} />
          {/*  */}
          <div className={styles.blocs__text}>
            <div className={styles.blocs__text__box}>
              <div className={styles.blocs__text__logo}>
                <img src={logo} alt=" logo B&B Italia Saint-Tropez" />
              </div>
              <p>{text}</p>

              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blocs;
