import React from "react";
import styles from "./styles.module.scss";

const Modal = ({ onClose, bubbleContent, show }) => {
  return show ? (
    <div className={styles.modal_wrapper}>
      <div className={styles.modal_content}>
        <p>
          <a href="tel:+0494457720">04 94 45 77 20</a>
        </p>
        <p>
          <a href="mailto:contact@bebsttropez.fr">contact@bebsttropez.fr</a>
        </p>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  ) : null;
};

export default Modal;
