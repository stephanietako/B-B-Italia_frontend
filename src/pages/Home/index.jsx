import React from "react";
import Banner from "../../components/Banner";
import Blocs from "../../components/Blocs";
import styles from "./styles.module.scss";
import images from "../../assets/images/leia.jpeg";

const HomePage = () => {
  return (
    <div>
      HOME !!!!!!
      <div className={styles.main}>
        <section>
          <Banner />
          <div className={styles.wrapper}>
            <Blocs text="SALUT" img={images} alt="c'est Leia" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
