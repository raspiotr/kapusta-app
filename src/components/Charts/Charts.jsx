import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js/auto';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = ({ data }) => {
  const labels = data.map(item => item.category);
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Расходы',
        data: data.map(item => item.amount),
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { display: false },
        grid: {
          display: false,
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default ChartComponent;