import React from "react";
import styles from "./styles.module.scss";

const index = (props) => {
  return (
    <div className={styles.blocs}>
      <div className={styles.blocs__content}>
        {/* <p>BLOC CONTENT</p> */}
        <div className={styles.blocs__img}>
          <img src={props.img} alt={props.alt} />

          <div className={styles.blocs__text}>
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
