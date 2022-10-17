import React from "react";
import styles from "./styles.module.scss";

const About = ({ img, alt, text }) => {
  return (
    <div className={styles.about}>
      <div className={styles.about__content}>
        <div className={styles.about__img}>
          <img src={img} alt={alt} />
          <div className={styles.about__text}>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
