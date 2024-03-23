import { Bar } from "react-chartjs-2";
import scss from "./Charts.module.scss";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ChartDataLabels,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = ({ data }) => {
  const sortedData = [...data].sort((a, b) => b.amount - a.amount);
  const labels = sortedData.map((item) => item.description);
  // const amounts = sortedData.map((item) => item.sum);

  const chartData = {
    labels,
    datasets: [
      {
        data: sortedData.map((item) => item.sum.toFixed(2)),
        backgroundColor: ["#FF751D", "#FFDAC0", "#FFDAC0"],
        hoverBackgroundColor: "#a41765",
        borderRadius: 10,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: "end",
        align: "top",
        font: {
          size: 12,
          weight: "bold",
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "#F5F6FB",
          lineWidth: 2,
        },
        ticks: {
          stepSize: 500,
        },
      },
    },
    indexAxis: "x",
    barThickness: 38,
    categorySpacing: 0,
    layout: {
      padding: {
        top: 200,
      },
    },
  };

  return (
    <div className={scss.box}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ChartComponent;
