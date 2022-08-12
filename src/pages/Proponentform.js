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

const TenderForm = () => {
  const initialValues = {
    fullname: "",
    orgname: "",
    email: "",
    fulladdress: "",
    state: "",
    postalcode: "",
    generalexperience: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <Typography variant="body1" component="div">
            Basic Details
          </Typography>
          <br />
          <TextField
            name="fullname"
            value={values.fullname}
            onChange={handleChange}
            id="standard-basic"
            label="Full Name"
            variant="standard"
          />
          <TextField
            name="orgname"
            value={values.orgname}
            onChange={handleChange}
            id="standard-basic"
            label="Organization Name"
            variant="standard"
          />
          <TextField
            name="email"
            value={values.email}
            onChange={handleChange}
            id="standard-basic"
            label="Email Address"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="Full Address"
            variant="standard"
            name="fulladdress"
            value={values.fulladdress}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="State/Province/Region"
            variant="standard"
            name="state"
            value={values.state}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Zip / Postal Code"
            variant="standard"
            name="postalcode"
            value={values.postalcode}
            onChange={handleChange}
          />

          <br />
          <Divider />
          <br />
          <Typography variant="body1" component="div">
            Service Details
          </Typography>
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
            name="oordinatorexperience"
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
