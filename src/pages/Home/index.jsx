import React from "react";
import Banner from "../../components/Banner";
import Blocs from "../../components/Blocs";
import styles from "./styles.module.scss";

const HomePage = () => {
  return (
    <div>
      HOME !!!!!!
      <div className={styles.main}>
        <section>
          <Banner />
          <div className={styles.wrapper}>
            <Blocs />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
