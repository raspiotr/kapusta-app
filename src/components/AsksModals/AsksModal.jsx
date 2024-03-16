import React from 'react';
import styles from './AsksModal.module.scss';

const AsksModal = ({ isVisible, onYes, onNo }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.modal}>
      <p>Are you sure?</p> 
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={onYes}>Yes</button>
        <button className={styles.button} onClick={onNo}>No</button>
      </div>
    </div>
  );
};

export default AsksModal;
