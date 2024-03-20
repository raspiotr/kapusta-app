import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectReports } from '../../../redux/selector';
import { ReportsList } from './List/ReportsList';
import { filteredDataAction } from '../../../redux/reportsQuery/reportsQuery.slice';
import scss from './ReportsInfo.module.scss';
import Button from '../ReportsNav/Periods/Button/Button';
import { getExpenseCategoriesAPI } from '../../../api/apiTransaction'; // Importujemy funkcję pobierającą kategorie wydatków z API

export const ReportsInfo = () => {
  // State
  const [budget, setBudget] = useState('expenses');

  // Selector
  const reports = useSelector(selectReports);

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

  // Fetch expense categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token =      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Zjg0MTYxZDhmNWU4OGJiNWYyZGVhNCIsImlhdCI6MTcxMDg3MDI4MiwiZXhwIjoxNzExNDc1MDgyfQ.FF_Gif1IT1pbyeFnXnos_ThL8gGtAZ4fbi79dKyxlE4"
        
        const categories = await getExpenseCategoriesAPI({ transactionType: budget, token });
        console.log('Expense categories:', categories);
        // Tutaj możesz zaktualizować stan lub wysłać akcję z pobranymi kategoriami
      } catch (error) {
        console.error('Błąd pobierania kategorii z API:', error.message);
      }
    };

    fetchCategories();
  }, [budget]); // Wywołujemy tylko wtedy, gdy zmienia się wartość 'budget'

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
        <ReportsList ></ReportsList>
        
      </div>
    </div>
  );
};
