import { useState, useEffect } from "react";

import "./ReportsList.module.scss";
import { getPeriodDataAPI } from "../../../../api/apiTransaction";
import PropTypes from "prop-types";
// import { useSelector } from 'react-redux';
// import { selectSelectedMonth, selectSelectedYear } from '../../../../redux/reducers/calendarReducer';

export const ReportsList = ({ transactionType }) => {
  const [active, setActive] = useState("");
  const [reports, setReports] = useState([]);
  // const selectedMonth = useSelector(selectSelectedMonth); // Używamy wartości z Reduxa dla miesiąca
  // const selectedYear = useSelector(selectSelectedYear); // Używamy wartości z Reduxa dla roku

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {

  //       const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Zjg0MTYxZDhmNWU4OGJiNWYyZGVhNCIsImlhdCI6MTcxMDkzMjk2NCwiZXhwIjoxNzExNTM3NzY0fQ.Xf8oOxwtX-tiLZ2Pvv33qcXCkSAs-JJgEsM8Jyzxqqc";
  //       const monthIndex = selectedMonth; // Używamy wartości z Reduxa dla miesiąca
  //       const result = await getReportsData(transactionType, selectedYear, monthIndex + 1, token); // Dodajemy 1, ponieważ miesiące są indeksowane od 0

  //       setReports(result);
  //     } catch (error) {
  //       console.error("Błąd pobierania danych z API:", error.message);
  //     }
  //   };

  //   fetchData();
  // }, [selectedYear, selectedMonth, transactionType]); // Dodajemy selectedYear i selectedMonth do zależności useEffect

  // const getReportsData = async (transactionType, year, month, token) => {
  //   try {
  //     const result = await getPeriodDataAPI({
  //       transactionType,
  //       year,
  //       month,
  //       token,
  //     });
  //     return result.data;
  //   } catch (error) {
  //     throw new Error("Błąd pobierania danych z API: " + error.message);
  //   }
  // };

  const handleItemClick = (item) => {
    setActive(item);
    // Tutaj możesz dodać logikę obsługi kliknięcia na elementach listy raportów
  };

  return (
    <div>
      <ul>
        {reports.map((item) => (
          <li
            key={item.id}
            onClick={() => handleItemClick(item)}
            className={`${item === active ? "active" : ""}`}
          >
            <p>{item.category}</p>
            <svg
              width="56"
              height="56"
              className={item.iconName === active ? "active" : ""}
            >
              <use href={`${item.categoryImageUrl}#${item.iconName}`}></use>
            </svg>
            <p>{item.total} UAH</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

ReportsList.propTypes = {
  transactionType: PropTypes.bool.isRequired,
};

export default ReportsList;
