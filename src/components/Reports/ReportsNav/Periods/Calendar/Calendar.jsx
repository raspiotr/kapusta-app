import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { monthNames } from '../Period.Utils';
import Button  from '../Button/Button';
import styles from './Calendar.module.css'; 

 const Calendar = ({
  onClose,
  currentMonth,
  currentYear,
  onChangeDate,
}) => {
  
  const handleYear = (name) => {
    onChangeDate(name);
  };

 
  const handleMonth = (event) => {
    const choosedMonth = event.currentTarget.textContent;
    const monthIndex = monthNames.indexOf(choosedMonth);
    onChangeDate(monthIndex);
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

  // Obsługa zamknięcia kalendarza po kliknięciu w tło
  const handleBackdrop = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div onClick={handleBackdrop} className={styles.backdrop}> 
      <div className={styles.calendarbox}> 
        <Button onButtonClick={handleYear}>
        {' '}
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
export default Calendar