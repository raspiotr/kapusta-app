// import ChartComponent from "../../components/Charts/Charts";
import { ReportsInfo } from "../../components/Reports/ReportsInfo/ReportsInfo";
import ReportsNav from "../../components/Reports/ReportsNav/ReportsNav";
import scss from "./Reports.module.scss";

// ----- to jest tylko testowo ----------
const chartData = [
  { category: "Продукты", amount: "2000" },
  { category: "Транспорт", amount: "1500" },
  { category: "Развлечения", amount: "1000" },
  { category: "Продукты", amount: "2000" },
  { category: "Транспорт", amount: "1500" },
  { category: "Развлечения", amount: "1000" },
  { category: "Продукты", amount: "2000" },
  { category: "Транспорт", amount: "1500" },
  { category: "Развлечения", amount: "1000" },
  { category: "Продукты", amount: "2000" },
  { category: "Транспорт", amount: "1500" },
  { category: "Развлечения", amount: "1000" },
];
// ----------------------------------------
const Reports = () => {
  return (
    <div className={scss.box}>
      <ReportsNav />
      <ReportsInfo />
      {/* <ChartComponent data={chartData} /> */}
    </div>
  );
};
export default Reports;
