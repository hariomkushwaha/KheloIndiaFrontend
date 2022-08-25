/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useContext } from "react";
import AdminContext from "../context/AdminContext";
import Admin from "../pages/Admin";
import { Box, Container, Divider, Grid, Link, Typography } from "@mui/material";
import "./CompareView.css";
import PinDropIcon from "@mui/icons-material/PinDrop";
import EmailIcon from "@mui/icons-material/Email";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VerifiedIcon from "@mui/icons-material/Verified";
import { amber, red } from "@mui/material/colors";
import ProponentPersonalDetailsCard from "./ProponentPersonalDetailsCard";

const AdminCompareView = () => {
  const { selectedProposals } = useContext(AdminContext);

  const firstProposal = selectedProposals[0];
  const secondProposal = selectedProposals[1];
  const [firstUserDetails, setFirstUserDetails] = useState({});
  const [secondUserDetails, setSecondUserDetails] = useState({});

  const handleFirstUserDetails = async (proponentId) => {
    try {
      const userData = await fetch(`/API/userdetails/${proponentId}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = userData.json();
      data.then(async (response) => {
        setFirstUserDetails(response);
      });
      if (!userData.status === 200) {
        const error = new Error(userData.error);
        throw error;
      }
    } catch (err) {
      console.error(err);
    }
  };
  const handleSecondUserDetails = async (proponentId) => {
    try {
      const userData = await fetch(`/API/userdetails/${proponentId}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = userData.json();
      data.then(async (response) => {
        setSecondUserDetails(response);
      });
      if (!userData.status === 200) {
        const error = new Error(userData.error);
        throw error;
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleFirstUserDetails(firstProposal.proponentId);
  }, [firstProposal]);

  // useEffect(() => {
  //   console.log("fist user ", firstUserDetails);
  // }, [firstUserDetails]);

  useEffect(() => {
    handleSecondUserDetails(secondProposal.proponentId);
  }, [secondProposal]);

  return (
    <Admin>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6} lg={6}>
            <ProponentPersonalDetailsCard userDetails={firstUserDetails} />
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <ProponentPersonalDetailsCard userDetails={secondUserDetails} />
          </Grid>
        </Grid>
        <br></br>
        <br></br>
        <br></br>
        <Grid container>
          <Grid item md={4} lg={3}>
            <ul style={{}}>
              <li>{firstProposal.proponentId}</li>
              <li>{firstProposal.generalexperience}</li>
              <li>{firstProposal.sportsspecificexperience}</li>
              <li>{firstProposal.coordinatorexperience}</li>
              <li>{firstProposal.databaseadminexperience}</li>
              <li>{firstProposal.durability}</li>
              <li>{firstProposal.duration}</li>
              <li>{firstProposal.quality}</li>
              <li>{firstProposal.totalcost}</li>
            </ul>
          </Grid>
          <Grid item md={4} lg={6}>
            <ul
              style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                borderLeft: "1px solid lightgrey",
                borderRight: "1px solid lightgrey",
              }}
            >
              <li>Proponent Id</li>
              <li>General Experience</li>
              <li>Sport Specific Experience</li>
              <li>Coordinator Experience</li>
              <li>Database Admin Experience</li>
              <li>Durability</li>
              <li>Duration</li>
              <li>Quality</li>
              <li>Total Cost</li>
            </ul>
          </Grid>
          <Grid item md={4} lg={3}>
            <ul>
              <li>{secondProposal.proponentId}</li>
              <li>{secondProposal.generalexperience}</li>
              <li>{secondProposal.sportsspecificexperience}</li>
              <li>{secondProposal.coordinatorexperience}</li>
              <li>{secondProposal.databaseadminexperience}</li>
              <li>{secondProposal.durability}</li>
              <li>{secondProposal.duration}</li>
              <li>{secondProposal.quality}</li>
              <li>{secondProposal.totalcost}</li>
            </ul>
          </Grid>
        </Grid>
        {/* <TableContainer sx={{ borderRadius: "20px" }}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>
                  <b>Proponent ID</b>
                </StyledTableCell>
                <StyledTableCell
                  align="right"
                  style={{ borderRight: "4px solid black", height: "40%" }}
                >
                  <b>{firstProposal.proponentId}</b>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <b>{secondProposal.proponentId}</b>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  General Experience
                </StyledTableCell>
                <StyledTableCell
                  align="right"
                  style={{ borderRight: "4px solid black", height: "40%" }}
                >
                  {" "}
                  {firstProposal.generalexperience}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {" "}
                  {secondProposal.generalexperience}
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  Sport Specific Experience
                </StyledTableCell>
                <StyledTableCell
                  align="right"
                  style={{ borderRight: "4px solid black", height: "40%" }}
                >
                  {" "}
                  {firstProposal.sportsspecificexperience}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {" "}
                  {secondProposal.sportsspecificexperience}
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  Coordinator Experience
                </StyledTableCell>
                <StyledTableCell
                  align="right"
                  style={{ borderRight: "4px solid black", height: "40%" }}
                >
                  {" "}
                  {firstProposal.coordinatorexperience}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {" "}
                  {secondProposal.coordinatorexperience}
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  Database Admin Experience
                </StyledTableCell>
                <StyledTableCell
                  align="right"
                  style={{ borderRight: "4px solid black", height: "40%" }}
                >
                  {" "}
                  {firstProposal.databaseadminexperience}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {" "}
                  {secondProposal.databaseadminexperience}
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  Durability
                </StyledTableCell>
                <StyledTableCell
                  align="right"
                  style={{ borderRight: "4px solid black", height: "40%" }}
                >
                  {" "}
                  {firstProposal.durability}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {" "}
                  {secondProposal.durability}
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  Duration
                </StyledTableCell>
                <StyledTableCell
                  align="right"
                  style={{ borderRight: "4px solid black", height: "40%" }}
                >
                  {" "}
                  {firstProposal.duration}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {" "}
                  {secondProposal.duration}
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  Quality
                </StyledTableCell>
                <StyledTableCell
                  align="right"
                  style={{ borderRight: "4px solid black", height: "40%" }}
                >
                  {" "}
                  {firstProposal.quality}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {" "}
                  {secondProposal.quality}
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  Total Cost
                </StyledTableCell>
                <StyledTableCell
                  align="right"
                  style={{ borderRight: "4px solid black", height: "40%" }}
                >
                  {" "}
                  {firstProposal.totalcost}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {" "}
                  {secondProposal.totalcost}
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer> */}
      </Container>
    </Admin>
  );
};

export default AdminCompareView;
