import scss from "./Input.module.scss";
import Transaction from "../Transaction/Transaction";
import arrow from "../../images/SVG/arrow.svg";

const Input = ({ isOpen, closeModal, isActive, selectedDate }) => {
  return (
    <div className={`${scss.modal} ${isOpen ? scss.open : ""}`}>
      <div className={scss.modalContent}>
        <div className={scss.close}>
          <button onClick={closeModal}>
            <img src={arrow} alt="" />
          </button>
        </div>
        <Transaction isActive={isActive} selectedDate={selectedDate} />
      </div>
    </div>
  );
};

export default Input;
