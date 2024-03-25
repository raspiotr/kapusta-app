import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  LabelList,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import scss from "./Charts.module.scss";
import PropTypes from "prop-types";

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
        <VerticalBarChart data={data} />
      ) : (
        <HorizontalBarChart data={data} />
      )}
    </div>
  );
};

const VerticalBarChart = ({ data }) => {
  const sortData = [...data].sort((a, b) => b.sum - a.sum);
  const itemHeight = 45;
  const containerHeight = data.length * itemHeight;
  const colors = ["#FF751D", "#FED9BF", "#FED9BF"];

  return (
    <ResponsiveContainer width="100%" height={containerHeight}>
      <BarChart data={sortData} layout="vertical">
        <XAxis type="number" domain={[0, "dataMax + 0"]} hide />
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
            formatter={(value) => `$${parseFloat(value).toFixed(2)}`}
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
  const itemHeight = 180;
  const containerHeight = data.length * itemHeight;
  const colors = ["#FF751D", "#FED9BF", "#FED9BF"];

  return (
    <BarChart
      width={containerHeight}
      height={300}
      data={sortedData}
      margin={{ top: 20 }}
    >
      <XAxis dataKey="description" tick={<CustomizedTick />} tickLine={false} />
      <YAxis type="number" domain={[0, "dataMax + 0"]} hide />
      <Tooltip />
      <ReferenceLine y={1} stroke="#F5F6FB" strokeWidth={3} />
      <Bar dataKey="sum" fill="#8884d8" barSize={38} radius={[10, 10, 0, 0]}>
        <LabelList
          dataKey="sum"
          position="top"
          fontSize={12}
          fill="#52555F"
          formatter={(value) => `$${parseFloat(value).toFixed(2)}`}
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
        transform="rotate(-5)"
      >
        {payload.value}
      </text>
    </g>
  );
};

ChartComponent.propTypes = {
  data: PropTypes.array.isRequired,
};

HorizontalBarChart.propTypes = {
  data: PropTypes.array.isRequired,
};

VerticalBarChart.propTypes = {
  data: PropTypes.array.isRequired,
};

CustomizedTick.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  payload: PropTypes.object,
};

export default ChartComponent;
