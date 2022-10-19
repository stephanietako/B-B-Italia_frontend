import React from "react";
import Banner from "../../components/Banner";
import Blocs from "../../components/Blocs";
import styles from "./styles.module.scss";
import images from "../../assets/images/leia.jpeg";
import About from "../../components/About";
import Headband from "../../components/Headband";

const HomePage = () => {
  return (
    <div className={styles.main}>
      <section>
        <Headband />
        <div className={styles.banner}>
          <Banner />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.about}>
            <About text="ABOUT" img={images} alt="c'est Christophe" />
          </div>
          <Blocs text="BLOC 1" img={images} alt="c'est Leia" />
          <Blocs text="BLOC 2" img={images} alt="c'est Leia" />
          <Blocs text="BLOC 3" img={images} alt="c'est Leia" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
