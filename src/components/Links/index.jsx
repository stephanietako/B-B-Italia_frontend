import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// Styles
import styles from "./styles.module.scss";

const Links = ({ link, sublinks, dropdownPosition, onClick }) => {
  const { name, target, dropdown } = link;

  const [isOpen, setIsOpen] = useState(false);

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    setIsOpen(false);
    onClick();
  };

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
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(isOpen)}
      >
        <summary onClick={() => setIsOpen(!isOpen)}>{name}</summary>
        <ul
          onClick={() => {
            handleClick();
            onClick();
          }}
        >
          {sublinksrender}
        </ul>
      </details>
    );
  } else {
    return (
      <li className={styles.link}>
        <a href={target} onClick={onClick}>
          {name}
        </a>
      </li>
    );
  }
};
export default Links;
