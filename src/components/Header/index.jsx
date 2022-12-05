import React from "react";
import styles from "./styles.module.scss";
import Navbar from "../Navbar";
// import ScrollToBottom from "../../components/ScrollToBottom";

const Header = () => {
  return (
    <div className={styles.__header}>
      <nav>
        <Navbar />
      </nav>
      {/* <ScrollToBottom /> */}
      {/* <div className={styles.banner}>
          <img src={logo} className={styles.__logo} alt="logo B and B Italia" />
        </div> */}
    </div>
  );
};

export default Header;
