import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
// Styles
import styles from "./styles.module.scss";

const Links = ({ link, sublinks, dropdownPosition, closeMenu }) => {
  const { name, target, dropdown } = link;

  const [refresh, setRefresh] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const triggerMenu = () => setRefresh(!refresh);

  const sublinksrender = sublinks[dropdownPosition]?.map((link) => (
    <li key={uuidv4()}>
      <a href={link.target} onClick={() => closeMenu}>
        {link.name}
      </a>
    </li>
  ));

  useEffect(() => {
    setIsOpen(!isOpen);
  }, [refresh]);

  if (dropdown) {
    return (
      <details
        open={isOpen}
        className={styles.dropdown}
        onMouseEnter={() => triggerMenu()}
        onMouseLeave={() => triggerMenu()}
      >
        <summary>{name}</summary>
        <ul>{sublinksrender}</ul>
      </details>
    );
  } else {
    return (
      <li className={styles.link}>
        <a href={target} onClick={() => closeMenu}>
          {name}
        </a>
      </li>
    );
  }
};

export default Links;
