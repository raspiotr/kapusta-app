import scss from "./Table.module.scss";
import { useMediaQuery } from "react-responsive";
import PropTypes from "prop-types";

import { useEffect } from "react";
import trash from "../../images/SVG/delete.svg";
import { useSelector, useDispatch } from "react-redux";
import { selectTransactions } from "../../redux/transactions/selectors.js";
import { getTransaction } from "../../redux/transactions/operations.js";
import { removeTransaction } from "../../redux/transactions/operations.js";
import { selectUser } from "../../redux/auth/selectors.js";
import { setNewBalance } from "../../redux/auth/slice.js";

const Table = ({ isActive }) => {
  const user = useSelector(selectUser);
  const balance = user.balance;

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const dispatch = useDispatch();
  const transaction = useSelector(selectTransactions);

  const deleteTransaction = (id, amount) => {
    const valuePositive = Math.abs(amount);
    const change = isActive ? valuePositive : valuePositive * -1;
    const newBalance = Number(balance) + change;
    dispatch(setNewBalance({ balance: newBalance }));

    dispatch(removeTransaction(id));
  };

  const showTransactions = async () => {
    let type = isActive ? "expense" : "income";
    try {
      dispatch(getTransaction(type));
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    showTransactions();
  }, [isActive]);

  return (
    <>
      {transaction[0] ? (
        <table className={scss.table}>
          {!isMobile && (
            <thead>
              <tr className={scss.titles}>
                <th>DATE</th>
                <th>DESCRIPTION</th>
                <th>CATEGORY</th>
                <th>SUM</th>
                <th></th>
              </tr>
            </thead>
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
                    <td className={scss.date}>{`${String(row.day).padStart(
                      2,
                      "0"
                    )}.${String(row.month).padStart(2, "0")}.${row.year}`}</td>
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
                  <button
                    className={scss.trashButton}
                    onClick={() => deleteTransaction(row._id, row.amount)}
                  >
                    <img id={row._id} src={trash} alt="" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className={scss.addTransaction}>
          Add transactions to display them in the table
        </div>
      )}
    </>
  );
};

Table.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Table;
