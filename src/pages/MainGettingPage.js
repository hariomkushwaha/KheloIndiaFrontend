import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Card from "../components/Card";
import { Box } from "@mui/material";

const MainGettingPage = () => {
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
        <Card />
        <Card />
      </Box>
    </div>
  );
};

export default MainGettingPage;
