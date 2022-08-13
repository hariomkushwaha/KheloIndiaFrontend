import React from "react";
import BarChart from "../components/BarChart.jsx";
import LineChart from "../components/LineChart.jsx";
import PieChart from "../components/PieChart.jsx";
<<<<<<< HEAD
import { faker } from "@faker-js/faker";
=======
import  {faker} from "@faker-js/faker";
import Header from "../components/Header.jsx";
>>>>>>> a808d67d8146012e048b04f9aa7f28d8df181e85

const Chart = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

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
<<<<<<< HEAD
      <div
        style={{
          height: "300px",
          width: "500px",
        }}
      >
        <BarChart data={data} />
      </div>
      <div
        style={{
          height: "300px",
          width: "500px",
        }}
      >
        <LineChart data={data} />
      </div>
      <div
        style={{
          height: "300px",
          width: "500px",
        }}
      >
        <PieChart data={data} />
      </div>
=======
      <Header />
      <BarChart data={data}  />
      <LineChart data={data}  />
      <PieChart data={data}  />
      
>>>>>>> a808d67d8146012e048b04f9aa7f28d8df181e85
    </>
  );
};

export default Chart;
