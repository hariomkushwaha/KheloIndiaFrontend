import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Link,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

import PhotoCamera from "@mui/icons-material/PhotoCamera";

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
    deliveryPeriod: "",
    quality: "",
    turnOver: "",
    durability: "",
    status: "pending",
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
      deliveryPeriod,
      totalcost,
      duration,
      quality,
      turnOver,
      durability,
      status,
    } = values;

    const res = await fetch("/API/proponentform", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tenderId,
        proponentId,
        generalexperience,
        sportsspecificexperience,
        deliveryPeriod,
        projectmanagerexperience,
        databaseadminexperience,
        coordinatorexperience,
        totalcost,
        duration,
        quality,
        turnOver,
        durability,
        status,
      }),
    });

    const data = await res.json();

    if (res.status !== 201 || !data) {
      console.log(data.error);
      window.alert("Invalid Submission");
    } else {
      window.alert("Posted Successfully");
      navigate("/get-started");
    }
    console.log(values);
  };

  const [file, setFile] = useState();

  const handleUpload = (e) => {
    console.log(e.target.value);
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
          <Select
            labelId="simple-select-standard-label"
            id="simple-select-standard"
            name="tenderCategory"
            value={values.tenderCategory}
            onChange={handleChange}
            placeholder="Select Tender Type"
            label="Tender Category"
            style={{ margin: "1rem 0px" }}
            variant="standard"
          >
            <MenuItem value={"management"}>Management</MenuItem>
            <MenuItem value={"equipment"}>Equipment</MenuItem>
          </Select>
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
          {values.tenderCategory !== "equipment" && (
            <>
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
            </>
          )}

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
            label="Turn Over (of last 5 months)"
            variant="standard"
            name="turnOver"
            value={values.turnOver}
            onChange={handleChange}
          />
          {values.tenderCategory === "equipment" ? (
            <>
              <TextField
                id="standard-basic"
                label="Delivery Period"
                variant="standard"
                name="deliveryPeriod"
                value={values.deliveryPeriod}
                onChange={handleChange}
              />
              <TextField
                id="standard-basic"
                label="Warranty"
                variant="standard"
                name="warranty"
                value={values.warranty}
                onChange={handleChange}
              />
              <br></br>
              <Typography variant="body1">
                Manufacturer's Authorization Form
              </Typography>
              <Stack direction="row" alignItems="center" spacing={2}>
                <IconButton aria-label="upload picture" component="label">
                  <input
                    hidden
                    type="file"
                    onChange={(e) => {
                      console.log(e.target.files[0]);
                      setFile(e.target.files[0]);
                    }}
                  />
                  <PhotoCamera />
                </IconButton>
                <Button onClick={handleUpload}>Upload Document</Button>
              </Stack>

              <br></br>
              <Typography variant="body1">Bid Submission Form</Typography>
              <Stack direction="row" alignItems="center" spacing={2}>
                <IconButton aria-label="upload picture" component="label">
                  <input
                    hidden
                    type="file"
                    onChange={(e) => {
                      console.log(e.target.files[0]);
                      setFile(e.target.files[0]);
                    }}
                  />
                  <PhotoCamera />
                </IconButton>
                <Button onClick={handleUpload}>Upload Document</Button>
              </Stack>

              <br></br>
              <Typography variant="body1">Price Schedule</Typography>
              <Stack direction="row" alignItems="center" spacing={2}>
                <IconButton aria-label="upload picture" component="label">
                  <input
                    hidden
                    type="file"
                    onChange={(e) => {
                      console.log(e.target.files[0]);
                      setFile(e.target.files[0]);
                    }}
                  />
                  <PhotoCamera />
                </IconButton>
                <Button onClick={handleUpload}>Upload Document</Button>
              </Stack>
              <br></br>
              <Typography variant="body1">
                Bid Securing Declaration Form
              </Typography>
              <Stack direction="row" alignItems="center" spacing={2}>
                <IconButton aria-label="upload picture" component="label">
                  <input
                    hidden
                    type="file"
                    onChange={(e) => {
                      console.log(e.target.files[0]);
                      setFile(e.target.files[0]);
                    }}
                  />
                  <PhotoCamera />
                </IconButton>
                <Button onClick={handleUpload}>Upload Document</Button>
              </Stack>
              <br></br>
              <Typography variant="body1">Contract Form for Supply</Typography>
              <Stack direction="row" alignItems="center" spacing={2}>
                <IconButton aria-label="upload picture" component="label">
                  <input
                    hidden
                    type="file"
                    onChange={(e) => {
                      console.log(e.target.files[0]);
                      setFile(e.target.files[0]);
                    }}
                  />
                  <PhotoCamera />
                </IconButton>
                <Button onClick={handleUpload}>Upload Document</Button>
              </Stack>
            </>
          ) : (
            <>
              <TextField
                id="standard-basic"
                label="Companies"
                variant="standard"
                name="companies"
                value={values.companies}
                onChange={handleChange}
              />
              <br></br>
              <Typography variant="body1">Authorized Signatory</Typography>
              <Stack direction="row" alignItems="center" spacing={2}>
                <IconButton aria-label="upload picture" component="label">
                  <input
                    hidden
                    type="file"
                    onChange={(e) => {
                      console.log(e.target.files[0]);
                      setFile(e.target.files[0]);
                    }}
                  />
                  <PhotoCamera />
                </IconButton>
                <Button onClick={handleUpload}>Upload Document</Button>
              </Stack>
              <br></br>
              <Typography variant="body1">Bid Security Form</Typography>
              <Stack direction="row" alignItems="center" spacing={2}>
                <IconButton aria-label="upload picture" component="label">
                  <input
                    hidden
                    type="file"
                    onChange={(e) => {
                      console.log(e.target.files[0]);
                      setFile(e.target.files[0]);
                    }}
                  />
                  <PhotoCamera />
                </IconButton>
                <Button onClick={handleUpload}>Upload Document</Button>
              </Stack>
              <TextField
                id="standard-basic"
                label="Deadline"
                variant="standard"
                name="deadline"
                value={values.deadline}
                onChange={handleChange}
              />
              <TextField
                id="standard-basic"
                label="Location"
                variant="standard"
                name="location"
                value={values.location}
                onChange={handleChange}
              />
            </>
          )}
          {/* <TextField
            id="standard-basic"
            label="Quality"
            variant="standard"
            name="quality"
            value={values.quality}
            onChange={handleChange}
          /> */}

          <br />
          <Typography variant="body1">Previous Record</Typography>
          <Stack direction="row" alignItems="center" spacing={2}>
            <IconButton aria-label="upload picture" component="label">
              <input
                hidden
                type="file"
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  setFile(e.target.files[0]);
                }}
              />
              <PhotoCamera />
            </IconButton>
            <Button onClick={handleUpload}>Upload Document</Button>
          </Stack>

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
