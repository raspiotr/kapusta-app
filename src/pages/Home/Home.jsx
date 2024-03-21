import { Link } from "react-router-dom";
import Balance from "../../components/Balance/Balance";
import Buttons from "../../components/Buttons/Buttons";
import Calendar from "../../components/Calendar/Calendar";
import scss from "./Home.module.scss";
import { useEffect, useState } from "react";
import Input from "../../components/Inputs/Input";
import { useMediaQuery } from "react-responsive";
import Transaction from "../../components/Transaction/Transaction";
import Table from "../../components/Table/Table";
import Summary from "../../components/Summary/Summary";
import arrow from "../../images/SVG/arrow.svg";
import reports from "../../images/SVG/reports.svg";

const Home = () => {
  const [isActive, setIsActive] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const [date, setDate] = useState(new Date());

  useEffect(() => {}, [date]);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const openModalBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={scss.mainContainer}>
      <div className={scss.transactionBtn}>
        <button onClick={openModalBtn}>
          <img src={arrow} alt="" />
          TO TRANSACTION
        </button>
      </div>
      <div className={scss.balance}>
        {isMobile ? (
          <>
            <div className={scss.reports}>
              <Link to="/reports">
                Reports <img src={reports} alt="" />
              </Link>
            </div>
            <Balance />
          </>
        ) : (
          <>
            <Balance />
            <div className={scss.reports}>
              <Link to="/reports">
                Reports <img src={reports} alt="" />
              </Link>
            </div>
          </>
        )}
      </div>
      {!isMobile && <Buttons isActive={isActive} handleClick={handleClick} />}
      {isMobile ? (
        <>
          <Calendar selectedDate={date} setSelectedDate={setDate} />
          <Input isOpen={isOpen} closeModal={openModalBtn} />
          <Table isActive={isActive} />
        </>
      ) : (
        <>
          <div className={scss.mainWindow}>
            <div className={scss.upWindow}>
              <Calendar selectedDate={date} setSelectedDate={setDate} />
              <Transaction />
            </div>
            <div className={scss.bottomWindow}>
              <Table isActive={isActive} />
              {isDesktop && <Summary />}
            </div>
          </div>
          {!isDesktop && <Summary />}
        </>
      )}
      {isMobile && <Buttons isActive={isActive} handleClick={handleClick} />}
    </div>
  );
};
export default Home;
