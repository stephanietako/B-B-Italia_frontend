import React from "react";
import Slider from "react-slick";
// CSS Import library
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Styles
import styles from "./styles.module.scss";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

const SliderHome = ({ slides }) => {
  return (
    <>
      <div className={styles.imgHome}>
        <Slider {...settings}>
          {slides.map((slide, index) => {
            console.log(slide);
            return (
              <div key={index}>
                <img src={slide.image} alt="mobilier design" />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default SliderHome;
