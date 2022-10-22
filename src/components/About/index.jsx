import React from "react";
import styles from "./styles.module.scss";
import logo from "../../assets/logo/bb-logo-noir.png";

const About = ({ img, alt, text }) => {
  return (
    <div className={styles.about}>
      <div className={styles.about__content}>
        <div className={styles.about__img}>
          <img src={img} alt={alt} />
          <span id={styles.about__christophe}>
            <p>CHRISTOPHE</p>
          </span>
          <div className={styles.about__text}>
            <img src={logo} alt={alt} />
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
