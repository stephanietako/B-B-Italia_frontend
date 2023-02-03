import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// Styles
import styles from "./styles.module.scss";

const Marker = (elMarker) => {
  const { color, name, onClick } = elMarker;
  const [showText, setShowText] = useState(false);

  return (
    <div
      className={styles.showText}
      onClick={() => {
        setShowText(!showText);
        // checks if the onClick prop has a truthy value with &&
        onClick && onClick();
      }}
    >
      <div
        className={`${styles.pin} ${styles.bounce} ${styles.pulse} `}
        style={{ backgroundColor: color }}
        title={name}
        key={uuidv4()}
      ></div>
      {showText && <div className={styles.markerText}>{name}</div>}
    </div>
  );
};

export default Marker;
