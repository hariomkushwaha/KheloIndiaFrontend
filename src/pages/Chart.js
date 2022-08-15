import React , {useEffect, useState} from "react";
import BarChart from "../components/BarChart.jsx";
import LineChart from "../components/LineChart.jsx";
import PieChart from "../components/PieChart.jsx";
import  {faker} from "@faker-js/faker";
import Header from "../components/Header.jsx";
import { dateFnsLocalizer } from "react-big-calendar";



const Chart = () => {
//   const [proponentValues, setProponentValues] = useState([]);
//   const [arr , setArr] = useState([]);
// const handleProponents = async () => {
//   try {
//     const res = await fetch("/API/proponentform", {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       credentials: "include",
//     });
//     const data = res.json();
//     data.then((response) => {
//       setProponentValues(response);
//       console.log(response);
//     });
//     if (!res.status === 200) {
//       const error = new Error(res.error);
//       throw error;
//     }
//   } catch (err) {
//     console.error(err);
//   }
// };

// useEffect(() => {
//   handleProponents();
// }, []);

// useEffect(()=>{
//   console.log(arr);
// },[arr]);

//   const labels = [
//     "durability",
//     "quality",
//     "usability"
//   ];

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "Dataset 1",
//         data: labels.forEach((num)=>{
             
//              console.log(proponentValues);
//              setArr( ar => [...ar, proponentValues[0].num]);
             
//         }),
//         backgroundColor: "rgba(255, 99, 132, 0.5)",
//       },
//     ],
//   };

  return (
    <>
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
      <Header />
      <BarChart data={data}  />
      <LineChart data={data}  />
      <PieChart data={data}  />
    </>
  );
};

export default Chart;
