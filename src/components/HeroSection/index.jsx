import React from "react";
// Style
import styles from "./styles.module.scss";
// Gif
import welcomeGif from "../../assets/gif/slidebnb.gif";
const HeroSection = () => {
  return (
    <div className={styles.hero_container}>
      <img
        src={welcomeGif}
        alt={"Showroom à Saint-Tropez"}
        className={styles.__gif}
      />
    </div>
  );
};
export default HeroSection;
