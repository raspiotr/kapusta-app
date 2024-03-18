import React from 'react';
import styles from '../HelloModal/HelloModal.module.scss';

const HelloModal = ({ isVisible }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.modal}>
      <div className={styles.triangle}></div>
      <div className={styles.messageContainer}>
        <p className={styles.messageTitle}>Hello! To get started, enter the current balance of your account!</p>
        <p className={styles.messageText}>You can't spend money until you have it :)</p>
      </div>
    </div>
  );
};

export default HelloModal;
