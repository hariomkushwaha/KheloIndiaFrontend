import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import AdminContext from "../context/AdminContext";
import Admin from "../pages/Admin";
import CompareCard from "./CompareCard";

const AdminCompareView = () => {
  const { selectedProposals } = useContext(AdminContext);

  const firstProposal = selectedProposals[0];
  const secondProposal = selectedProposals[1];

  console.log("firstProposal:", firstProposal);

  return (
    <>
      <Admin>
        <TableContainer
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: "1rem",
            mb: "1rem",
            padding: "1rem",
          }}
        >
          <Table
            sx={{ width: "80vw" }}
            component={Paper}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Proponent ID</TableCell>
                <TableCell align="right">General Experience</TableCell>
                <TableCell align="right">Sport Specific Experience</TableCell>
                <TableCell align="right">Coordinator Experience</TableCell>
                <TableCell align="right">Database Admin Experience</TableCell>
                <TableCell align="right">Durability</TableCell>
                <TableCell align="right">Duration</TableCell>
                <TableCell align="right">Quality</TableCell>
                <TableCell align="right">Total Cost</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedProposals.map((proponentValue) => (
                <TableRow
                  key={proponentValue.proponentId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {proponentValue.proponentId}
                  </TableCell>
                  <TableCell align="right">
                    {proponentValue.generalexperience}
                  </TableCell>
                  <TableCell align="right">
                    {proponentValue.sportsspecificexperience}
                  </TableCell>
                  <TableCell align="right">
                    {proponentValue.coordinatorexperience}
                  </TableCell>
                  <TableCell align="right">
                    {proponentValue.databaseadminexperience}
                  </TableCell>
                  <TableCell align="right">
                    {proponentValue.durability}
                  </TableCell>
                  <TableCell align="right">{proponentValue.duration}</TableCell>
                  <TableCell align="right">{proponentValue.quality}</TableCell>
                  <TableCell align="right">
                    {proponentValue.totalcost}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={5}
            style={{ marginBottom: "1rem" }}
          >
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                Proponent Id: {firstProposal.proponentId}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                Proponent Id: {secondProposal.proponentId}
              </Typography>
            </Grid>
          </Grid>
          <CompareCard
            title="General Experience"
            firstData={firstProposal.generalexperience}
            secondData={secondProposal.generalexperience}
          />
          <CompareCard
            title="Sport Specific Experience"
            firstData={firstProposal.sportsspecificexperience}
            secondData={secondProposal.sportsspecificexperience}
          />
          <CompareCard
            title="Coordinator Experience"
            firstData={firstProposal.coordinatorexperience}
            secondData={secondProposal.coordinatorexperience}
          />
          <CompareCard
            title="Database Admin Experience"
            firstData={firstProposal.databaseadminexperience}
            secondData={secondProposal.databaseadminexperience}
          />
          <CompareCard
            title="Durability"
            firstData={firstProposal.durability}
            secondData={secondProposal.durability}
          />
          <CompareCard
            title="Duration"
            firstData={firstProposal.duration}
            secondData={secondProposal.duration}
          />
          <CompareCard
            title="Quality"
            firstData={firstProposal.quality}
            secondData={secondProposal.quality}
          />
          <CompareCard
            title="Total Cost"
            firstData={firstProposal.totalcost}
            secondData={secondProposal.totalcost}
          />
        </div> */}
      </Admin>
    </>
  );
};

export default AdminCompareView;
