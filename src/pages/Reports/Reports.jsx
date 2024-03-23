import ChartComponent from "../../components/Charts/Charts";
import { ReportsInfo } from "../../components/Reports/ReportsInfo/ReportsInfo";
import ReportsNav from "../../components/Reports/ReportsNav/ReportsNav";
import scss from "./Reports.module.scss";

// ----- to jest tylko testowo ----------
const chartData = [
  { 
    categoryImageUrl: "https://kapusta-backend-827563b0830f.herokuapp.com/products.svg",
    category: "products",
    descriptions: [
      { description: "mleko", sum: 10.99 },
      { description: "warzywa", sum: 179.98 },
      { description: "mleko", sum: 20 },
      { description: "warzywa", sum: 300 },
      { description: "mleko", sum: 80 },
      { description: "warzywa", sum: 200 },
      { description: "mleko", sum: 65 },
      { description: "owoce", sum: 130 },
      { description: "mleko", sum: 60 },
      { description: "owoce", sum: 150 },
    ]
  },
];
// ----------------------------------------
const Reports = () => {
  return (
    <div className={scss.box}>
      <ReportsNav />
      <ReportsInfo />
      <ChartComponent data={chartData} />
    </div>
  );
};
export default Reports;
