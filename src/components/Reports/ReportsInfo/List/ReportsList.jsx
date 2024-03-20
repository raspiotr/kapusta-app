import { useState, useEffect } from 'react';
import './ReportsList.module.scss'; // Upewnij się, że nazwa pliku i ścieżka są poprawne
import { getPeriodDataAPI } from '../../../../api/apiTransaction';

export const ReportsList = () => {
  const [active, setActive] = useState('');
  const [reports, setReports] = useState([]);
  const [transactionType, setType] = useState('expense'); // Domyślnie ustaw typ transakcji jako 'expense'

  useEffect(() => {
    getReportsData(transactionType, setReports);
  }, [transactionType]);

  const getReportsData = async (transactionType, setReports) => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    console.log('Year:', year, 'Month:', month)
    const body = {
      month,
      year,
    };
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Zjg0MTYxZDhmNWU4OGJiNWYyZGVhNCIsImlhdCI6MTcxMDg3MDI4MiwiZXhwIjoxNzExNDc1MDgyfQ.FF_Gif1IT1pbyeFnXnos_ThL8gGtAZ4fbi79dKyxlE4";
    try {
      const result = await getPeriodDataAPI({ transactionType, token, body });
      setReports(result);
    } catch (error) {
      console.error('Błąd pobierania danych z API:', error.message);
    }
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
