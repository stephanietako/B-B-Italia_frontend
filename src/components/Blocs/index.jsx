import React from "react";
import styles from "./styles.module.scss";
// c'est là que ça se passe pour les textes(je me comprends bonjour)

const Blocs = ({ img, alt, text, logo, altLogo }) => {
  return (
    <div className={styles.blocs}>
      <div className={styles.blocs__content}>
        <div className={styles.blocs__img}>
          <img src={img} alt={alt} />
          {/*  */}
          <div className={styles.blocs__text}>
            <div className={styles.blocs__text__box}>
              <div className={styles.__logo}>
                <img src={logo} alt={altLogo} />
              </div>
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blocs;
