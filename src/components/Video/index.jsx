import React from "react";
import styles from "./styles.module.scss";
// Video
import video from "../../assets/video/videoSlide.mp4";
const Video = () => {
  return (
    <div className={styles.__videoBloc}>
      <div className={styles.__video}>
        <video muted autoPlay loop className={styles.__video}>
          <source src={video} type="video/webm" />
        </video>
      </div>
    </div>
  );
};

export default Video;
