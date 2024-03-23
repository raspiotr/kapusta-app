import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setBalance } from "../../redux/reducers/balanceReducer";
import AsksModals from "../AsksModals/AsksModal";
import HelloModal from "../HelloModal/HelloModal";
import scss from "./Balance.module.scss";
//import { updateBalance } from "../../redux/actions/transactionActions";

export const Balance = () => {
  // const dispatch = useDispatch();
  // const balanceFromRedux = useSelector((state) => state.balance.balance);
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // const confirmBalance = async () => {
  //   dispatch(setBalance(inputValue));
  //   console.log(`Your balance: ${inputValue} UTH is confirmed`);
  // };

  //funkcja

  const openModalBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AsksModals
        //funkcja
        isOpen={isOpen}
        closeModal={openModalBtn}
        text={"Are you sure?"}
      />
      <div className={scss.container}>
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
              // placeholder="00.00"
              min="0"
            />
            <span className={scss.currency}>UAH</span>
          </div>

          <button onClick={openModalBtn} className={scss.confirm}>
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};
