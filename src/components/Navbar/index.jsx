import React from "react";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styles from "./styles.module.scss";

const Navbar = () => {
  return (
    <nav>
      {/* exemple si je veux mettre plusieurs class ds la même div <div className={`${styles.navLinks} ${styles.test}`}> */}
      <div className={styles.navLinks}>
        <HashLink smooth to="/#about">
          À propos
        </HashLink>
        <HashLink smooth to="/#products">
          Produits
        </HashLink>
        <HashLink smooth to="/#projects">
          Projets
        </HashLink>
        <HashLink smooth to="/#contact">
          Contact
        </HashLink>
      </div>
    </nav>
  );
};

export default Navbar;
