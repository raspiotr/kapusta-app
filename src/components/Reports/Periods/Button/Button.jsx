import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ value, setValue, icon, next }) => {
  const handlerClick = () => {
    if (typeof value === "boolean") {
      setValue(!value);
    } else {
      const nextMonthDate = addOneMonthToDate(value, next);
      setValue(new Date(nextMonthDate));
    }
  };

  function addOneMonthToDate(dateString) {
    const currentDate = new Date(dateString);
    return currentDate.setMonth(currentDate.getMonth() + (next ? 1 : -1));
  }

  return (
    <div className={styles.box}>
      <button className={styles.button} name="decrement" onClick={handlerClick}>
        <img src={icon} alt="" />
      </button>
    </div>
  );
};

Button.propTypes = {
  value: PropTypes.oneOfType([PropTypes.bool, PropTypes.instanceOf(Date)]),
  setValue: PropTypes.func,
  icon: PropTypes.string.isRequired,
  next: PropTypes.bool,
};

export default Button;
