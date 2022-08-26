/* eslint-disable array-callback-return */
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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RecomCard from "./RecommendedCard";

const AdminListView = () => {
  const { tenderID } = useParams();
  const [proponentValues, setProponentValues] = useState([]);
  const [newProponentValues, setNewProponentValues] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedProposalValue, setSelectedProposalValue] = useState("");

  const [quality, setQuality] = useState(1);
  const [durability, setDurability] = useState(1);
  const [usability, setUsability] = useState(1);
  const [duration, setDuration] = useState(1);

  const [loading, setLoading] = useState(false);

  const { selectedProposals, setSelectedProposals } = useContext(AdminContext);
  const drawerWidth = 240;

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

  const createNewFieldValues = () => {
    if (proponentValues.length > 0) {
      let tempArr = [];
      proponentValues.map((item) => {
        let tempItem = item;
        // console.log("item", item);
        tempItem.durability *= durability;
        tempItem.quality *= quality;
        tempItem.usability *= usability;
        tempArr.push(tempItem);
      });
      console.log("propValues: ", proponentValues);
      console.log("tempArr: ", tempArr);
      setNewProponentValues(tempArr);
    }
  };

  const handleFilterChange = async () => {
    createNewFieldValues();
    try {
      const res = await fetch("/API/listview", {
        method: "POST",
        headers: {
          // Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProponentValues),
      });
      const data = await res.json();
      setFilteredData(data);
      setLoading(true);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleProponents();
  }, []);

  useEffect(() => {
    handleFilterChange();
  }, [usability, durability, duration, quality]);
  return (
    <>
      <Admin>
        <Box sx={{ display: "flex" }}>
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
          >
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
            {/* <RecomCard values={proponentValues[0]} /> */}
            {
            // filteredData.length > 0
            //   ? 
              filteredData.map(
                (item, index) =>
                  item.data.tenderId === tenderID && (
                    <Grid item xs={12} md={4} lg={3} key={index}>
                      {console.log("hello", filteredData)}
                      <>
                        <AdminListViewCard
                          values={item.data}
                          selectedProposalValue={selectedProposalValue}
                          setSelectedProposalValue={setSelectedProposalValue}
                        />
                      </>
                    </Grid>
                  )
              )
              // : 
              // proponentValues.map(
              //   (proponentValue, index) =>
              //     proponentValue.tenderId === tenderID && (
              //       <Grid item xs={12} md={4} lg={3} key={index}>
              //         <>
              //           <AdminListViewCard
              //             values={proponentValue}
              //             selectedProposalValue={selectedProposalValue}
              //             setSelectedProposalValue={setSelectedProposalValue}
              //           />
              //         </>
              //       </Grid>
              //     )
              // )
              }
            {/* </Grid> */}
          </Box>
          <Box
            p={2}
            style={{
              fontFamily: "sans-serif",
              width: "20vw",
              minHeight: "100vh",
              zIndex: "100",
              boxShadow: "1px 1px 3px grey",
              position: "sticky",
              top: "0",
            }}
          >
            <Typography variant="h5" style={{ textTransform: "uppercase" }}>
              Filter
            </Typography>
            <Divider />
            <br />
            <br />
            <br />
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <FormLabel id="demo-radio-buttons-group-label">
                  Durability
                </FormLabel>
              </AccordionSummary>
              <AccordionDetails>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Moderate"
                  name="radio-buttons-group"
                  onChange={(e) => {
                    setDurability(e.target.value);
                  }}
                >
                  <FormControlLabel
                    value={0.5}
                    control={<Radio />}
                    label="Low"
                  />
                  <FormControlLabel
                    value={1}
                    control={<Radio />}
                    label="Moderate"
                  />
                  <FormControlLabel
                    value={1.5}
                    control={<Radio />}
                    label="High"
                  />
                </RadioGroup>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <FormLabel id="demo-radio-buttons-group-label">
                  Quality
                </FormLabel>
              </AccordionSummary>
              <AccordionDetails>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  onChange={(e) => {
                    setQuality(e.target.value);

                  }}
                >
                  <FormControlLabel
                    value={0.5}
                    control={<Radio />}
                    label="Low"
                  />
                  <FormControlLabel
                    value={1}
                    control={<Radio />}
                    label="Moderate"
                  />
                  <FormControlLabel
                    value={1.5}
                    control={<Radio />}
                    label="High"
                  />
                </RadioGroup>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <FormLabel id="demo-radio-buttons-group-label">
                  Usability
                </FormLabel>
              </AccordionSummary>
              <AccordionDetails>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  onChange={(e) => {
                    setUsability(e.target.value);

                  }}
                >
                  <FormControlLabel
                    value={0.5}
                    control={<Radio />}
                    label="Low"
                  />
                  <FormControlLabel
                    value={1}
                    control={<Radio />}
                    label="Moderate"
                  />
                  <FormControlLabel
                    value={1.5}
                    control={<Radio />}
                    label="High"
                  />
                </RadioGroup>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <FormLabel id="demo-radio-buttons-group-label">
                  Duration
                </FormLabel>
              </AccordionSummary>
              <AccordionDetails>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  onChange={(e) => {
                    setDuration(e.target.value);

                  }}
                >
                  <FormControlLabel
                    value="lowDuration"
                    control={<Radio />}
                    label="Low"
                  />
                  <FormControlLabel
                    value="moderateDuration"
                    control={<Radio />}
                    label="Moderate"
                  />
                  <FormControlLabel
                    value="highDuration"
                    control={<Radio />}
                    label="High"
                  />
                </RadioGroup>
              </AccordionDetails>
            </Accordion>
            <Button variant="contained" style={{ marginTop: '5px' }}
            // onClick={}
            >Submit</Button>
          </Box>
        </Box>
      </Admin>
    </>
  );
};

export default AdminListView;
