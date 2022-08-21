

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useContext } from "react";
import AdminContext from "../context/AdminContext";
import Admin from "../pages/Admin";
import { Container } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: "lavender",
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const AdminCompareView = () => { 
  const { selectedProposals } = useContext(AdminContext);

  const firstProposal = selectedProposals[0];
  const secondProposal = selectedProposals[1];


  return (
    <Admin>
    <Container>
      <br/>
      <br/>
      <br/>
    <TableContainer sx={{ borderRadius: "20px" }}>
      <Table sx={{ minWidth: 700}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell><b>Proponent ID</b></StyledTableCell>
            <StyledTableCell align="right" style={{borderRight: '4px solid black', height:'40%'}}><b>{firstProposal.proponentId}</b></StyledTableCell>
            <StyledTableCell align="right"><b>{secondProposal.proponentId}</b></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">General Experience</StyledTableCell>
                <StyledTableCell align="right" style={{borderRight: '4px solid black', height:'40%'}}> {firstProposal.generalexperience}</StyledTableCell>
                <StyledTableCell align="right"> {secondProposal.generalexperience}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">Sport Specific Experience</StyledTableCell>
                <StyledTableCell align="right" style={{borderRight: '4px solid black', height:'40%'}}> {firstProposal.sportsspecificexperience}</StyledTableCell>
                <StyledTableCell align="right"> {secondProposal.sportsspecificexperience}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">Coordinator Experience</StyledTableCell>
                <StyledTableCell align="right" style={{borderRight: '4px solid black', height:'40%'}}> {firstProposal.coordinatorexperience}</StyledTableCell>
                <StyledTableCell align="right"> {secondProposal.coordinatorexperience}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">Database Admin Experience</StyledTableCell>
                <StyledTableCell align="right" style={{borderRight: '4px solid black', height:'40%'}}> {firstProposal.databaseadminexperience}</StyledTableCell>
                <StyledTableCell align="right"> {secondProposal.databaseadminexperience}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">Durability</StyledTableCell>
                <StyledTableCell align="right" style={{borderRight: '4px solid black', height:'40%'}}> {firstProposal.durability}</StyledTableCell>
                <StyledTableCell align="right"> {secondProposal.durability}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">Duration</StyledTableCell>
                <StyledTableCell align="right" style={{borderRight: '4px solid black', height:'40%'}}> {firstProposal.duration}</StyledTableCell>
                <StyledTableCell align="right"> {secondProposal.duration}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">Quality</StyledTableCell>
                <StyledTableCell align="right" style={{borderRight: '4px solid black', height:'40%'}}> {firstProposal.quality}</StyledTableCell>
                <StyledTableCell align="right"> {secondProposal.quality}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">Total Cost</StyledTableCell>
                <StyledTableCell align="right" style={{borderRight: '4px solid black', height:'40%'}}> {firstProposal.totalcost}</StyledTableCell>
                <StyledTableCell align="right"> {secondProposal.totalcost}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    </Admin>
  );
}

export default AdminCompareView;


