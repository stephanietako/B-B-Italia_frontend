import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import logo from "../../assets/logo/bandb-logo-blanc.png";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className={styles.footer}>
      <footer className={styles.__container}>
        <div className={styles.__logo}>
          <Link to="/">
            <img
              className={styles.__logo}
              src={logo}
              alt="B&B Italia Saint-Tropez"
            />
          </Link>
        </div>

        <ul>
          <Link to="/">Lien 1</Link>
          <Link to="/">Lien 2</Link>
          <Link to="/">Mentions légales</Link>
        </ul>
        <span>{currentYear}</span>
      </footer>
    </div>
  );
};

export default Footer;
