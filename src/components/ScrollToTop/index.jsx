import { useState, useEffect } from "react";
// Icons
import chevron_double_up from "../../assets/icon/chevron_double_up.svg";

// Style
import styles from "./styles.module.scss";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.topToBtn}>
      <div className={styles.__icon_position}>
        {showTopBtn && (
          <img
            className={styles.__icon_style}
            src={chevron_double_up}
            alt={"scroll up symbol"}
            onClick={goToTop}
          />
        )}{" "}
      </div>
    </div>
  );
};

export default ScrollToTop;
