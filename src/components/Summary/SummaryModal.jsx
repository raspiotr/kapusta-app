import React from 'react';
import styles from './SummaryModal.module.scss';

const SummaryModal = ({ data }) => {
  return (
    <div className={styles.modal}>
      <p className={styles.summary}>Summary</p>
      <div className={styles.table}>
        {data.map((item, index) => (
          <div key={index} className={styles.row}>
            <p className={styles.month}>{item.month}</p>
            <p className={styles.amount}>{item.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryModal;
