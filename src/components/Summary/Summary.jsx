import { useEffect, useState } from "react";
import { getSummaryAPI } from "../../api/apiTransaction";
import scss from "./Summary.module.scss";

const Summary = () => {
  const [summary, setSummary] = useState([]);

  const summaryEmpty = Array.from({ length: 6 }, (_, index) => {
    return summary[index] || { month: "", total: "" };
  });

  const showSummary = async () => {
    let type = "expense" || "income";

    try {
      const req = await getSummaryAPI({ type });
      return setSummary(req.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    showSummary();
  }, []);

  return (
    <div className={scss.summarySection}>
      <table className={scss.summaryTable}>
        <thead>
          <tr>
            <th colSpan="2" className={scss.summaryTitle}>
              SUMMARY
            </th>
          </tr>
        </thead>
        <tbody>
          {summaryEmpty.map((item, index) => (
            <tr key={index}>
              <td>{item.month}</td>
              <td>{item.total && Number(item.total).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Summary;
