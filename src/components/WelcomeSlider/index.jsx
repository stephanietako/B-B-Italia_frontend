import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

const Thumbnail = ({ array, image, index }) => {
  return (
    <div className={styles.thumbnail}>
      {array.map((objImg, i) => (
        <img
          key={i}
          src={objImg.image}
          alt={objImg.alt}
          onClick={() => image(i)}
          className={index === i ? styles.active : ""}
        />
      ))}
    </div>
  );
};
const WelcomeSlider = ({ imgs }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, []);

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className={styles.welcomeSlider}>
      <img
        className={styles.__mainImg}
        src={imgs[index].image}
        alt={imgs[index].alt}
      />
      <div className={styles.__actions}>
        <button onClick={prev}>🔙</button>
        <button onClick={next}>🔜</button>
      </div>
      <Thumbnail array={imgs} image={setIndex} index={index} />
    </div>
  );
};

export default WelcomeSlider;
