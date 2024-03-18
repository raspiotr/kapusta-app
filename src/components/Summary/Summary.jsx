import scss from "./Summary.module.scss";

const data = [
  { month: "January", amount: "$1000" },
  { month: "February", amount: "$1500" },
  { month: "March", amount: "$1200" },
  { month: "April", amount: "$1800" },
  { month: "May", amount: "$2000" },
  { month: "June", amount: "$1700" },
];

const Summary = () => {
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
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.month}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Summary;
