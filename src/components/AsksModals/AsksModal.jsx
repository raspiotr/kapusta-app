import scss from "./AsksModal.module.scss";
import closeIcon from "../../images/SVG/icons.svg";

const AsksModal = ({ text, closeModal, isOpen, actionConfirm }) => {
  // funkcja

  return (
    <>
      {isOpen ? (
        <div className={scss.container}>
          <div className={scss.modal}>
            <svg className={scss.closeIcon} onClick={closeModal}>
              <use xlinkHref={`${closeIcon}#icon-close`} />
            </svg>
            <p>{text}</p>
            <div className={scss.buttonContainer}>
              <button className={scss.button} onClick={actionConfirm}>
                Yes
              </button>
              <button className={scss.button} onClick={closeModal}>
                No
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AsksModal;
