import { Link } from "react-router-dom";
import Balance from "../../components/Balance/Balance";
import Calendar from "../../components/Calendar/Calendar";
import scss from "./Home.module.scss";
import { useState } from "react";

const Home = () => {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <main className={scss.mainContainer}>
      <button className={scss.transactionBtn}>TO TRANSACTION</button>
      <div className={scss.reports}>
        <Link to="/reports">Reports 📊</Link>
      </div>
      <Balance />
      <Calendar />
      <div className={scss.bottomButtons}>
        <button
          className={`${scss.button} ${isActive ? "" : scss.active}`}
          style={
            isActive ? { backgroundColor: "darkorange", color: "white" } : {}
          }
          onClick={!isActive ? handleClick : null}
        >
          EXPENSES
        </button>
        <button
          className={`${scss.button} ${!isActive ? "" : scss.active}`}
          style={
            !isActive ? { backgroundColor: "darkorange", color: "white" } : {}
          }
          onClick={isActive ? handleClick : null}
        >
          INCOME
        </button>
      </div>
    </main>
  );
};
export default Home;
