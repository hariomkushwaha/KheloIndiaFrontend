import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Card from "../components/Card";
import { Box } from "@mui/material";

const MainGettingPage = () => {


  const [tenderValues, setTenderValues] = useState([]);
  const handleTenders = async () => {
    try {
      const res = await fetch("/API/tenderform", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = res.json()
      data.then(response => {
        setTenderValues(response);
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
    handleTenders();
  }, []);

  
  return (
    <div>
      <Header />
      <Navbar />
      <Box
      sx={{
        my: 2,
      }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {
          tenderValues.map((tenderValue) => {
            return <Card key={tenderValue.tenderId} values={tenderValue} />
          })
          }
        </div>
      </Box>
    </div>
  );
};

export default MainGettingPage;
