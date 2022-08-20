import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

const ProponentForm = () => {
  var { tenderID } = useParams();
const navigate = useNavigate();
  const initialValues = {
    tenderId: tenderID,
    generalexperience: "",
    proponentId: "",
    sportsspecificexperience: "",
    projectmanagerexperience: "",
    databaseadminexperience: "",
    coordinatorexperience: "",
    totalcost: "",
    duration: "",
    quality: "",
    usability: "",
    durability: "",
  };

  const [values, setValues] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      tenderId,
      proponentId,
      generalexperience,
      sportsspecificexperience,
      projectmanagerexperience,
      databaseadminexperience,
      coordinatorexperience,
      totalcost,
      duration,
      quality,
      usability,
      durability,
    } = values;

    const res = await fetch("http://localhost:5000/API/proponentform", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tenderId,
        proponentId,
        generalexperience,
        sportsspecificexperience,
        projectmanagerexperience,
        databaseadminexperience,
        coordinatorexperience,
        totalcost,
        duration,
        quality,
        usability,
        durability,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invalid Submission");
    } else {
      window.alert("Posted Successfully");
      navigate('/get-started');
    }
    console.log(values);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        m: 3,
      }}
    >
      <Typography variant="h3" component="div">
        WELCOME PROPONENTS
      </Typography>
      <Typography variant="h5" component="div">
        Khelo India{"  "}
        <Link href="/get-started" underline="none">
          Site
        </Link>{" "}
        ✌️
      </Typography>
      <br />
      <Box
        sx={{
          m: 2,
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 3,
            width: "40%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4" component="h1">
            Tender ID: {tenderID}
          </Typography>
          <br />
          <Typography variant="body1" component="div">
            Service Details
          </Typography>
          <TextField
            id="standard-basic"
            label="Proponent ID"
            variant="standard"
            name="proponentId"
            value={values.proponentId}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="General Experience"
            variant="standard"
            name="generalexperience"
            value={values.generalexperience}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Sports Specific Experience"
            variant="standard"
            name="sportsspecificexperience"
            value={values.sportsspecificexperience}
            onChange={handleChange}
          />
          <br />
          <Divider />
          <br />
          <Typography variant="body1" component="div">
            Team Details
          </Typography>

          <TextField
            id="standard-basic"
            label="Project Manager Experience"
            variant="standard"
            name="projectmanagerexperience"
            value={values.projectmanagerexperience}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Database Admin Experience"
            variant="standard"
            name="databaseadminexperience"
            value={values.databaseadminexperience}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Coordinator Experience"
            variant="standard"
            name="coordinatorexperience"
            value={values.coordinatorexperience}
            onChange={handleChange}
          />
          <br />
          <Divider />
          <br />
          <Typography variant="body1" component="div">
            Financial Details
          </Typography>
          <TextField
            id="standard-basic"
            label="Total Cost"
            variant="standard"
            name="totalcost"
            value={values.totalcost}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Duration"
            variant="standard"
            name="duration"
            value={values.duration}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Quality"
            variant="standard"
            name="quality"
            value={values.quality}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Usability"
            variant="standard"
            name="usability"
            value={values.usability}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="durability"
            variant="standard"
            name="durability"
            value={values.durability}
            onChange={handleChange}
          />
          <br />
          <Divider />
          <br />
          <Typography variant="body1" component="div">
            Your Previous Record
          </Typography>

          <TextField
            id="standard-basic"
            label="Previous Record"
            variant="standard"
            name=""
            onChange={handleChange}
          />

          <br />
          <Button variant="contained" onClick={handleSubmit}>
            Publish
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default ProponentForm;
