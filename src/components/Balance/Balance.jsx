import { useState } from 'react';
import { useDispatch } from 'react-redux';
import scss from "./Balance.module.scss";
import { updateBalance } from '../../redux/actions/transactionActions';

export const Balance = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await dispatch(updateBalance(inputValue));
      console.log(`Your balance: ${inputValue} UAH is confirmed`);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className={scss.container}>
      <form onSubmit={handleSubmit}>
        <label className={scss.name}>Balance: </label>
        <div className={scss.box}>
          <div className={scss.balanceBox}>
            <input
              className={scss.balance}
              id="balance"
              type="number"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="00.00"
              min="0"
            />
            <span className={scss.currency}>UAH</span>
          </div>
          <button type="submit" className={scss.confirm}>
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};
