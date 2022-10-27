import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import styles from "./styles.module.scss";

const Navbar = () => {
  //   return (
  //     <nav>
  //       <div className={styles.navLinks}>
  //         <a href="/#about">About</a>
  //         <a href="/#products">Products</a>
  //         <a href="/#projects">Projects</a>
  //         <a href="/#contact">Contact</a>
  //       </div>
  //     </nav>
  //   );
  // };
  // ici mon usestate pour le menu
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  // rappel: handleClick pour changer le state et le ! c'est le state opposé
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navbar__logo}>
        BBI
      </Link>
      {/* MENU ICON */}
      <div className={styles.menu_icon} onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav_menu__active" : "nav_menu"}>
        <li className={styles.nav_menu__item}>
          <Link
            to="/"
            className={styles.nav_menu__links}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
        </li>
        <li className={styles.nav_menu__item}>
          <Link
            to="/"
            className={styles.nav_menu__links}
            onClick={closeMobileMenu}
          >
            About
          </Link>
        </li>
        <li className={styles.nav_menu__item}>
          <Link
            to="/products"
            className={styles.nav_menu__links}
            onClick={closeMobileMenu}
          >
            Products <i className="fas fa-caret-down" />
          </Link>
          {dropdown && <Dropdown />}
        </li>
        <li className={styles.nav_menu__item}>
          <Link
            to="/projects"
            className={styles.nav_menu__links}
            onClick={closeMobileMenu}
          >
            Projets
          </Link>
        </li>
        <li className={styles.nav_menu__item}>
          <Link
            to="/contact"
            className={styles.nav_menu__links}
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
