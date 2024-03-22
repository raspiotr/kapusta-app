import { useState, useEffect } from "react";
import { monthNames, getMonth, getYear } from "./Period.Utils";
import Button from "./Button/Button";
import Calendar from "./Calendar/Calendar";
import styles from "./Period.module.scss";
import arrowPlus from "../../../../images/SVG/arrow+.svg";
import arrowMinus from "../../../../images/SVG/arrow-.svg";

export const Periods = () => {
  // State
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [modalCalendar, setModalCalendar] = useState(false);

  useEffect(() => {
    const updateDate = () => {
      const currentMonth = getMonth();
      setMonth(monthNames[currentMonth]);
      setYear(getYear());
    };

    updateDate();

    return () => {};
  }, []);

  // Handler for changing month
  const handleButtonClick = (increment) => {
    let currentMonthNumber = monthNames.indexOf(month);
    currentMonthNumber = increment
      ? (currentMonthNumber + 1) % 12
      : (currentMonthNumber - 1 + 12) % 12;

    const newYear =
      increment && currentMonthNumber === 0
        ? year + 1
        : !increment && currentMonthNumber === 11
        ? year - 1
        : year;

    setYear(newYear);
    setMonth(monthNames[currentMonthNumber]);
  };

  // Show / hide calendar
  const handleModalCalendar = () => {
    setModalCalendar((prevModalCalendar) => !prevModalCalendar);
  };

  return (
    <div className={styles.periodbox}>
      <p>Current period:</p>
      <div className={styles.periodItem}>
        <Button
          icon={arrowMinus}
          onButtonClick={() => handleButtonClick(false)}
        ></Button>
        <button className={styles.periodbutton} onClick={handleModalCalendar}>
          {month} {year}
        </button>
        <Button
          icon={arrowPlus}
          onButtonClick={() => handleButtonClick(true)}
        ></Button>

        {modalCalendar && (
          <Calendar
            currentYear={year}
            currentMonth={month}
            onChangeDate={handleButtonClick}
            onClose={handleModalCalendar}
          />
        )}
      </div>
    </div>
  );
};
