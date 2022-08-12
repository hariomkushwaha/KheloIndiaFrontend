import React from "react";
import BarChart from "../components/BarChart.jsx";
import LineChart from "../components/LineChart.jsx";
import PieChart from "../components/PieChart.jsx";
import  {faker} from "@faker-js/faker";

const Chart = () => {

  const labels = ["January", "February", "March", "April", "May", "June", "July"];

  const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

  return (
    <>
      <BarChart data={data}  />
      <LineChart data={data}  />
      <PieChart data={data}  />
      
    </>
  );
};

export default Chart;
