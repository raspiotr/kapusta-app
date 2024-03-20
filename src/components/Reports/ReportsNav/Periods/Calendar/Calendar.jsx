import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { monthNames } from '../Period.Utils';
import Button from '../Button/Button';
import styles from './Calendar.module.css';

const Calendar = ({
  onClose,
  currentMonth,
  currentYear,
  onChangeDate,
}) => {

  const handleYear = (event) => {
    const newYear = parseInt(event.currentTarget.textContent);
    onChangeDate(newYear, currentMonth); // Przekazujemy nowy rok i bieżący miesiąc
  };

  const handleMonth = (event) => {
    const choosedMonth = event.currentTarget.textContent;
    const monthIndex = monthNames.indexOf(choosedMonth);
    onChangeDate(currentYear, monthIndex); // Przekazujemy bieżący rok i nowy miesiąc
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
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
        <Button onButtonClick={handleYear}>
          <p className={styles.year}>{currentYear}</p>
        </Button>

        <ul>
          {monthNames.map((el) => (
            <p
              className={`${styles.calendarItem} ${el === currentMonth ? styles.active : ''}`}
              onClick={handleMonth}
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
  currentMonth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  currentYear: PropTypes.number.isRequired,
  onChangeDate: PropTypes.func.isRequired,
};

export default Calendar;