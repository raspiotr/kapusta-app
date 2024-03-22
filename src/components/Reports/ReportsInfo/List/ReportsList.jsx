import { useState, useEffect } from "react";
import "./ReportsList.module.scss";
import { getPeriodDataAPI } from "../../../../api/apiTransaction";
import {
  selectSelectedMonth,
  selectSelectedYear,
} from "../../../../redux/reducers/calendarReducer";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export const ReportsList = ({ transactionType }) => {
  const [active, setActive] = useState("");
  const [reports, setReports] = useState([]);
  const selectedMonth = useSelector(selectSelectedMonth);
  const selectedYear = useSelector(selectSelectedYear);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Zjg0MTYxZDhmNWU4OGJiNWYyZGVhNCIsImlhdCI6MTcxMDkzMjk2NCwiZXhwIjoxNzExNTM3NzY0fQ.Xf8oOxwtX-tiLZ2Pvv33qcXCkSAs-JJgEsM8Jyzxqqc";
        const result = await getReportsData(
          transactionType,
          selectedYear,
          selectedMonth + 1,
          token
        );
        setReports(result);
      } catch (error) {
        console.error("Błąd pobierania danych z API:", error.message);
      }
    };

    fetchData();
  }, [selectedMonth, selectedYear, transactionType]); // Tutaj dodajemy te zależności

  const getReportsData = async (transactionType, year, month, token) => {
    try {
      const result = await getPeriodDataAPI({
        transactionType,
        year,
        month,
        token,
      });
      return result.data;
    } catch (error) {
      throw new Error("Błąd pobierania danych z API: " + error.message);
    }
  };

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
