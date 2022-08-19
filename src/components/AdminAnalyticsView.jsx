import React, { useEffect, useState } from "react";
import BarChart from "./BarChart";
import Admin from "../pages/Admin";
import { useParams } from "react-router-dom";
import PieChart from "./PieChart";

const AdminAnalyticsView = () => {
  const { tenderID } = useParams();
  const [proponentValues, setProponentValues] = useState([]);

  const handleProponents = async () => {
    try {
      const res = await fetch("/API/proponentform", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = res.json();
      data.then((response) => {
        setProponentValues(
          response.filter((item) => item.tenderId === tenderID)
        );
      });
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleProponents();
  }, []);

  useEffect(() => {
    console.log("pValues: ", proponentValues);
  }, [proponentValues]);

  const getChartData = (fName) => {
    let data = {
      labels: proponentValues.map((item) => item[fName]),
      datasets: [
        {
          data: proponentValues.map((item) => item[fName]),
          backgroundColor: [getRandomColor()],
        },
      ],
    };

    return data;
  };

  function getRandomColor() {
    const COLORS = [
      "#4dc9f690",
      "#f6701990",
      "#f5379490",
      "#537bc490",
      "#acc23690",
      "#166a8f90",
      "#00a95090",
      "#58595b90",
      "#8549ba90",
    ];
    console.log(COLORS[Math.round((Math.random() * 10) % COLORS.length)]);
    return COLORS[Math.round((Math.random() * 10) % COLORS.length)];
  }

  return (
    <>
      <Admin>
        <div>
          <BarChart
            title={"Durability"}
            data={getChartData("durability")}
            width={400}
          />
        </div>
        <div>
          <BarChart
            title={"Quality"}
            data={getChartData("quality")}
            width={400}
          />
        </div>
        <div>
          <BarChart
            title={"Total Cost"}
            data={getChartData("totalcost")}
            width={400}
          />
        </div>
        <div>
          <BarChart
            title={"Duration"}
            data={getChartData("duration")}
            width={400}
          />
        </div>
        <PieChart title={"Duaraion pue"} data={getChartData("duration")} />
      </Admin>
    </>
  );
};

export default AdminAnalyticsView;
