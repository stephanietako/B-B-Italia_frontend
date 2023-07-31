// Styles
import styles from "./styles.module.scss";

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.__text_container}>
        <p>
          Offre exceptionnelle sur tout le mobilier Outdoor disponible au
          showroom{" "}
        </p>
      </div>
    </div>
  );
}

export default Banner;
