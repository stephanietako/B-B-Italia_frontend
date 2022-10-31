import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// Assets
import logo from "../../assets/logo/bandb-logo-blanc.png";
import menu from "../../assets/icon/menu.svg";
import cross from "../../assets/icon/cross.svg";

// Cmp
import Links from "../Links";

// Styles
import styles from "./styles.module.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const links = [
    { name: "Accueil", target: "#home" },
    { name: "A propos", target: "#about" },
    { name: "Produits", target: "", dropdown: true },
    { name: "Projets", target: "#projects" },
    { name: "Contact", target: "#contact" },
  ];

  const linksMobile = [
    { name: "Accueil", target: "#home" },
    { name: "A propos", target: "#about" },
    { name: "Produits", target: "#products" },
    { name: "Projets", target: "#projects" },
    { name: "Contact", target: "#contact" },
  ];

  const sublinks = [
    [
      { name: "B&B", target: "#bandb" },
      { name: "MaxAlto", target: "#maxalto" },
      { name: "Arclinea", target: "#arclineo" },
    ],
  ];

  const triggerMenu = () => setRefresh(!refresh);

  useEffect(() => {
    setIsOpen(!isOpen);
  }, [refresh]);

  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img
          className={styles.__logo}
          src={logo}
          alt="B&B Italia Saint-Tropez"
        />
      </Link>
      {/* MOBILE MENU */}
      <div className={styles.__nav_mobile_menu} onClick={() => triggerMenu()}>
        <details open={isOpen}>
          <summary>
            <img src={isOpen ? cross : menu} alt={isOpen ? "Menu" : "Cross"} />
          </summary>
          <div>
            {linksMobile.map((link, index) => {
              return (
                <Links
                  key={uuidv4()}
                  link={link}
                  sublinks={sublinks}
                  dropdownPosition={0}
                  closeMenu={() => triggerMenu()}
                />
              );
            })}
          </div>
        </details>
      </div>
      {/* DESKTOP MENU */}
      <ul className={styles.__nav_menu}>
        {links.map((link, index) => {
          let dropdownPosition = 0;
          const ddList = links.filter((lnk) => lnk.dropdown === true);
          ddList.map((lnk, i) => {
            if (link.name === lnk.name) dropdownPosition = i;
            return null;
          });

          return (
            <Links
              key={uuidv4()}
              link={link}
              sublinks={sublinks}
              dropdownPosition={dropdownPosition}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
