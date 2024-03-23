import ChartComponent from "../../components/Charts/Charts";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import scss from "./Reports.module.scss";
import { getAllReportsAPI } from "../../api/apiTransaction";
import Button from "../../components/Reports/Periods/Button/Button";
import { Periods } from "../../components/Reports/Periods/Periods";
import { Balance } from "../../components/Balance/Balance";

import arrow from "../../images/SVG/arrow.svg";
import arrowPlus from "../../images/SVG/arrow+.svg";
import arrowMinus from "../../images/SVG/arrow-.svg";
import { nanoid } from "@reduxjs/toolkit";

const Reports = ({ balance }) => {
  //const [amount, setAmount] = useState(0);
  const [isActiveBtn, setIsActiveBtn] = useState([]);
  const [isType, setIsType] = useState(true);
  const [date, setDate] = useState(new Date());
  const [reports, setReports] = useState();
  const [chartData, setChartData] = useState([]);

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  const balanceBox = (
    <>
      <div className={scss.balance}>
        <p className={scss.title}>Balance:</p>
        <div className={scss.amount}>
          {balance}
          <span>UTH</span>
        </div>
      </div>
    </>
  );

  const allData = async ({ isType, year, month }) => {
    const type = isType ? "expense" : "income";
    try {
      const data = await getAllReportsAPI({ type, year, month });
      return setReports(data.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    allData({ isType, year, month });
    setIsActiveBtn([]);
    setChartData([]);
  }, [isType, date]);

  const checkDetail = (index, data) => {
    setIsActiveBtn([]);
    setChartData([...data]);
    setIsActiveBtn((prevState) => {
      if (prevState.includes(index)) {
        return prevState.filter((item) => item !== index);
      } else {
        return [...prevState, index];
      }
    });
  };

  return (
    <>
      <div className={scss.boxNav}>
        <Link to="/">
          <img src={arrow} alt="" />
          {!isMobile && <span className={scss.text}>Main page</span>}
        </Link>
        <>
          {isMobile ? (
            <>
              <Periods date={date} setDate={setDate} />
              {balanceBox}
            </>
          ) : (
            <>
              {isDesktop ? <Balance /> : balanceBox}
              <Periods date={date} setDate={setDate} />
            </>
          )}
        </>
      </div>
      <div>
        <ul className={scss.list}>
          <li className={scss.item}>
            <p className={scss.itemText}>Expense:</p>
            <span className={scss.itemExpenses}>{0}.00</span>
          </li>
          <li className={scss.item}>
            <p className={scss.itemText}>Income:</p>
            <span className={scss.itemIncome}>{0}.00</span>
          </li>
        </ul>
        <div className={scss.bigBox}>
          <div className={scss.box}>
            <Button
              icon={arrowMinus}
              value={isType}
              setValue={setIsType}
            ></Button>
            <p className={scss.navText}>{isType ? "Expense" : "Income"}</p>
            <Button
              icon={arrowPlus}
              value={isType}
              setValue={setIsType}
            ></Button>
          </div>
          <div className={scss.categoriesBox}>
            {reports &&
              reports.map((data, index) => (
                <div className={scss.category} key={nanoid()}>
                  <span>{data.total.toFixed(2)}</span>
                  <button
                    className={
                      isActiveBtn.includes(index) ? scss.activeButton : null
                    }
                    onClick={() => checkDetail(index, data.descriptions)}
                  >
                    <img src={data.categoryImageUrl} />
                  </button>
                  <div>{data.category}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {chartData[0] && <ChartComponent data={chartData} />}
    </>
  );
};
export default Reports;
