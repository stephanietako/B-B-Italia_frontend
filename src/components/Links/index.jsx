import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// Styles
import styles from "./styles.module.scss";

const Links = ({ link, sublinks, dropdownPosition }) => {
  const { name, target, dropdown } = link;
  const [isOpen, setIsOpen] = useState(true);
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(!click);

  const sublinksrender = sublinks[dropdownPosition]?.map((link) => (
    <li key={uuidv4()}>
      <a href={link.target} onClick={closeMobileMenu}>
        {link.name}
      </a>
    </li>
  ));
  if (dropdown) {
    return (
      <details open={isOpen} className={styles.dropdown}>
        <summary onClick={() => setIsOpen(!isOpen)}>{name}</summary>
        <ul>{sublinksrender}</ul>
      </details>
    );
  } else {
    return (
      <li className={styles.link}>
        <a href={target} onClick={closeMobileMenu}>
          {name}
        </a>
      </li>
    );
  }
};
export default Links;
