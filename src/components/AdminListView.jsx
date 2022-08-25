/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import AdminContext from "../context/AdminContext";
import Admin from "../pages/Admin";
import AdminListViewCard from "./AdminListViewCard";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Card2 from "./adminTenderCards";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const AdminListView = () => {
  const { tenderID } = useParams();

  const [proponentValues, setProponentValues] = useState([]);
  const handleProponents = async () => {
    try {
      const res = await fetch("/API/proponentform", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = res.json();
      data.then((response) => {
        setProponentValues(response);
      });
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleProponents();
  }, []);

  const { selectedProposals, setSelectedProposals } = useContext(AdminContext);
  const drawerWidth = 240;

  return (
    <>
      <Admin>
        <Box sx={{ display: "flex" }}>
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
          // style={{ marginRight: '20vw' }}
          >
            <Link
              to={`/admin/analytics/${tenderID}`}
              style={{ textDecoration: "none" }}
            >
              <Button variant="contained">
                Analytics of tender {tenderID}
              </Button>
            </Link>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              {selectedProposals.length > 0 && <div>Selected Proposals: </div>}
              {selectedProposals.map((tender) => (
                <>
                  <div>{tender.proponentId}</div>
                </>
              ))}
              {selectedProposals.length === 2 && (
                <Link to="/admin/comparison" style={{ textDecoration: "none" }}>
                  <Button variant="contained">Compare Proposals</Button>
                </Link>
              )}
            </div>

            <>
              {/* {proponentValues.map((item) => handleUserDetails(item.proponentID))} */}
            </>

            {/* <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={3}
              rowSpacing={5}
              style={{ padding: "1rem" }}
            > */}
            {proponentValues.map(
              (proponentValue) =>
                proponentValue.tenderId === tenderID && (
                  <Grid item xs={12} md={4} lg={3}>
                    <>
                      <AdminListViewCard values={proponentValue} />
                      {/* <Card2
                        key={proponentValue.tenderId}
                        values={proponentValue}
                      /> */}
                    </>
                  </Grid>
                )
            )}
            {/* </Grid> */}

            <TableContainer
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: "15px",
                mb: "15px",
                padding: "10px",
              }}
            >
              <Table
                sx={{ width: "80vw" }}
                component={Paper}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Proponent ID</TableCell>
                    <TableCell align="right">General Experience</TableCell>
                    <TableCell align="right">Durability</TableCell>
                    <TableCell align="right">Quality</TableCell>
                    <TableCell align="right">Usability</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {proponentValues.map(
                    (proponentValue) =>
                      proponentValue.tenderId === tenderID && (
                        <TableRow
                          key={proponentValue.proponentId}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            <Button
                              onClick={() => {
                                setSelectedProposals((prevTender) => [
                                  ...prevTender,
                                  proponentValue,
                                ]);
                              }}
                            >
                              Add to Compare
                            </Button>
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {proponentValue.proponentId}
                          </TableCell>
                          <TableCell align="right">
                            {proponentValue.generalexperience}
                          </TableCell>
                          <TableCell align="right">
                            {proponentValue.durability}
                          </TableCell>
                          <TableCell align="right">
                            {proponentValue.quality}
                          </TableCell>
                          <TableCell align="right">
                            {proponentValue.usability}
                          </TableCell>
                        </TableRow>
                      )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box p={2} style={{ fontFamily: 'sans-serif', width: '20vw', minHeight: "100vh", zIndex: '100', boxShadow: '1px 1px 3px grey', position: 'sticky', top: '0' }}>
            <Typography variant="h5" style={{ textTransform: 'uppercase' }}>Filter</Typography>
            <Divider />
            <br />
            <br />
            <br />
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}  >
                  <FormLabel id="demo-radio-buttons-group-label">Durability</FormLabel>
                </AccordionSummary>
                <AccordionDetails>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="lowDurable" control={<Radio />} label="Low" />
                    <FormControlLabel value="moderateDurable" control={<Radio />} label="Moderate" />
                    <FormControlLabel value="highDurable" control={<Radio />} label="High" />
                  </RadioGroup>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}              >
                  <FormLabel id="demo-radio-buttons-group-label">Quality</FormLabel>
                </AccordionSummary>
                <AccordionDetails>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="lowQuality" control={<Radio />} label="Low" />
                    <FormControlLabel value="moderateQuality" control={<Radio />} label="Moderate" />
                    <FormControlLabel value="highQuality" control={<Radio />} label="High" />
                  </RadioGroup>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <FormLabel id="demo-radio-buttons-group-label">Usability</FormLabel>
                </AccordionSummary>
                <AccordionDetails>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="lowUsable" control={<Radio />} label="Low" />
                    <FormControlLabel value="moderateUsable" control={<Radio />} label="Moderate" />
                    <FormControlLabel value="highUsable" control={<Radio />} label="High" />
                  </RadioGroup>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <FormLabel id="demo-radio-buttons-group-label">Duration</FormLabel>
                </AccordionSummary>
                <AccordionDetails>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="lowDuration" control={<Radio />} label="Low" />
                    <FormControlLabel value="moderateDuration" control={<Radio />} label="Moderate" />
                    <FormControlLabel value="highDuration" control={<Radio />} label="High" />
                  </RadioGroup>
                </AccordionDetails>
              </Accordion>
          </Box>
        </Box>
      </Admin>
    </>
  );
};

export default AdminListView;
