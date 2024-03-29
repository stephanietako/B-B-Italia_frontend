import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import logo from "../../assets/logo/bandb-logo-blanc.webp";

const Footer = ({ lang }) => {
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
            <Link to="terms">
              {lang === "fr" ? "Mentions légales" : "Legal notices"}
            </Link>
          </li>
          <li>
            <div className={styles.__copyright}>
              &#169; Copyright {currentYear} | Lise Braun | Tako Dev |
              {lang === "fr"
                ? "\nTous droits réservés"
                : "\nAll rights reserved"}{" "}
            </div>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
