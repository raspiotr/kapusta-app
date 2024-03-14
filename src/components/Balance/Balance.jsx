//import { useState } from "react";

const Balance = () => {
  const money = 0;

  const sendMyBudget = (event) => {
    event.preventDefault();
    const budget = event.target.querySelector('span[name="money"]').textContent;
    console.log(`Budget ${budget} has been sent to Database`);
  };
  return (
    <div>
      <h4>Balance:</h4>
      <form onSubmit={(event) => sendMyBudget(event)}>
        <span name="money">{money}</span>
        <span name="currency">PLN</span>
        <button type="submit">CONFIRM</button>
      </form>
    </div>
  );
};
export default Balance;
