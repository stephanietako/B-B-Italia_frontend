import React from "react";
import styles from "./styles.module.scss";
import images from "../../assets/images/leia.jpeg";
import background from "../../assets/images/nasa.gif";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.__main_block}>
        <div className={styles.__container_left}>
          <img src={background} className={styles.background} alt="nasa" />
          <div className={styles.__text_block}>
            <p>Welcome to Mars ...</p>
          </div>
        </div>

        <div className={styles.__container_right}>
          <img src={images} className={styles.image} alt="banner bloc" />
          <div className={styles.__text_block}>
            <p>BOX 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
