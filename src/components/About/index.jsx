import styles from "./styles.module.scss";
import logo from "../../assets/logo/bb-logo-noir.webp";

const About = ({ img, alt, text, textmobile }) => {
  return (
    <div className={styles.about}>
      <div className={styles.__container}>
        <div className={styles.__img}>
          <img src={img} alt={alt} />
        </div>
        <div className={styles.__about_content}>
          <div className={styles.__logo}>
            <img src={logo} alt=" logo B&B Italia Saint-Tropez" />
          </div>
          <div className={styles.__text}>
            <p>{text}</p>
          </div>
          <div className={styles.__text_mobile}>
            <p>{textmobile}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
