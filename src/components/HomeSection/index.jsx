import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
// CSS Import library
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Styles
import styles from "./styles.module.scss";
// Video
import video_small from "../../assets/video/home_video.webm";
import video_regular from "../../assets/video/VIDEO1250.webm";

const settings = {
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};

const HomeSection = ({ slides }) => {
  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current.addEventListener("loadeddata", () => {
      console.info("Video loaded successfully");
    });
  }, []);
  return (
    <>
      <div className={styles.imgHome}>
        <div className={styles.__container_slider}>
          <Slider {...settings}>
            {slides.map((slide, index) => {
              return (
                <div key={index}>
                  <img
                    src={slide.image}
                    alt="Vues de Saint-Tropez et de l'entrée du showroom"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
        {/* video medium for ipad ...*/}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          // controls
          width="100%"
          height="100%"
          className={styles.__regular_video}
        >
          <source src={video_regular} type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/*  video small for mobile */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          width="100%"
          height="100%"
          className={styles.__mobile_video}
        >
          <source src={video_small} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default HomeSection;
