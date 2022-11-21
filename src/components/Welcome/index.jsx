import React from "react";
import styles from "./styles.module.scss";
import background from "../../assets/images/nasa.gif";

const Welcome = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.__main_block}>
        <div className={styles.__container}>
          <img src={background} className={styles.background} alt="nasa" />
          <div className={styles.__text_block}>
            <p>Welcome to Mars ...</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
