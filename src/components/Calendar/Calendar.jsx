import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import scss from "./Calendar.module.scss";
import calendar from "../../images/SVG/calendar.svg";
import PropTypes from "prop-types";

const Calendar = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className={scss.calendar}>
      <img src={calendar} alt="" />

      <DatePicker
        className={scss.date}
        selected={selectedDate}
        onChange={setSelectedDate}
        dateFormat="dd.MM.yyyy"
        popperPlacement="bottom-start"
        maxDate={new Date()}
      />
    </div>
  );
};

Calendar.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  setSelectedDate: PropTypes.func.isRequired,
};

export default Calendar;
