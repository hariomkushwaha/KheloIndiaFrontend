/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
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
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
} from "@mui/material";
import React from "react";
import ProponentNavbar from "../components/ProponentNavbar";
import { useParams } from "react-router-dom";
// import "../components/test.css";
import PinDropIcon from "@mui/icons-material/PinDrop";
import EmailIcon from "@mui/icons-material/Email";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VerifiedIcon from "@mui/icons-material/Verified";
import { red, amber, green } from "@mui/material/colors";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CancelIcon from "@mui/icons-material/Cancel";
import DoneAllIcon from "@mui/icons-material/DoneAll";

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
      <Box
        m={3}
        mt={10}
        style={{
          boxShadow: "5px 5px 20px rgba(0,0,0,0.25)",
          border: "1px solid #eee",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <img
              src="https://i.pinimg.com/736x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg"
              alt="SomeWeirdo"
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "400px",
                maxWidth: "400px",
              }}
            />
          </Grid>
          <Grid item xs={9} p={3} m={"auto"}>
            <Box p={2}>
              <Typography variant="h4">
                {userDetails.fullname}
                &nbsp;
                <Typography as={"span"} variant="button">
                  ({userDetails.proponentID})
                </Typography>
                &nbsp;
                <VerifiedIcon color="success" />
              </Typography>
              <br />
              <Grid container rowSpacing={5}>
                <Grid item xs={4}>
                  <EmailIcon sx={{ color: amber[700] }} />
                </Grid>
                <Grid item xs={4}>
                  <PinDropIcon sx={{ color: red[500] }} />
                </Grid>
              </Grid>
              <Grid container rowSpacing={5}>
                <Grid item xs={4}>
                  <Typography as={Link} underline="none" variant="body1">
                    {userDetails.email}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body1">{userDetails.state}</Typography>
                </Grid>
              </Grid>
            </Box>
            <br />
            <Divider />
            <br />
            <Grid container rowSpacing={5}>
              <Grid item xs={3}>
                <Typography variant="h6">Organisation</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6">Full Address</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h6">Pin Code</Typography>
              </Grid>
            </Grid>
            <Grid container rowSpacing={5}>
              <Grid item xs={3}>
                <Typography variant="body2">
                  {userDetails.organization}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body2">
                  {userDetails.fulladdress}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body2">{userDetails.pincode}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box
        elevation={3}
        m={3}
        mt={10}
        style={{
          boxShadow: "5px 5px 20px rgba(0,0,0,0.25)",
          border: "1px solid #eee",
        }}
        p={2}
      >
        <Grid container spacing={2} rowSpacing={5}>
          <Grid item xs={12} p={2}>
            <Typography variant="h6">Submitted Proposals</Typography>
            <br />
            <Divider />
          </Grid>
          <Grid item xs={12}>
            {loading ? (
              <Skeleton variant="rectangular" />
            ) : (
              userTenders.map((userTender) => (
                <Accordion key={userTender.tenderId}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={5}>
                        <Typography variant="h6">
                          Tender ID: {userTender.tenderId}
                        </Typography>
                      </Grid>
                      <Grid item xs={5}>
                        <Typography variant="body1">
                          <b>Cost:</b> {userTender.totalcost}
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <IconButton>
                          {userTender.status === "pending" ? (
                            <PendingActionsIcon sx={{ color: amber["700"] }} />
                          ) : userTender.status === "accepted" ? (
                            <DoneAllIcon sx={{ color: green["600"] }} />
                          ) : (
                            <CancelIcon  sx={{ color: red["600"] }}/>
                          )}
                        </IconButton>
                      </Grid>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Typography
                          variant="button"
                          style={{ color: "#616161" }}
                        >
                          General Experience
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body1">
                          {userTender.generalexperience} years
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography
                          variant="button"
                          style={{ color: "#616161" }}
                        >
                          Sports Specific Experience
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography
                          variant="button"
                          style={{ color: "#616161" }}
                        >
                          Project Manager Experience
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body1">
                          {userTender.sportsspecificexperience} years
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body1">
                          {userTender.projectmanagerexperience} years
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography
                          variant="button"
                          style={{ color: "#616161" }}
                        >
                          Database Admin Experience
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography
                          variant="button"
                          style={{ color: "#616161" }}
                        >
                          Co-ordinator Experience
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body1">
                          {userTender.databaseadminexperience} years
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body1">
                          {userTender.coordinatorexperience} years
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          variant="button"
                          style={{ color: "#616161" }}
                        >
                          Duration
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body1">
                          {userTender.duration} months
                        </Typography>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              ))
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Proponent;
