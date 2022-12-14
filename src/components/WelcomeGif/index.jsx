import React from "react";
import styles from "./styles.module.scss";
// Video
// import video from "../../assets/video/videoSlide.mp4";
import gif from "../../assets/video/gifSlide.gif";
const WelcomeGif = () => {
  return (
    <div className={styles.gif}>
      <div className={styles.__container}>
        {/* <video muted autoPlay loop>
          <source src={video} type="video/webm" id="video" />
        </video> */}
        <img src={gif} alt={"welcome to our showroom in Saint-Tropez"} />
      </div>
    </div>
  );
};

export default WelcomeGif;
