import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Cell, LabelList, ResponsiveContainer, ReferenceLine } from "recharts";
import scss from "./Charts.module.scss";
// =======
// import { Bar } from "react-chartjs-2";
// import scss from "./Charts.module.scss";
// import Chart from "chart.js/auto";
// import ChartDataLabels from "chartjs-plugin-datalabels";
// import {
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js/auto";

// Chart.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ChartDataLabels,
//   Title,
//   Tooltip,
//   Legend
// );
// >>>>>>> 

const ChartComponent = ({ data }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getChartOrientation = () => {
    return screenWidth < 772 ? "vertical" : "horizontal";

  };
  
  return (
    <div className={scss.chartContainer}>
      {getChartOrientation() === "vertical" ? (
        <VerticalBarChart data={data[0].descriptions} />
      ) : (
        <HorizontalBarChart data={data[0].descriptions} />
      )}
    </div>
  );
};

const VerticalBarChart = ({ data }) => {
  const sortData = data.slice().sort((a, b) => b.sum - a.sum);
  const itemHeight = 45;
  const containerHeight = data.length * itemHeight;
  const colors = ['#FF751D', '#FED9BF', '#FED9BF'];

  return (
    <ResponsiveContainer width="100%" height={containerHeight}>
      <BarChart data={sortData} layout="vertical">
        <XAxis type="number" domain={[0, 'dataMax + 0']} hide  />
        <YAxis dataKey="description" type="category" hide />
        <Tooltip />
        <Bar dataKey="sum" barSize={16} radius={[0, 10, 10, 0]}>
        <LabelList 
          dataKey="description" 
          position="top" 
          offset={5} 
          fontSize={12} 
          fill="#52555F" 
          formatter={(value) => value} 
        />
        <LabelList 
          dataKey="sum" 
          // offset={20} 
          fontSize={12} 
          fill="#52555F" 
          formatter={(value) => `$${value}`} 
        />
        {sortData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

const HorizontalBarChart = ({ data }) => {
  const sortedData = [...data].sort((a, b) => b.sum - a.sum);
  const itemHeight = 60;
  const containerHeight = data.length * itemHeight;
  const colors = ['#FF751D', '#FED9BF', '#FED9BF'];

  return (
    <BarChart width={containerHeight} height={300} data={sortedData} margin={{ top: 20 }}>
      <XAxis dataKey="description" tick={<CustomizedTick />} tickLine={false} />
      <YAxis type="number" domain={[0, 'dataMax + 0']} hide />
      <Tooltip />
      <ReferenceLine y={1} stroke="#F5F6FB" strokeWidth={3} />
      <Bar dataKey="sum" fill="#8884d8" barSize={38} radius={[10, 10, 0, 0]}>
        <LabelList 
          dataKey="sum" 
          position="top" 
          fontSize={12} 
          fill="#52555F" 
          formatter={(value) => `$${value}`} 
        />
        {sortedData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Bar>
    </BarChart>
  );
};


const CustomizedTick = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text 
        dy={15} 
        fill="#52555F" 
        fontSize={12}
        textAnchor="middle"
        transform="rotate(-15)"
      >
        {payload.value}
      </text>
    </g>
// =======
//   return (
//     <div className={scss.box}>
//       <Bar data={chartData} options={options} />
//     </div>
// >>>>>>>
  );
};

export default ChartComponent;







// import React, { useEffect } from 'react';
// import { Bar } from "react-chartjs-2";
// import Chart from "chart.js/auto";
// import ChartDataLabels from "chartjs-plugin-datalabels";
// import {
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js/auto";

// Chart.register(CategoryScale, LinearScale, BarElement, ChartDataLabels, Title, Tooltip, Legend);

// const ChartComponent = ({ data }) => {
//   const sortedData = [...data].sort((a, b) => b.amount - a.amount);
//   const labels = sortedData.map((item) => item.category);
//   // const amounts = sortedData.map((item) => item.amount);

//   const chartData = {
//     labels,
//     datasets: [
//       {
//         label: "Расходы",
//         data: sortedData.map((item) => item.amount),
//         backgroundColor: ["#FF751D", "#FFDAC0", "#FFDAC0"],
//         hoverBackgroundColor: "#a41765",
//         borderRadius: 10,
//       },
//     ],
//   };

//   const options = {
//     plugins: {
//       legend: {
//         display: false,
//       },
//       datalabels: {
//         anchor: 'end',
//         align: 'top',
//         font: {
//           size: 12,
//           weight: 'bold',
//         },
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false,
//         },
//       },
//       y: {
//         grid: {
//           color: '#F5F6FB',
//           lineWidth: 2,
//         },
//         ticks: {
//           stepSize: 500,
//         },
//       },
//     },
//     indexAxis: 'x',
//     barThickness: 38,
//     categorySpacing: 20,
//     layout: {
//       padding: {
//         top: 30,
//       },
//     },
//   };

//   return (
//     <div style={{ maxWidth: '712px', margin: '0 auto' }}> {/* Инлайн-стили для центрирования и максимальной ширины */}
//       <Bar data={chartData} options={options} />
//     </div>
//   );
// };

// export default ChartComponent;
