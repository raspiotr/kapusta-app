import scss from "./Input.module.scss";
import Transaction from "../Transaction/Transaction";

const Input = ({ isOpen, closeModal }) => {
  return (
    <div className={`${scss.modal} ${isOpen ? scss.open : ""}`}>
      <div className={scss.modalContent}>
        <div className={scss.close}>
          <button onClick={closeModal}>←</button>
        </div>
        <Transaction />
      </div>
    </div>
  );
};

export default Input;
