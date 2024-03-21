import scss from "../HelloModal/HelloModal.module.scss";

const HelloModal = () => {
  return (
    <div className={scss.modal}>
      <div className={scss.triangle}></div>
      <div className={scss.messageContainer}>
        <p className={scss.messageTitle}>
          Hello! To get started, enter the current balance of your account!
        </p>
        <p className={scss.messageText}>
          You can't spend money until you have it :)
        </p>
      </div>
    </div>
  );
};

export default HelloModal;
