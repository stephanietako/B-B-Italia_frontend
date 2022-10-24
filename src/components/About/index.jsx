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
          {/* <div className={styles.about__text}>
            <div className={styles.about__text__logo}>
              <img src={logo} alt=" logo B&B Italia Saint-Tropez" />
              <p>{text}</p>
            </div>
          </div> */}
          <div className={styles.about__text}>
            <div className={styles.about__text__box}>
              <div className={styles.about__text__logo}>
                <img src={logo} alt=" logo B&B Italia Saint-Tropez" />
              </div>
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
