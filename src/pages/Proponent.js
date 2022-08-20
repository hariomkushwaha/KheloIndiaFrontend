import {
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  Box,
  TableRow,
  Typography,
  Skeleton,
  IconButton,
} from "@mui/material";
import React from "react";
import ProponentNavbar from "../components/ProponentNavbar";
import { useParams } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ProponentCollapsibleTable from "../components/ProponentCollapsibleTable";

const Proponent = () => {
  const { proponentID } = useParams();

  const [loading, setLoading] = React.useState(true);
  const [userDetails, setUserDetails] = React.useState({});
  const [userTenders, setUserTenders] = React.useState({});
  const [tenderData, setTenderData] = React.useState({});

  const handleUserDetails = async () => {
    try {
      const userData = await fetch(`/API/userdetails/${proponentID}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = userData.json();
      data.then(async (response) => {
        setUserDetails(response);
        console.log(response);
      });
      if (!userData.status === 200) {
        const error = new Error(userData.error);
        throw error;
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleUserProposals = async () => {
    try {
      const userData = await fetch(`/API/proposalData/${proponentID}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = userData.json();
      data.then(async (response) => {
        setUserTenders(response);
        console.log(response);
        setLoading(false);
      });
      if (!userData.status === 200) {
        const error = new Error(userData.error);
        throw error;
      }
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    handleUserDetails();
    handleUserProposals();
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
            {/* <Table> */}
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
            {/* </Table> */}
          </Grid>
        </Grid>
      </Paper>
      {/* <Box sx={{ m: 3, p: 3 }}>
        <ProponentCollapsibleTable Data={userTenders}/>
      </Box> */}
      <Paper elevation={3} sx={{ m: 3, p: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Tender ID</TableCell>
              <TableCell>General Experience</TableCell>
              <TableCell>Sports Specific Experience</TableCell>
              <TableCell>Project Manager Experience</TableCell>
              <TableCell>Database Admin Experience</TableCell>
              <TableCell>Coordinator Experience</TableCell>
              <TableCell>Total Cost</TableCell>
              <TableCell>Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell><Skeleton variant="rectangular" /></TableCell>
              </TableRow>
            ) : (
              userTenders.map((userTender) => (
                <TableRow>
                  <TableCell>{userTender.tenderId}</TableCell>
                  <TableCell>{userTender.generalexperience}</TableCell>
                  <TableCell>{userTender.sportsspecificexperience}</TableCell>
                  <TableCell>{userTender.projectmanagerexperience}</TableCell>
                  <TableCell>{userTender.databaseadminexperience}</TableCell>
                  <TableCell>{userTender.coordinatorexperience}</TableCell>
                  <TableCell>{userTender.totalcost}</TableCell>
                  <TableCell>{userTender.duration}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
};

export default Proponent;
