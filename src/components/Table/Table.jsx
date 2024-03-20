import scss from "./Table.module.scss";
import { useMediaQuery } from "react-responsive";
import {
  getTransactionsAPI,
  deleteTransactionAPI,
} from "../../api/apiTransaction";
import { useEffect, useState } from "react";

const Table = ({ isActive }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [transaction, setTransaction] = useState([]);

  const showTransactions = async () => {
    let type = isActive ? "expense" : "income";
    try {
      const req = await getTransactionsAPI({ type });
      return setTransaction(req.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteTransaction = async (event) => {
    const id = event.target.id;
    console.log(id);

    try {
      return await deleteTransactionAPI(id);
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
            <td>{`${String(row.day).padStart(2, "0")}.${String(
              row.month
            ).padStart(2, "0")}.${row.year}`}</td>
            <td>{row.description}</td>
            <td>{row.category}</td>
            <td>{row.amount}</td>
            <td>
              <button
                id={row._id}
                className={scss.trashButton}
                onClick={deleteTransaction}
              >
                🗑️
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
