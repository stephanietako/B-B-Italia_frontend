import React, { useState } from "react";
import { SliderData } from "../../components/SliderData";
import arrowLeft from "../../assets/icon/arrowLeft.svg";
import arrowRight from "../../assets/icon/arrowRight.svg";
import styles from "./styles.module.scss";

const ImgSlider = ({ slides }) => {
  const [current, setCurrrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrrent(current === length - 1 ? 0 : current + 1);
  };
  console.log(current);

  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }

  return (
    <section className={styles.slider}>
      <div className={styles.__arrow_left}>
        <img src={arrowLeft} alt={"arrow left symbol"} />
      </div>
      <div className={styles.__arrow_right}>
        <img src={arrowRight} alt={"arrow right symbol"} onClick={nextSlide} />
      </div>

      {SliderData.map((slide, index) => {
        return (
          <img src={slide.image} alt="design" className={styles.__image} />
        );
      })}
    </section>
  );
};

export default ImgSlider;
