import { useEffect } from "react";
import PropTypes from "prop-types";
import { monthNames } from "../Period.Utils";
import styles from "./Calendar.module.css";

const Calendar = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdrop = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div onClick={handleBackdrop} className={styles.backdrop}>
      <div className={styles.calendarbox}>
        <ul>
          {monthNames.map((el) => (
            <p key={el}>{el}</p>
          ))}
        </ul>
      </div>
    </div>
  );
};

Calendar.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Calendar;
