import React from "react";
import { v4 as uuidv4 } from "uuid";
// Styles
import styles from "./styles.module.scss";

const Marker = (elMarker) => {
  const { color, name, text } = elMarker;
  return (
    <div
      className={`${styles.pin} ${styles.bounce} ${styles.pulse}`}
      style={{ backgroundColor: color }}
      title={name}
      key={uuidv4()}
    >
      <span className={styles.marker_label}>{text}</span>
    </div>
  );
};

export default Marker;
