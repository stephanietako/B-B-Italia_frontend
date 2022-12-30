import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
// Assets
import logo from "../../assets/logo/bb-logo-noir.png";
import menu from "../../assets/icon/menu.svg";
import cross from "../../assets/icon/cross.svg";
// Cmp
import Links from "../Links";
// Styles
import styles from "./styles.module.scss";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [show, setShow] = useState(false);

  // Main navbar menu
  const links = [
    { name: "Accueil", target: "#welcome" },
    { name: "A propos", target: "#about" },
    { name: "Showroom", target: "#showroom" },
    { name: "Produits", target: "", dropdown: true },
    { name: "Projets", target: "#projects" },
    { name: "Contact", target: "#contact" },
  ];

  // Main navbar menu for mobile
  const linksMobile = [
    { name: "Accueil", target: "#welcome" },
    { name: "A propos", target: "#about" },
    { name: "Showroom", target: "#showroom" },
    { name: "Produits", target: "", dropdown: true },
    { name: "Projets", target: "#projects" },
    { name: "Contact", target: "#contact" },
  ];

  // Sub links navbar menu
  const sublinks = [
    [
      { name: "B&B Italia", target: "#bandb" },
      { name: "MaxAlto", target: "#maxalto" },
      { name: "Arclinea", target: "#arclinea" },
    ],
  ];

  const triggerMenu = () => setRefresh(!refresh);

  useEffect(() => {
    setIsOpen(!isOpen);
  }, [refresh]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.box}>
        <a href="#welcome">
          <img
            className={styles.__logo}
            src={logo}
            alt="B&B Italia Saint-Tropez"
          />
        </a>

        {/* MOBILE MENU */}
        <div
          className={styles.__nav_mobile_menu}
          onMouseEnter={() => triggerMenu()}
          onMouseLeave={() => triggerMenu()}
          onClick={() => setShow(!show)}
        >
          <details open={isOpen}>
            <summary className={styles.__summ}>
              <img
                src={isOpen ? cross : menu}
                alt={isOpen ? "Menu" : "Cross"}
              />
            </summary>
            <div>
              {linksMobile.map((link, index) => {
                return (
                  <Links
                    key={uuidv4()}
                    link={link}
                    sublinks={sublinks}
                    dropdownPosition={0}
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
            ddList.map((lnk, index) => {
              if (link.name === lnk.name) dropdownPosition = index;
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
      </div>
    </nav>
  );
};

export default Navbar;
