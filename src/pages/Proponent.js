import { Divider, Grid, Paper, Table, Typography } from "@mui/material";
import React from "react";
import ProponentNavbar from "../components/ProponentNavbar";
import { useParams } from "react-router-dom";

const Proponent = () => {
  const { proponentID } = useParams();
  //   console.log(proponentID);

  const [userDetails, setUserDetails] = React.useState({});

  const handleUserDetails = async () => {
    try {
      const res = await fetch(`/API/userdetails/${proponentID}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = res.json();
      data.then(async (response) => {
        setUserDetails(response);
      });
      console.log(userDetails);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    handleUserDetails();
  }, []);

  return (
    <>
      <ProponentNavbar proponentID={proponentID} />
      <Paper elevation={3} sx={{ m: 3, p: 3 }}>
        <Grid container spacing={2} rowSpacing={5}>
          <Grid item xs={1}></Grid>
          <Grid
            item
            xs={8}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="h3" component="h1">
              {userDetails.fullname}
            </Typography>
            <br />
            <Typography variant="h5" component="h1" style={{ color: "grey" }}>
              {userDetails.proponentID}
            </Typography>
            <br />
            <Divider />
            <br />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <div style={{ width: "auto" }}>
              <img
                src="https://www.askideas.com/media/36/Weird-Looking-Baby-Face-Funny-Image.jpg"
                alt="SomeWeirdo"
                style={{ width: "100%" }}
              />
            </div>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={11}>
            <Table>
              <Typography variant="h5" component="h1">
                Organisation: {userDetails.organization}
              </Typography>
              <Typography variant="h5" component="h1">
                Address: {userDetails.fulladdress}
              </Typography>
              <Typography variant="h5" component="h1">
                State: {userDetails.state}
              </Typography>
              <Typography variant="h5" component="h1">
                Pincode: {userDetails.pincode}
              </Typography>
              <Typography variant="h5" component="h1">
                Email: {userDetails.email}
              </Typography>
              <Typography variant="h5" component="h1">
                Password: {userDetails.password}
              </Typography>
            </Table>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Proponent;
