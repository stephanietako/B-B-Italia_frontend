import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// Styles
import styles from "./styles.module.scss";

const Marker = (elMarker) => {
  const { color, name } = elMarker;
  const [showText, setShowText] = useState(false);

  return (
    <button
      className={styles.markerButton}
      onClick={() => setShowText(!showText)}
    >
      <div
        className={`${styles.pin} ${styles.bounce} ${styles.pulse} `}
        style={{ backgroundColor: color }}
        title={name}
        key={uuidv4()}
      ></div>
      {showText && <div className={styles.markerText}>{name}</div>}
    </button>
  );
};

export default Marker;
