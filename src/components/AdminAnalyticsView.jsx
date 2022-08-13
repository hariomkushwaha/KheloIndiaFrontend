import React from "react";
import BarChart from "./BarChart";

import { faker } from "@faker-js/faker";

const AdminAnalyticsView = () => {
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
      <div>
        <BarChart data={data} />
      </div>
    </>
  );
};

export default AdminAnalyticsView;
