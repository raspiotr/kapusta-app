import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AsksModals from "../AsksModals/AsksModal";
import HelloModal from "../HelloModal/HelloModal";
import scss from "./Balance.module.scss";
import { selectUser } from "../../redux/auth/selectors";
import { updateBalance } from "../../redux/auth/operations";
import Notiflix from "notiflix";

export const Balance = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleConfirmBalance = () => {
    dispatch(updateBalance(inputValue));
    setIsOpen(!isOpen);
  };

  const openModalBtn = () => {
    if (inputValue < 0) {
      setInputValue(user.balance.toFixed(2));
      Notiflix.Notify.failure(
        "Balance must be a positive number - not updated.",
        {
          position: "center-top",
          timeout: 8000,
        }
      );
    } else {
      setIsOpen(!isOpen);
    }
  };

  const closeModalBtn = () => {
    setInputValue(user.balance.toFixed(2));
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AsksModals
        isOpen={isOpen}
        closeModal={closeModalBtn}
        actionConfirm={handleConfirmBalance}
        text={"Are you sure?"}
      />
      <div className={scss.container}>
        <label className={scss.name}>Balance: </label>
        <div className={scss.box}>
          <div className={scss.balanceBox}>
            {user.balance <= 0 && inputValue <= 0 && (
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
              placeholder={user.balance.toFixed(2)}
              min="0.01"
            />
            <span className={scss.currency}>PLN</span>
          </div>

          <button onClick={openModalBtn} className={scss.confirm}>
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};
