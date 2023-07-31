// Styles
import styles from "./styles.module.scss";

const index = ({ lang, setLang }) => {
  const handleLangChange = () => {
    if (lang === "fr") {
      setLang("en");
    } else {
      setLang("fr");
    }
  };
  return (
    <div className={styles.translate_txt}>
      <button className={styles.__lang_btn} onClick={() => handleLangChange()}>
        {lang === "fr" ? "EN" : "FR"}
      </button>
    </div>
  );
};

export default index;
