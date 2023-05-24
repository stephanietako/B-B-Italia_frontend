import styles from "./styles.module.scss";
import img from "../../assets/images/errorpage.webp";

const Page404 = ({ lang }) => {
  return (
    <div className={styles.pageError}>
      <h1>
        {lang === "fr"
          ? "404 Oups ... cette page n'existe pas"
          : "404 Oops ... this page does not exist"}
      </h1>
      <div className={styles._image}>
        <img
          src={img}
          alt={
            lang === "fr"
              ? "erreur 404 la page est introuvable"
              : "error 404 the page cannot be found"
          }
        />
      </div>
    </div>
  );
};
export default Page404;
