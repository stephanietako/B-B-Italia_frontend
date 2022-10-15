import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const Navbar = () => {
  return (
    <nav>
      {/* exemple si je veux mettre plusieurs class ds la même div <div className={`${styles.navLinks} ${styles.test}`}> */}
      <div className={styles.navLinks}>
        <Link to="/">Home</Link>
        <Link to="/">À propos</Link>
        <Link to="/">Produits</Link>
        <Link to="/">Projets</Link>
        <Link to="/">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
