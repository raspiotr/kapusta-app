// Calendar.jsx

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDate } from '../../redux/actions/calendarActions';
import styles from './Calendar.module.scss';

const Calendar = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.calendar.selectedDate);

  const handleDateChange = (date) => {
    dispatch(setSelectedDate(date)); // Wyślij nową datę do magazynu Redux po zmianie
  };

  return (
    <div className={styles.calendar}>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd.MM.yyyy"
        popperPlacement="bottom-start"
      />
    </div>
  );
};

export default Calendar;

