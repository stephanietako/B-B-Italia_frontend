import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// Styles
import styles from "./styles.module.scss";
const Links = ({ link, sublinks, dropdownPosition }) => {
  const { name, target, dropdown } = link;
  const [isOpen, setIsOpen] = useState(true);
  // const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);
  ////////////////:
  // const [menuVisible, setMenuVisible] = useState(false);
  // const toggleMenu = () => {
  //   setMenuVisible(!menuVisible);
  // };
  const [showMenu, setShowMenu] = useState(false);

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
        onClick={() => setShowMenu(!showMenu)}
      >
        <summary>{name}</summary>
        {/* <summary onMouseLeave={toggleMenu}>{name}</summary> */}
        {showMenu && <ul>{sublinksrender}</ul>}
      </details>
    );
  } else {
    return (
      <li className={styles.link}>
        <a href={target}>{name}</a>
      </li>
    );
  }
};
export default Links;
