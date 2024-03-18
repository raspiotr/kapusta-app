import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectReports } from '../../../redux/selector';
import { ReportsList } from './List/ReportsList';

import { filteredDataAction } from '../../../redux/reportsQuery/reportsQuery.slice';

import scss from './ReportsInfo.module.scss'
import Button from '../ReportsNav/Periods/Button/Button';
// Reports Info
export const ReportsInfo = () => {
  // State
  const [budget, setBudget] = useState('expenses');
  console.log('Current budget:', budget);
  // Selectors
  const { reports } = useSelector(selectReports);
  console.log('Reports data:', reports);
  // Dispatch
  const dispatch = useDispatch();
  // Handle click
  const handleClick = () => {
    if (budget === 'expenses') {
      setBudget('income');
      dispatch(filteredDataAction([]));
      return;
    }
    setBudget('expenses');
    dispatch(filteredDataAction([]));
  };
  return (
    <div>
      <ul className={scss.list}>
        <li className={scss.item}>
          <p className={scss.itemText}>Expenses:</p>
          <span className={scss.itemExpenses}>{reports?.expenses?.expenseTotal ?? 0}.00</span>
        </li>
        <li className={scss.item} >
          <p className={scss.itemText}>Income:</p>
          <span className={scss.itemIncome}>{reports?.incomes?.incomeTotal ?? 0}.00</span>
        </li>
      </ul>

      <div className={scss.box}>
        
          <Button onButtonClick={handleClick}>
            <p className={scss.navText}>{budget}</p>
          </Button>
        

        <ReportsList onChange={budget}></ReportsList>
      </div>
      
    </div>
  );
};