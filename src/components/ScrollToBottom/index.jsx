import React, { useState } from "react";
// Icons
import chevron_double_down from "../../assets/icon/chevron_double_down.svg";

// Style
import styles from "./styles.module.scss";

const ScrollButton = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 0) {
      setVisible(false);
    } else if (scrolled <= 0) {
      setVisible(true);
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div className={styles.bottomToBtn}>
      <div className={styles.__icon_position}>
        <img
          className={styles.__icon_style}
          src={chevron_double_down}
          alt={"scroll down symbol"}
          onClick={scrollToBottom}
          style={{ display: visible ? "inline" : "none" }}
        />
      </div>
    </div>
  );
};

export default ScrollButton;
