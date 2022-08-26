/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import BarChart from "./BarChart";
import Admin from "../pages/Admin";
import { useParams } from "react-router-dom";
import PieChart from "./PieChart";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import LineChart from "./LineChart";

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
    proponentValues.forEach((item) =>
      console.log("oijsdbfisiugusdiuhf", item[fName])
    );
    let data = {
      labels: proponentValues.map((item) => item.proponentId),
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
    // console.log(COLORS[Math.round((Math.random() * 10) % COLORS.length)]);
    return COLORS[Math.round((Math.random() * 10) % COLORS.length)];
  }

  return (
    <>
      <Admin />
      <Box sx={{ m: 5 }}>
        <Grid
          container
          spacing={2}
          rowSpacing={10}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={4}>
            <BarChart
              title={"Durability"}
              data={getChartData("durability")}
              width={500}
            />
          </Grid>
          <Grid item xs={4}>
            <BarChart
              title={"Quality"}
              data={getChartData("quality")}
              width={500}
            />
          </Grid>

          {/* Next Row */}
          <br />
          <Grid item xs={4}>
            <BarChart
              title={"Total Cost"}
              data={getChartData("totalcost")}
              width={500}
            />
          </Grid>
          <Grid item xs={8} md={8} lg={8}>
            <LineChart
              title={"Duration"}
              data={getChartData("duration")}
              width={800}
            />
          </Grid>
        </Grid>
        <br></br>
        <br></br>
        <br></br>
      </Box>
    </>
  );
};

export default AdminAnalyticsView;
