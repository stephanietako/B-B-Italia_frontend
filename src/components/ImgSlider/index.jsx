import React, { useState } from "react";
// import { SliderData } from "../../components/SliderData";
import arrowLeft from "../../assets/icon/arrowLeft.svg";
import arrowRight from "../../assets/icon/arrowRight.svg";
import styles from "./styles.module.scss";

//////////
import images from "../../assets/images/leia.jpeg";
import test from "../../assets/images/leia.jpeg";
import test_1 from "../../assets/images/leia.jpeg";
import test_2 from "../../assets/images/leia.jpeg";
import test_3 from "../../assets/images/leia.jpeg";

const ImgSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const SliderData = [
    {
      image: images,
    },
    {
      image: test,
    },
    {
      image: test_1,
    },
    {
      image: test_2,
    },
    {
      image: test_3,
    },
  ];

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  if (!Array.isArray(slides) || length <= 0) {
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

      {SliderData.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? `{${styles.__slide} ${styles.__active}`
                : `${styles.__slide}}`
            }
          >
            <img
              key={index}
              src={slide.image}
              alt="design"
              className={styles.__image}
            />
          </div>
        );
      })}
    </section>
  );
};

export default ImgSlider;
