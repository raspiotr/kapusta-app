// <<<<<<< home-page
// //import { useState } from "react";

// const Balance = () => {
//   const money = 0;

//   const sendMyBudget = (event) => {
//     event.preventDefault();
//     const budget = event.target.querySelector('span[name="money"]').textContent;
//     console.log(`Budget ${budget} has been sent to Database`);
//   };
//   return (
//     <div>
//       <h4>Balance:</h4>
//       <form onSubmit={(event) => sendMyBudget(event)}>
//         <span name="money">{money}</span>
//         <span name="currency">PLN</span>
//         <button type="submit">CONFIRM</button>
//       </form>
//     </div>
//   );
// };
// export default Balance;
// =======
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
