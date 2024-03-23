import { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import { useDispatch, useSelector } from 'react-redux';
// import { setSelectedDate } from '../../../../../redux/actions/calendarActions.js';
import { monthNames } from "../Period.Utils";
import Button from "../Button/Button";
import styles from "./Calendar.module.css";

const Calendar = ({ onClose }) => {
  // const dispatch = useDispatch();
  // const selectedDate = useSelector(state => state.calendar.selectedDate);

  // const [selectedYear, setSelectedYear] = useState(selectedDate.year);
  // const [selectedMonth, setSelectedMonth] = useState(monthNames[selectedDate.month - 1]);

  // const handleYear = (event) => {
  //   const newYear = parseInt(event.currentTarget.textContent);
  //   setSelectedYear(newYear);
  //   dispatch(setSelectedDate({ year: newYear, month: selectedDate.month }));
  // };

  // const handleMonth = (event) => {
  //   const choosedMonth = event.currentTarget.textContent;
  //   const monthIndex = monthNames.indexOf(choosedMonth) + 1;
  //   setSelectedMonth(choosedMonth);
  //   dispatch(setSelectedDate({ year: selectedYear, month: monthIndex }));
  // };

  // useEffect(() => {
  //   setSelectedYear(selectedDate.year);
  //   setSelectedMonth(monthNames[selectedDate.month - 1]);
  // }, [selectedDate]);

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
        {/* <Button onButtonClick={handleYear}>
          <p className={styles.year}>{selectedYear}</p>
        </Button> */}

        <ul>
          {monthNames.map((el) => (
            <p
              // className={`${styles.calendarItem} ${el === selectedMonth ? styles.active : ''}`}
              // onClick={handleMonth}
              key={el}
            >
              {el}
            </p>
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
