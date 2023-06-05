import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
// Assets
import logo from "../../assets/logo/bb-logo-noir.webp";
import menu from "../../assets/icon/menu.svg";
import cross from "../../assets/icon/cross.svg";
// Components
import Links from "../Links";
// Styles
import styles from "./styles.module.scss";

const Navbar = ({ lang, setLang }) => {
  const handleLangChange = () => {
    if (lang === "fr") {
      setLang("en");
    } else {
      setLang("fr");
    }
  };
  // The error "Uncaught TypeError: Cannot read properties of null (reading 'offsetHeight')"
  //In this case, it is possible that you are trying to access the offsetHeight property of a DOM element that has not yet been rendered, or that is not present in the DOM.
  // Lets fix it: One way to do this is to wrap the code that accesses the DOM element in a useEffect hook, and to make sure that the hook only runs after the element has been rendered.
  const navbarElement = useRef(null);
  let navigationHeight = 0;
  useEffect(() => {
    // This effect will only run after the navbar element has been rendered
    // eslint-disable-next-line
    navigationHeight = navbarElement.current.offsetHeight;
    console.info("Navbar height:", navbarElement.current.offsetHeight);
    navbarElement.current.style.setProperty(
      "--scroll-padding",
      navigationHeight
    );
  }, [navbarElement]);

  // navbar color state change managment
  const [fix, setFix] = useState(false);
  const setFixed = () => {
    if (window.scrollY >= 142) {
      setFix(true);
    } else {
      setFix(false);
    }
  };
  window.addEventListener("scroll", setFixed);

  //menu state change management
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Main navbar menu
  const linksMobile = [
    { name: "Accueil", target: "#welcome" },
    { name: "A propos", target: "#about" },
    { name: "Showroom", target: "#showroom" },
    {
      name: "Produits",
      target: "",
      dropdown: true,
    },
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
    <nav
      ref={navbarElement}
      className={fix ? `${styles.navbar} ${styles.fixed}` : `${styles.navbar}`}
    >
      <a href="#welcome">
        <img
          className={styles.__logo}
          src={logo}
          alt="B&B Italia Saint-Tropez"
        />
      </a>

      <div className={styles.__nav_burger_menu}>
        <button
          className={styles.__summ}
          onClick={toggleMenu}
          onMouseEnter={toggleMenu}
        >
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
      <button className={styles.__lang_btn} onClick={() => handleLangChange()}>
        {lang === "fr" ? "EN" : "FR"}
      </button>
    </nav>
  );
};

export default Navbar;
