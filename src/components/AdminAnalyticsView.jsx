import React, { useState, useEffect } from "react";
import BarChart from "./BarChart";

import { faker } from "@faker-js/faker";

const AdminAnalyticsView = () => {

  const [proponentValues, setProponentValues] = useState([]);
  const [arr, setArr] = useState([]);

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
        setProponentValues(response);
      });
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.error(err);
    }
  };

  var obj = [];
  const handleProponentsData = async () => {
    await obj.push(proponentValues[0]["durability"]);
    await obj.push(proponentValues[0]["quality"]);
    await obj.push(proponentValues[0]["usability"]);
    await setArr(obj);
    // labels.forEach((num) => {
    //   for (const [key, value] of Object.entries(proponentValues[0])) {
    //     if (key === num) {
    //         // setArr(current => [...current, value])
    //         obj.push(value);
    //     }
    //   }
    //   console.log(obj)
    //   return obj;
    // obj.push(proponentValues[0].num)
    // console.log(obj)
    // console.log(num, proponentValues[0])
    // setArr(proponentValues[0][num]);
    // }
    // ),
    console.log(arr);
  }

  useEffect(() => {
    handleProponents();
    handleProponentsData();
  }, []);

  // useEffect(() => {
  // }, [arr]);

  const labels = [
    "durability",
    "quality",
    "usability"
  ];


  // let obj = ['4', '5', '6'];

  const data = {
    labels,
    datasets: [
      {
        label: "Proposals",
        data: arr,
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
