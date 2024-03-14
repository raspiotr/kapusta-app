import React, { useState } from 'react';
import styles from './Balance.module.css';

const BalanceComponent = () => {
    const [balance, setBalance] = useState('')

    const changeBalance = (e) => {
        setBalance(e.target.value)
    }

    const confirmBalance = () => {
        
        console.log(`Your balance: ${balance} UAH is confirmed`);
      };

    return (
        <div className={styles.container}>
          <label className={styles.balance}>Balance: </label>
          <div className={styles.inputGroup}>
          <input
            className={styles.inputBalance}
            id="balance"
            type="number"
            value={balance}
            onChange={changeBalance}
            placeholder="00.00"
            min="0"
          />
           <span className={styles.currency}>UAH</span>
           </div>
          <button onClick={confirmBalance} className={styles.confirm}>Confirm</button>
        </div>
      );
}


export default BalanceComponent;
