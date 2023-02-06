import React from "react";
import styles from "./styles.module.scss";

const Blocs = ({ img, alt, text, textmobile, logo, altLogo, link }) => {
  return (
    <div className={styles.blocs}>
      <div className={styles.__container}>
        <div className={styles.__img}>
          <img src={img} alt={alt} />
        </div>
        <div className={styles.__bloc}>
          <div className={styles.bloc_box}>
            <div className={styles.__logo}>
              <a href={link}>
                <img src={logo} alt={altLogo} />
              </a>
            </div>
            <div className={styles.__text}>
              <p>{text}</p>
            </div>
            <div className={styles.__text_mobile}>
              <p>{textmobile}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blocs;
