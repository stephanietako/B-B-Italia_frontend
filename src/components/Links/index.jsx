import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
// Styles
import styles from "./styles.module.scss";

const Links = ({ link, sublinks, dropdownPosition }) => {
  const { name, target, dropdown } = link;

  const [isOpen, setIsOpen] = useState(true);
  // const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);
  ////////////////Make the menu visible or not after clicked
  const [menuVisible, setMenuVisible] = useState(false);

  const hideMenu = () => {
    setMenuVisible(false);
  };
  useEffect(() => {
    const handleClick = (event) => {
      if (!event.target.closest("menu")) {
        hideMenu();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  const sublinksrender = sublinks[dropdownPosition]?.map((link) => (
    <li key={uuidv4()}>
      <a href={link.target}>{link.name}</a>
    </li>
  ));

  if (dropdown) {
    return (
      <details
        open={isOpen}
        className={styles.dropdown}
        onClick={() => setMenuVisible(true)}
      >
        <summary onClick={() => setIsOpen(!isOpen)}>{name}</summary>
        {menuVisible && (
          <ul className="menu" onClick={hideMenu}>
            {sublinksrender}
          </ul>
        )}
      </details>
    );
  } else {
    return (
      <li className={styles.link}>
        <a href={target}>{name} </a>
      </li>
    );
  }
};
export default Links;
