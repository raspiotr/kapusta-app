import scss from "./Table.module.scss";
import { useMediaQuery } from "react-responsive";
import {
  getTransactionsAPI,
  deleteTransactionAPI,
} from "../../api/apiTransaction";
import { useEffect, useState } from "react";
import trash from "../../images/SVG/delete.svg";

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
          <tr className={scss.titles}>
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
            {isMobile ? (
              <>
                <td className={scss.dataText}>
                  <div className={scss.upperText}>{row.description}</div>
                  <div className={scss.lowerText}>
                    <div>
                      {`${String(row.day).padStart(2, "0")}.${String(
                        row.month
                      ).padStart(2, "0")}.${row.year}`}
                    </div>
                    <div>{row.category}</div>
                  </div>
                </td>
                <td
                  className={scss.amount}
                  style={
                    isActive
                      ? {
                          color: "red",
                        }
                      : { color: "green" }
                  }
                >
                  {isActive && "- "}
                  {row.amount} <span>PLN</span>
                </td>
              </>
            ) : (
              <>
                <td>{`${String(row.day).padStart(2, "0")}.${String(
                  row.month
                ).padStart(2, "0")}.${row.year}`}</td>
                <td>{row.description}</td>
                <td>{row.category}</td>
                <td
                  className={scss.amount}
                  style={
                    isActive
                      ? {
                          color: "red",
                        }
                      : { color: "green" }
                  }
                >
                  {isActive && "- "} {row.amount} <span>PLN</span>
                </td>
              </>
            )}

            <td>
              <button className={scss.trashButton} onClick={deleteTransaction}>
                <img id={row._id} src={trash} alt="" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
