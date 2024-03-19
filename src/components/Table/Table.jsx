import scss from "./Table.module.scss";
import { useMediaQuery } from "react-responsive";
import { getTransactions } from "../../api/apiTransaction";
import { useEffect, useState } from "react";

// const data = [
//   {
//     date: "22.10.2023",
//     description: "Shopping",
//     category: "Other",
//     sum: "20$",
//   },
//   {
//     date: "12.01.2024",
//     description: "Shopping",
//     category: "Other",
//     sum: "50$",
//   },
// ];
const Table = ({ isActive }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [transaction, setTransaction] = useState([]);

  const showTransactions = async () => {
    let type = isActive ? "expense" : "income";
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Zjg0MTYxZDhmNWU4OGJiNWYyZGVhNCIsImlhdCI6MTcxMDg3MDI4MiwiZXhwIjoxNzExNDc1MDgyfQ.FF_Gif1IT1pbyeFnXnos_ThL8gGtAZ4fbi79dKyxlE4";
    try {
      const req = await getTransactions({ type, token });

      console.log(req.data);

      return setTransaction(req.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    showTransactions();
  }, [isActive]);

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
        {transaction.map((row) => (
          <tr key={row._id}>
            <td>{`${row.day}.${row.month}.${row.year}`}</td>
            <td>{row.description}</td>
            <td>{row.category}</td>
            <td>{row.amount}</td>
            <td>🗑️</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
