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

//

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
            <ul>
              <li>{firstProposal.proponentId}</li>
              <li
                style={{
                  backgroundColor:
                    firstProposal.generalexperience >
                    secondProposal.generalexperience
                      ? "#4caf50"
                      : "",
                }}
              >
                {firstProposal.generalexperience}
              </li>
              <li
                style={{
                  backgroundColor:
                    firstProposal.sportsspecificexperience >
                    secondProposal.sportsspecificexperience
                      ? "#4caf50"
                      : "",
                }}
              >
                {firstProposal.sportsspecificexperience}
              </li>
              <li
                style={{
                  backgroundColor:
                    firstProposal.coordinatorexperience >
                    secondProposal.coordinatorexperience
                      ? "#4caf50"
                      : "",
                }}
              >
                {firstProposal.coordinatorexperience}
              </li>
              <li
                style={{
                  backgroundColor:
                    firstProposal.databaseadminexperience >
                    secondProposal.databaseadminexperience
                      ? "#4caf50"
                      : "",
                }}
              >
                {firstProposal.databaseadminexperience}
              </li>
              <li
                style={{
                  backgroundColor:
                    firstProposal.durability > secondProposal.durability
                      ? "#4caf50"
                      : "",
                }}
              >
                {firstProposal.durability}
              </li>
              <li
                style={{
                  backgroundColor:
                    firstProposal.duration < secondProposal.duration
                      ? "#4caf50"
                      : "",
                }}
              >
                {firstProposal.duration}
              </li>
              {/* <li>{firstProposal.quality}</li> */}
              <li
                style={{
                  backgroundColor:
                    firstProposal.totalcost < secondProposal.totalcost
                      ? "#4caf50"
                      : "",
                }}
              >
                {firstProposal.totalcost}
              </li>
              {firstProposal.turnover && <li>{firstProposal.turnover}</li>}
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
              <li>General Experience (yrs)</li>
              <li>Sport Specific Experience (yrs)</li>
              <li>Coordinator Experience (yrs)</li>
              <li>Database Admin Experience (yrs)</li>
              <li>Warranty (yrs)</li>
              {/* durability */}
              <li>Delivery Time (weeks)</li>
              {/* <li>Quality</li> */}
              <li>Total Cost (₹)</li>
              {firstProposal.turnover && <li>Turnover</li>}
            </ul>
          </Grid>
          <Grid item md={4} lg={3}>
            <ul>
              <li>{secondProposal.proponentId}</li>
              <li
                style={{
                  backgroundColor:
                    secondProposal.generalexperience >
                    firstProposal.generalexperience
                      ? "#4caf50"
                      : "",
                }}
              >
                {secondProposal.generalexperience}
              </li>
              <li
                style={{
                  backgroundColor:
                    secondProposal.sportsspecificexperience >
                    firstProposal.sportsspecificexperience
                      ? "#4caf50"
                      : "",
                }}
              >
                {secondProposal.sportsspecificexperience}
              </li>
              <li
                style={{
                  backgroundColor:
                    secondProposal.coordinatorexperience >
                    firstProposal.coordinatorexperience
                      ? "#4caf50"
                      : "",
                }}
              >
                {secondProposal.coordinatorexperience}
              </li>
              <li
                style={{
                  backgroundColor:
                    secondProposal.databaseadminexperience >
                    firstProposal.databaseadminexperience
                      ? "#4caf50"
                      : "",
                }}
              >
                {secondProposal.databaseadminexperience}
              </li>
              <li
                style={{
                  backgroundColor:
                    secondProposal.durability > firstProposal.durability
                      ? "#4caf50"
                      : "",
                }}
              >
                {secondProposal.durability}
              </li>
              <li
                style={{
                  backgroundColor:
                    secondProposal.duration < firstProposal.duration
                      ? "#2e7d32"
                      : "",
                }}
              >
                {secondProposal.duration}
              </li>
              {/* <li>{secondProposal.quality}</li> */}
              <li
                style={{
                  backgroundColor:
                    secondProposal.total < firstProposal.total ? "#2e7d32" : "",
                }}
              >
                {secondProposal.totalcost}
              </li>
              {secondProposal.turnover && <li>{secondProposal.turnover}</li>}
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Admin>
  );
};

export default AdminCompareView;
