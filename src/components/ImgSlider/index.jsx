import React, { useState } from "react";
// Icons
import chevron_left from "../../assets/icon/chevron_left.svg";
import chevron_right from "../../assets/icon/chevron_right.svg";
// Style
import styles from "./styles.module.scss";

const ImgSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const sliderlength = slides.length;

  const nextSlide = () => {
    setCurrent(current === sliderlength - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? sliderlength - 1 : current - 1);
  };

  if (!Array.isArray(slides) || sliderlength <= 0) {
    return null;
  }

  return (
    <div className={styles.slider}>
      <div className={styles.__arrow_left}>
        <img src={chevron_left} alt={"arrow left symbol"} onClick={prevSlide} />
      </div>
      <div className={styles.__arrow_right}>
        <img
          src={chevron_right}
          alt={"arrow right symbol"}
          onClick={nextSlide}
        />
      </div>

      {slides.map((slide, index) => {
        return (
          <div
            key={index}
            className={`${styles.__slide} ${
              index === current ? styles.__active : ""
            }`}
          >
            {index === current && (
              <div className={styles.__image}>
                <img src={slide.image} alt="mobilier design" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImgSlider;
