import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import stylów react-datepicker
import scss from "./Calendar.module.scss";
import calendar from "../../images/SVG/calendar.svg";
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDate } from '../../redux/actions/calendarActions';


const Calendar = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.calendar.selectedDate);

  const handleDateChange = (date) => {
    dispatch(setSelectedDate(date)); // Wyślij nową datę do magazynu Redux po zmianie
  };

  return (

    <div className={scss.calendar}>
      <img src={calendar} alt="" />

      <DatePicker
        className={scss.date}
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd.MM.yyyy"
        popperPlacement="bottom-start"
      />
    </div>
  );
};

export default Calendar;

