import React, { useState, useRef, useEffect } from "react";
// Icons
import chevron_left from "../../assets/icon/chevron_left.svg";
import chevron_right from "../../assets/icon/chevron_right.svg";
// Style
import styles from "./styles.module.scss";

const ImgSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const sliderlength = slides.length;
  const imagesRef = useRef([]);
  const observer = useRef(
    new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target;
          image.src = image.dataset.src;
          observer.current.unobserve(image);
        }
      });
    })
  );

  useEffect(() => {
    const currentImagesRef = imagesRef.current;
    currentImagesRef.forEach((image) => {
      observer.current.observe(image);
    });
  });

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
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
              index === current ? styles.__active : styles.__inactive
            }`}
          >
            {index === current && (
              <div className={styles.__image}>
                <h1>Showroom</h1>
                <img src={slide.image} alt="mobilier design" />
              </div>
            )}
          </div>
        );
      })}
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
    </div>
  );
};

export default ImgSlider;
