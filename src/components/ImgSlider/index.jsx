import React, { useState } from "react";
import { SliderData } from "../../components/SliderData";
import arrowLeft from "../../assets/icon/arrowLeft.svg";
import arrowRight from "../../assets/icon/arrowRight.svg";
import styles from "./styles.module.scss";

const ImgSlider = (slides) => {
  const [current, setcurrrent] = useState(0);
  const length = slides.length;
  return (
    <section className={styles.slider}>
      <div className={styles.__arrow_left}>
        <img src={arrowLeft} alt={"arrow left symbol"} />
      </div>
      <div className={styles.__arrow_right}>
        <img src={arrowRight} alt={"arrow right symbol"} />
      </div>

      {SliderData.map((slide, index) => {
        return <img src={slide.image} alt="design" />;
      })}
    </section>
  );
};

export default ImgSlider;
