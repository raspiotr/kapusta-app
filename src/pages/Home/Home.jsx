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
    <main>
      <button>TO TRANSACTION</button>
      <Link to="/reports">Reports</Link>
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
export default Home;
