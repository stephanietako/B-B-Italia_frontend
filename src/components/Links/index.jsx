import { v4 as uuidv4 } from "uuid";
// Styles
import styles from "./styles.module.scss";

const Links = ({ link, sublinks, dropdownPosition, closeMenu }) => {
  const { name, target, dropdown } = link;

  const sublinksrender = sublinks[dropdownPosition]?.map((link) => (
    <li key={uuidv4()}>
      <a href={link.target} onClick={() => closeMenu}>
        {link.name}
      </a>
    </li>
  ));

  if (dropdown) {
    return (
      <details className={styles.dropdown}>
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
