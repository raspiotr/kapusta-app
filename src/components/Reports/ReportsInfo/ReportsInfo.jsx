import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filteredDataAction } from '../../../redux/reportsQuery/reportsQuery.slice';
import scss from './ReportsInfo.module.scss';
import Button from '../ReportsNav/Periods/Button/Button';
import { getExpenseCategoriesAPI } from '../../../api/apiTransaction';
import ReportsList from './List/ReportsList';

export const ReportsInfo = () => {
  const [transactionType, setTransactionType] = useState('expense');
  const [expensesTotal, setExpensesTotal] = useState(0);
  const [incomeTotal, setIncomeTotal] = useState(0);

  const dispatch = useDispatch();

  const handleClick = () => {
    const newTransactionType = transactionType === 'expense' ? 'income' : 'expenses';
    setTransactionType(newTransactionType);
    dispatch(filteredDataAction([]));
  };

  useEffect(() => {
    const fetchExpenseCategories = async () => {
      try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Zjg0MTYxZDhmNWU4OGJiNWYyZGVhNCIsImlhdCI6MTcxMDkzMjk2NCwiZXhwIjoxNzExNTM3NzY0fQ.Xf8oOxwtX-tiLZ2Pvv33qcXCkSAs-JJgEsM8Jyzxqqc"; // Ustaw swój token
        const { expenseTotal } = await getExpenseCategoriesAPI({ transactionType, token });
        if (transactionType === 'expense') {
          setExpensesTotal(expenseTotal);
        } else {
          setIncomeTotal(expenseTotal);
        }
      } catch (error) {
        console.error('Błąd pobierania danych z API:', error.message);
      }
    };

    fetchExpenseCategories();
  }, [transactionType]);

  return (
    <div>
      <ul className={scss.list}>
        <li className={scss.item}>
          <p className={scss.itemText}>Expense:</p>
          <span className={scss.itemExpenses}>{expensesTotal}.00</span>
        </li>
        <li className={scss.item} >
          <p className={scss.itemText}>Income:</p>
          <span className={scss.itemIncome}>{incomeTotal}.00</span>
        </li>
      </ul>

      <div className={scss.box}>
        <Button onButtonClick={handleClick}></Button>
          <p className={scss.navText}>{transactionType === 'expense' ? 'Expense' : 'Income'}</p>
        <Button onButtonClick={handleClick}></Button>
        <ReportsList transactionType={transactionType} />
      </div>
    </div>
  );
};
