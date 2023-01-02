import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// Styles
import styles from "./styles.module.scss";

const Links = ({ link, sublinks, dropdownPosition }) => {
  const { name, target, dropdown } = link;
  const [isOpen, setIsOpen] = useState(true);

  // const handleClick = () => setClick(!click);

  const [drpdown, setdrpdown] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // const onMouseEnter = () => {
  //   if (window.innerWidth < 960) {
  //     setdrpdown(false);
  //   } else {
  //     setdrpdown(true);
  //   }
  // };

  // const onMouseLeave = () => {
  //   if (window.innerWidth > 960) {
  //     setdrpdown(false);
  //   } else {
  //     setdrpdown(false);
  //   }
  // };

  const sublinksrender = sublinks[dropdownPosition]?.map((link) => (
    <li key={uuidv4()}>
      <a href={link.target}>{link.name}</a>
    </li>
  ));
  if (dropdown) {
    return (
      <details open={isOpen} className={styles.dropdown}>
        <summary onClick={() => setIsOpen(!isOpen)}>{name}</summary>
        <ul onClick={handleClick}>{sublinksrender}</ul>
      </details>
    );
  } else {
    return (
      <li
        className={styles.link}
        // onMouseEnter={onMouseEnter}
        // onMouseLeave={onMouseLeave}
      >
        <a href={target}>{name}</a>
      </li>
    );
  }
};
export default Links;
