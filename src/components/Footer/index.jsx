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
          <li>
            <a href="/terms">Mentions Légales</a>
            {/* <Link to="terms" className={styles.footer_lien}>
              Mentions légales
            </Link> */}
          </li>
          <li>
            <a href="/test">TEST</a>
            {/* <Link to="test" className={styles.test}>
              TEST
            </Link> */}
          </li>
        </ul>
        {/* Copyright (©) Symbol in HTML ===> HTML ENTITY: &copy;
        HTML CODE: &#169;*/}
        <span>
          {" "}
          &#169; Copyright {currentYear} | TENTACLE | Tous droits réservés{" "}
        </span>
      </footer>
    </div>
  );
};

export default Footer;
