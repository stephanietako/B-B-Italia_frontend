import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// Styles
import styles from "./styles.module.scss";

const Links = ({ link, sublinks, dropdownPosition }) => {
  const { name, target, dropdown } = link;

  const [isOpen, setIsOpen] = useState(true);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  ////////////////:
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const sublinksrender = sublinks[dropdownPosition]?.map((link) => (
    <li key={uuidv4()}>
      <a href={link.target} onMouseLeave={closeMobileMenu}>
        {link.name}
      </a>
    </li>
  ));

  if (dropdown) {
    return (
      <details open={isOpen} className={styles.dropdown} onClick={handleClick}>
        <summary onMouseLeave={toggleMenu}>{name}</summary>
        <ul className={menuVisible ? "menu-visible" : "menu-hidden"}>
          {sublinksrender}
        </ul>
      </details>
    );
  } else {
    return (
      <li className={styles.link}>
        <a href={target} onClick={() => setIsOpen(!isOpen)}>
          {name}
        </a>
      </li>
    );
  }
};
export default Links;
