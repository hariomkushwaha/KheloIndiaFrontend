import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart(props) {
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          title: function (context) {
            return `Proponent: ${context[0].label}`;
          },
        },
      },

      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: true,
        text: `${props.title}` || "Bar Chart",
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
          display: false,
        },
      },
    },
  };
  return (
    <div style={{ height: props.height || 200, width: props.width || 200 }}>
      <Bar
        options={options}
        data={props.data}
        style={{ border: "1px solid black", padding: "10px" }}
      />
    </div>
  );
}
