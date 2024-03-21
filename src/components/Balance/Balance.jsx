import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBalance } from "../../redux/reducers/balanceReducer";
import AsksModals from "../AsksModals/AsksModal";
import scss from "./Balance.module.scss";

export const Balance = () => {
  const dispatch = useDispatch();
  const balanceFromRedux = useSelector((state) => state.balance.balance);
  const [inputValue, setInputValue] = useState(balanceFromRedux);
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const confirmBalance = async () => {
    dispatch(setBalance(inputValue)); // Wysłanie akcji Reduxa z nową wartością salda
    console.log(`Your balance: ${inputValue} UTH is confirmed`);
  };

  const openModalBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AsksModals
        isOpen={isOpen}
        closeModal={openModalBtn}
        text={"Are you sure?"}
      />
      <div className={scss.container}>
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

          <button
            onClick={(confirmBalance, openModalBtn)}
            className={scss.confirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};
