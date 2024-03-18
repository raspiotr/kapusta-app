import { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectReports } from '../../../../redux/selector';
import { categoryOrkToEng } from '../../../../hooks/useCategory';
import { filteredDataAction } from '../../../../redux/reportsQuery/reportsQuery.slice';
import './ReportsList.module.scss'; // Upewnij się, że nazwa pliku i ścieżka są poprawne

import PropTypes from 'prop-types';

// Reports List
export const ReportsList = ({ onChange }) => {
  // State
  const [active, setActive] = useState('');
  const [data, setData] = useState({});
  // Selectors
  const { reports } = useSelector(selectReports);
  // Dispatch
  const dispatch = useDispatch();
  // Vars
  const valueArr = [];
  // Expenses Data
  const expensesData = useMemo(
    () => reports?.expenses?.expensesData ?? {},
    [reports]
  );
  // Incomes Data
  const incomesData = useMemo(
    () => reports?.incomes?.incomesData ?? {},
    [reports]
  );
  // Check if expenses or incomes data
  useEffect(() => {
    if (onChange === 'expenses') {
      setData(expensesData ?? {});
      setActive('');
    } else {
      setData(incomesData ?? {});
      setActive('');
    }
  }, [onChange, expensesData, incomesData]);
  // Click handler
  const clickEventHandler = event => {
    setActive(event.currentTarget.id);
    const filteredValueArr = valueArr.filter(
      item => item[0].replace(/\s+/g, '') === event.currentTarget.id
    );
    dispatch(filteredDataAction(filteredValueArr));
  };

  const entries = Object.entries(data) ?? [];

  
  let listItemClassName = '';
  if (onChange === 'expenses') {
    listItemClassName = 'scss.item'; 
  } else if (onChange === 'income') {
    listItemClassName = 'scss.itemIncome'; 
  }
  if (entries.length === 0) {
    return <p>Brak danych do wyświetlenia</p>;
  }
  return (
    <div>
  <ul className={`${onChange === 'income' ? 'incomeList' : ''} scss.list`}>
    {entries.map(item => {
      const categoryName = item[0];
      const total = item[1].total;
      valueArr.push(item);
      console.log(categoryOrkToEng(categoryName));
      return (
        
        <li
          key={categoryName}
          onClick={clickEventHandler}
          className={`${listItemClassName} ${categoryName === active ? 'active' : ''}`}
        >
          <p>{total}.00</p>
          <p>{categoryOrkToEng(categoryName)}</p>
        </li>
        
      );
    })}
  </ul>
</div>
  );
};

ReportsList.propTypes = {
  onChange: PropTypes.oneOf(['expenses', 'income']).isRequired,
};
