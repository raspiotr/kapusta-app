import scss from "./Table.module.scss";
import { useMediaQuery } from "react-responsive";

const data = [
  {
    date: "22.10.2023",
    description: "Shopping",
    category: "Other",
    sum: "20$",
  },
  {
    date: "12.01.2024",
    description: "Shopping",
    category: "Other",
    sum: "50$",
  },
];

const Table = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <table className={scss.table}>
      {!isMobile ? (
        <thead>
          <tr>
            <th>DATE</th>
            <th>DESCRIPTION</th>
            <th>CATEGORY</th>
            <th>SUM</th>
            <th></th>
          </tr>
        </thead>
      ) : (
        ""
      )}

      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.date}</td>
            <td>{row.description}</td>
            <td>{row.category}</td>
            <td>{row.sum}</td>
            <td>🗑️</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
