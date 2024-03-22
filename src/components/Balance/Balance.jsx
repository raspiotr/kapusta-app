import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBalance } from "../../redux/reducers/balanceReducer";
import AsksModals from "../AsksModals/AsksModal";
import HelloModal from "../HelloModal/HelloModal";
import scss from "./Balance.module.scss";
import { updateBalance } from '../../redux/actions/transactionActions';

export const Balance = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const openModalBtn = () => {
    setIsOpen(!isOpen);
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
          <AsksModals
        isOpen={isOpen}
        closeModal={openModalBtn}
        text={"Are you sure?"}
      />
      <form onSubmit={handleSubmit}>
        <label className={scss.name}>Balance: </label>
        <div className={scss.box}>
          <div className={scss.balanceBox}>
                    {inputValue === 0 && (
              <div className={scss.parent}>
                <HelloModal />
              </div>
            )}
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
          <button  onClick={(confirmBalance, openModalBtn)} type="submit" className={scss.confirm}>
            Confirm
          </button>
        </div>
      </form>
    </div>

  );
};
