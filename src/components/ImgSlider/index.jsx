import React, { useState } from "react";
import arrowLeft from "../../assets/icon/arrowLeft.svg";
import arrowRight from "../../assets/icon/arrowRight.svg";
import styles from "./styles.module.scss";

const ImgSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const sliderLenght = slides.lenght;

  const nextSlide = () => {
    setCurrent(current === sliderLenght - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? sliderLenght - 1 : current - 1);
  };

  console.log(current);

  if (!Array.isArray(slides) || sliderLenght <= 0) {
    return null;
  }

  return (
    <section className={styles.slider}>
      <div className={styles.__arrow_left}>
        <img src={arrowLeft} alt={"arrow left symbol"} onClick={prevSlide} />
      </div>
      <div className={styles.__arrow_right}>
        <img src={arrowRight} alt={"arrow right symbol"} onClick={nextSlide} />
      </div>

      {slides.map((slide, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? `{${styles.__slide} ${styles.__active}`
                : `${styles.__slide}}`
            }
          >
            <img src={slide.image} alt="design" className={styles.__image} />
          </div>
        );
      })}
    </section>
  );
};

export default ImgSlider;
