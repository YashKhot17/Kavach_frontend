import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Vehicles", "Number"],
  ["Criminal", 20],
  ["Stolen", 10],
  ["Valid", 100], // CSS-style declaration
];

export const options = {
  title: "Vehicle Details",
  pieHole: 0.5,
  is3D: false,
};

const Chart_Admin = () => {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="500px"
      data={data}
      options={options}
    />
  );
}

export default Chart_Admin