import React from "react";
import styles from "./styles.module.scss";
import Headband from "../../components/Headband";
import at from "../../assets/icon/at.svg";
import phone from "../../assets/icon/phone.svg";
import instagram from "../../assets/icon/instagram.svg";

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.__icons}>
        <ul>
          <li>
            <img src={phone} alt={"phone symbol"} />
          </li>
          <li>
            <img src={at} alt={"at symbol"} />
          </li>
          <li>
            <img src={instagram} alt={"instagram symbol"} />
          </li>
        </ul>
      </div>
      <Headband />
    </div>
  );
};
export default Welcome;
