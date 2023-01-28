// Assets
import logo from "../../assets/logo/bb-logo-noir.webp";

// Styles
import styles from "./styles.module.scss";

const Maintenance = () => {
  return (
    <div className={styles.maintenance}>
      <div>
        <img src={logo} alt="B&B Italia Logo" />
        <p>Bientôt le site de B&B Italia St Tropez !</p>
        <p>Développement en cours....</p>
      </div>
    </div>
  );
};

export default Maintenance;
