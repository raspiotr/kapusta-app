
import  { useState, useEffect } from 'react';
import './ReportsList.module.scss';
import { useSelector } from 'react-redux';
import { getPeriodDataAPI } from '../../../../api/apiTransaction';
import { selectSelectedMonth, selectSelectedYear } from '../../../../redux/reducers/calendarReducer';


export const ReportsList = () => {
  const [active, setActive] = useState('');
  const [reports, setReports] = useState([]);
  const [transactionType, setType] = useState('expense');
  const selectedMonth = useSelector(selectSelectedMonth);
  const selectedYear = useSelector(selectSelectedYear);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Zjg0MTYxZDhmNWU4OGJiNWYyZGVhNCIsImlhdCI6MTcxMDg3MDI4MiwiZXhwIjoxNzExNDc1MDgyfQ.FF_Gif1IT1pbyeFnXnos_ThL8gGtAZ4fbi79dKyxlE4"; // Ustaw swój token
        const result = await getReportsData(transactionType, selectedYear,selectedMonth + 1, token);
        setReports(result);
      } catch (error) {
        console.error('Błąd pobierania danych z API:', error.message);
      }
    };

    fetchData();
  }, [selectedMonth, selectedYear, transactionType]);

  const getReportsData = async (transactionType,year,month, token) => {
    console.log('Transaction type:', transactionType);
    console.log('Month:', month);
    console.log('Year:', year);
    
    const result = await getPeriodDataAPI({ transactionType, year, month, token });
    return result;

  };

  const handleChange = (event) => {
    const { value } = event.target;
    setType(value);
  };

  const handleItemClick = (item) => {
    setActive(item);
    // Tutaj możesz dodać logikę obsługi kliknięcia na elementach listy raportów
  };

  return (
    <div>
      <select value={transactionType} onChange={handleChange}>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <ul>
        {reports.map(item => (
          <li
            key={item.id}
            onClick={() => handleItemClick(item)}
            className={`${item === active ? 'active' : ''}`}
          >
            <p>{item.total}.00</p>
            <p>{item.categoryName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportsList;
