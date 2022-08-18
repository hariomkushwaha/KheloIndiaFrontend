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

  // console.log("firstProposal:", firstProposal);

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
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>Proponent ID</TableCell>
                <TableCell component="th" scope="row">
                  {firstProposal.proponentId}
                </TableCell>
                <TableCell component="th" scope="row">
                  {secondProposal.proponentId}
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>General Experience</TableCell>
                <TableCell component="th" scope="row">
                  {firstProposal.generalexperience}
                </TableCell>
                <TableCell component="th" scope="row">
                  {secondProposal.generalexperience}
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>Sport Specific Experience</TableCell>

                <TableCell component="th" scope="row">
                  {firstProposal.sportsspecificexperience}
                </TableCell>
                <TableCell component="th" scope="row">
                  {secondProposal.sportsspecificexperience}
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>Coordinator Experience</TableCell>
                <TableCell component="th" scope="row">
                  {firstProposal.coordinatorexperience}
                </TableCell>
                <TableCell component="th" scope="row">
                  {secondProposal.coordinatorexperience}
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>Database Admin Experience</TableCell>
                <TableCell component="th" scope="row">
                  {firstProposal.databaseadminexperience}
                </TableCell>
                <TableCell component="th" scope="row">
                  {secondProposal.databaseadminexperience}
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>Durability</TableCell>
                <TableCell component="th" scope="row">
                  {firstProposal.durability}
                </TableCell>
                <TableCell component="th" scope="row">
                  {secondProposal.durability}
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>Duration</TableCell>
                <TableCell component="th" scope="row">
                  {firstProposal.duration}
                </TableCell>
                <TableCell component="th" scope="row">
                  {secondProposal.duration}
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>Quality</TableCell>
                <TableCell component="th" scope="row">
                  {firstProposal.quality}
                </TableCell>
                <TableCell component="th" scope="row">
                  {secondProposal.quality}
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>Total Cost</TableCell>
                <TableCell component="th" scope="row">
                  {firstProposal.totalcost}
                </TableCell>
                <TableCell component="th" scope="row">
                  {secondProposal.totalcost}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Admin>
    </>
  );
};

export default AdminCompareView;
