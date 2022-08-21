import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Grid } from "@mui/material";
import AdminContext from "../context/AdminContext";
import Admin from "../pages/Admin";
import AdminListViewCard from "./AdminListViewCard";

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
        // console.log(
        //   "🚀 ~ file: AdminListView.jsx ~ line 32 ~ data.then ~ response",
        //   response.map(
        //     (item) =>
        //       item.tenderId === tenderID && handleUserDetails(item.proponentId)
        //   )
        // );
        // handleUserDetails
      });
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.error(err);
    }
  };

  // const handleUserDetails = async (proponentID) => {
  //   try {
  //     const userData = await fetch(`/API/userdetails/${proponentID}`, {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       credentials: "include",
  //     });
  //     const data = userData.json();
  //     data.then(async (response) => {
  //       setUserDetails((prev) => [...prev, response]);
  //       console.log(response);
  //     });
  //     if (!userData.status === 200) {
  //       const error = new Error(userData.error);
  //       throw error;
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  useEffect(() => {
    handleProponents();
  }, []);

  const { selectedProposals, setSelectedProposals } = useContext(AdminContext);
  // const [userDetails, setUserDetails] = React.useState([]);

  // useEffect(() => {
  //   console.log("udts: ", userDetails);
  // }, [userDetails]);

  // useEffect(() => {
  //   console.log("pvalues: ", proponentValues);
  // }, [proponentValues]);

  return (
    <>
      <Admin>
        <Link
          to={`/admin/analytics/${tenderID}`}
          style={{ textDecoration: "none" }}
        >
          <Button variant="contained">Analytics of tender {tenderID}</Button>
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

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={3}
          rowSpacing={5}
          style={{ padding: "1rem" }}
        >
          {proponentValues.map(
            (proponentValue) =>
              proponentValue.tenderId === tenderID && (
                <Grid item xs={12} md={4} lg={3}>
                  <AdminListViewCard />
                </Grid>
              )
          )}
        </Grid>

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
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
      </Admin>
    </>
  );
};

export default AdminListView;
