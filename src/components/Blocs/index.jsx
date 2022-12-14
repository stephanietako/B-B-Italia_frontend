import React from "react";
import styles from "./styles.module.scss";
// c'est là que ça se passe pour les textes(je me comprends bonjour)

const Blocs = ({ img, alt, text, logo, altLogo }) => {
  return (
    <div className={styles.blocs}>
      <div className={styles.__container}>
        <div className={styles.__img}>
          <img src={img} alt={alt} />
        </div>
        <div className={styles.__bloc}>
          <div className={styles.__logo}>
            <img src={logo} alt={altLogo} />
          </div>
          <div className={styles.__text}>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blocs;
