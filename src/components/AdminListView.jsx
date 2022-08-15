import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import AdminContext from "../context/AdminContext";
import AdminCompareView from "./AdminCompareView";
import AdminNavbar from "./AdminNavbar";

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

  const { selectedTenders, setSelectedTenders } = useContext(AdminContext);

  return (
    <>
      <AdminNavbar />
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
                          setSelectedTenders((prevTender) => [
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

      {selectedTenders.length > 1 && (
        <>
          <br></br>
          <br></br>
          <br></br>
          <AdminCompareView />
        </>
      )}
    </>
  );
};

export default AdminListView;
