import React from "react";
import styles from "./styles.module.scss";
import img from "../../assets/images/errorpage.webp";

const Page404 = () => {
  return (
    <div className={styles.pageError}>
      <h1>404 Oups ... cette page n'existe pas </h1>
      <div className={styles._image}>
        <img src={img} alt="erreur 404 la page est introuvable " />
      </div>
    </div>
  );
};
export default Page404;
