import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const Dropdown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className={styles.dropdown}>
      <ul
        onClick={handleClick}
        className={`${styles.dropdown_menu} ${click ? styles.__clicked : ""}`}
      >
        {/* {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })} */}
      </ul>
    </div>
  );
};

export default Dropdown;
