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
      <div className={styles.container}>
        <Headband />
        <div className={styles.banner}>
          <Banner />
        </div>
        <>
          <div className={styles.wrapper}>
            <section id="about">
              <About text="ABOUT" img={images} alt="c'est Christophe" />
            </section>
            <section id="products">
              <Blocs text="PRODUCTS" img={images} alt="c'est Leia" />
            </section>
            {/* <Blocs text="BLOC 1" img={images} alt="c'est Leia" /> */}
            <section id="projects">
              <Blocs text="PROJECTS" img={images} alt="c'est Leia" />
            </section>
            {/* <Blocs text="BLOC 2" img={images} alt="c'est Leia" /> */}
            <section id="contact">
              <Blocs text="CONTACT" img={images} alt="c'est Leia" />
            </section>
            {/* <Blocs text="BLOC 3" img={images} alt="c'est Leia" /> */}
          </div>
        </>
      </div>
    </div>
  );
};

export default HomePage;
