import React, { useState } from 'react';
import styles from './AsksModal.module.scss';
import closeIcon from '../../images/SVG/icons.svg';

const AsksModal = ({ isVisible, onYes, onNo }) => {
  const [clickedButton, setClickedButton] = useState(null);

  const handleYesClick = () => {
    setClickedButton('yes');
    onYes();
  };

  const handleNoClick = () => {
    setClickedButton('no');
    onNo();
  };

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
        <button
          className={`${styles.button} ${styles.yes} ${clickedButton === 'yes' ? styles.yes : ''}`}
          onClick={handleYesClick}
          >Yes</button>
        <button
          className={`${styles.button} ${styles.no} ${clickedButton === 'no' ? styles.no : ''}`}
          onClick={handleNoClick}
          >No</button>
      </div>
    </div>
  );
};

export default AsksModal;
