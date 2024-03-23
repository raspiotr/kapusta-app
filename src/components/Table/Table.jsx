import scss from "./Table.module.scss";
import { useMediaQuery } from "react-responsive";

import { useEffect, } from "react";
import trash from "../../images/SVG/delete.svg";
import { useSelector, useDispatch } from "react-redux";
import {selectTransactions}from '../../redux/contacts/selectors.js'
import {getTransaction} from '../../redux/contacts/operations.js'
import {removeTransaction} from '../../redux/contacts/operations.js'

const Table = ({ isActive }) => {
 
  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  const dispatch = useDispatch();
  const transaction= useSelector(selectTransactions)

  const deleteTransaction = (id) => {
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
          <tr key={row.data.transaction._id}>
            {console.log("Row data:", row.data.transaction)}
            {isMobile ? (
              <>
                <td className={scss.dataText}>
                  <div className={scss.upperText}>{row.data.transaction.description}</div>
                  <div className={scss.lowerText}>
                    <div>
                    {`${String(row.data.transaction.day).padStart(2, "0")}.${String(row.data.transaction.month).padStart(2, "0")}.${row.data.transaction.year}`}

                    </div>
                    <div>{row.data.transaction.category}</div>
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
                  {row.data.transaction.amount} <span>PLN</span>
                </td>
              </>
            ) : (
              <>
                <td>{`${String(row.data.transaction.day).padStart(2, "0")}.${String(
                  row.data.transaction.month
                ).padStart(2, "0")}.${row.data.transaction.year}`}</td>
                <td>{row.data.transaction.description}</td>
                <td>{row.data.transaction.category}</td>
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
                  {isActive && "- "} {row.data.transaction.amount} <span>PLN</span>
                </td>
              </>
            )}

            <td>
              <button className={scss.trashButton} onClick={() => deleteTransaction(row.data.transaction._id)}>
                <img id={row.data.transaction._id} src={trash} alt="" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
