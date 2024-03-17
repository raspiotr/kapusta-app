import React from 'react';
import styles from './AsksModal.module.scss';
import closeIcon from '../../images/SVG/icons.svg';

const AsksModal = ({ isVisible, onYes, onNo }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.modal}>
    <svg className={styles.closeIcon} onClick={onNo}>
      <use xlinkHref={`${closeIcon}#icon-close`} />
    </svg>
      <p>Are you sure?</p> 
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={onYes}>Yes</button>
        <button className={styles.button} onClick={onNo}>No</button>
      </div>
    </div>
  );
};

export default AsksModal;
