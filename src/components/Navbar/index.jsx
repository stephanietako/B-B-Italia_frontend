import React, { useState } from "react";
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
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!isOpen);

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
        <div className={styles.__nav_mobile_menu}>
          <button className={styles.__summ} onClick={toggleMenu}>
            <img src={isOpen ? cross : menu} alt={isOpen ? "Menu" : "Cross"} />
          </button>
          {isOpen && (
            <div>
              {linksMobile.map((link, index) => {
                return (
                  <Links
                    key={uuidv4()}
                    link={link}
                    sublinks={sublinks}
                    dropdownPosition={0}
                    onClick={toggleMenu}
                  />
                );
              })}
            </div>
          )}
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
                onClick={toggleMenu}
              />
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
