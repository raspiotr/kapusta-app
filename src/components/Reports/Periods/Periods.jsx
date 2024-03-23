// import { useState, useEffect } from "react";
// import { monthNames, getMonth, getYear } from "./Period.Utils";
import Button from "./Button/Button";
//import Calendar from "./Calendar/Calendar";
import styles from "./Period.module.scss";
import arrowPlus from "../../../images/SVG/arrow+.svg";
import arrowMinus from "../../../images/SVG/arrow-.svg";
import { useEffect } from "react";

export const Periods = ({ date, setDate }) => {
  const formatDate = () => {
    const options = { month: "long", year: "numeric" };
    const formattedDate = date.toLocaleString("en-US", options);
    return formattedDate.toUpperCase();
  };

  useEffect(() => {
    formatDate();
  }, [date]);

  return (
    <div className={styles.periodbox}>
      <p>Current period:</p>
      <div className={styles.periodItem}>
        <Button
          icon={arrowMinus}
          value={date}
          setValue={setDate}
          next={false}
        ></Button>
        <div className={styles.periodbutton}>{formatDate()}</div>
        <Button
          icon={arrowPlus}
          value={date}
          setValue={setDate}
          next={true}
        ></Button>

        {/* {modalCalendar && (
          <Calendar
            currentYear={year}
            currentMonth={month}
            onChangeDate={handleButtonClick}
            onClose={handleModalCalendar}
          />
        )} */}
      </div>
    </div>
  );
};
