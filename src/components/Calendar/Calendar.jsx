// import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import stylów react-datepicker
import scss from "./Calendar.module.scss";
import calendar from "../../images/SVG/calendar.svg";

const Calendar = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className={scss.calendar}>
      <img src={calendar} alt="" />
      <DatePicker
        className={scss.date}
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd.MM.yyyy"
        popperPlacement="bottom-start"
      />
    </div>
  );
};

export default Calendar;
