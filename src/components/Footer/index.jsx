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
            <a href="#welcome">
              <img
                className={styles.__logo}
                src={logo}
                alt="B&B Italia Saint-Tropez"
              />
            </a>
          </li>
          <li>
            <Link to="terms">Mentions légales</Link>
          </li>
          <div className={styles.__copyright}>
            {" "}
            &#169; Copyright {currentYear} | TENTACLES | Tous droits réservés{" "}
          </div>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
