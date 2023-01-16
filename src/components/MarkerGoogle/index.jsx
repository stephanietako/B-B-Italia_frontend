import React from "react";
import { v4 as uuidv4 } from "uuid";
// Styles
import styles from "./styles.module.scss";

const Marker = (elMarker) => {
  const { color, name } = elMarker;
  return (
    <div
      className={`${styles.pin} ${styles.bounce} ${styles.pulse} `}
      style={{ backgroundColor: color }}
      title={name}
      key={uuidv4()}
    ></div>
  );
};

export default Marker;
