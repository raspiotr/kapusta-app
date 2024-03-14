import { useState } from "react";
import scss from "./Balance.module.scss";

const Balance = () => {
  const [balance] = useState(1000000);

  const confirmBalance = () => {
    console.log(`Your balance: ${balance} UAH is confirmed`);
  };

  return (
    <div className={scss.container}>
      <label className={scss.name}>Balance: </label>
      <div className={scss.box}>
        <div className={scss.balanceBox}>
          <span
            className={scss.balance}
            // id="balance"
            // type="number"
            // value=

            // placeholder="00.00"
            // min="0"
          >
            {balance}
          </span>
          <span className={scss.currency}>UAH</span>
        </div>

        <button onClick={confirmBalance} className={scss.confirm}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Balance;
