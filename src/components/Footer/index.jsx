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
        <ul>
          <li>
            <Link to="/">
              <img
                className={styles.__logo}
                src={logo}
                alt="B&B Italia Saint-Tropez"
              />
            </Link>
          </li>
          <li>
            <Link to="terms">Mentions légales</Link>
          </li>
          <li>
            <span>
              {" "}
              &#169; Copyright {currentYear} | TENTACLES | Tous droits réservés{" "}
            </span>
          </li>
          <li></li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
