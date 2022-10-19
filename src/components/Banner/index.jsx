import React from "react";
import styles from "./styles.module.scss";
import images from "../../assets/images/leia.jpeg";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__content}>
        <div className={styles.banner__left}>
          <p>BOX 1</p>
        </div>
        <div className={styles.banner__right}>
          <p>BOX 2</p>
          <img src={images} className={styles.image} alt="banner bloc" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
