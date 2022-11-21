import React, { useState } from "react";
// Icons
import arrowPlay from "../../assets/icon/arrowPlay.svg";
import arrow_left_circle from "../../assets/icon/arrow_left_circle.svg";
import arrow_right_circle from "../../assets/icon/arrow_right_circle.svg";
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

  // console.log(current);

  if (!Array.isArray(slides) || sliderlength <= 0) {
    return null;
  }

  return (
    <div className={styles.slider}>
      <div className={styles.__arrow_left}>
        <img src={arrowPlay} alt={"arrow left symbol"} onClick={prevSlide} />
      </div>
      <div className={styles.__arrow_right}>
        <img src={arrowPlay} alt={"arrow right symbol"} onClick={nextSlide} />
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
                <img src={slide.image} alt="design" />
              </div>
              // <img src={slide.image} alt="design" className={styles.__image} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImgSlider;
