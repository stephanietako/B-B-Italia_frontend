import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div>
      <footer className={styles.container}>
        <h2>B&B Italia </h2>
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
