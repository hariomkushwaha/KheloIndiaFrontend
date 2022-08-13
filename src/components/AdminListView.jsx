import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

  return (
    <>
      <TableContainer
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 5,
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
              <TableCell align="right">general Experience</TableCell>
              <TableCell align="right">durability&nbsp;(g)</TableCell>
              <TableCell align="right">quality&nbsp;(g)</TableCell>
              <TableCell align="right">usability&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {proponentValues.map((proponentValue) =>
              proponentValue.tenderId === tenderID ? (
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
                    {proponentValue.durability}
                  </TableCell>
                  <TableCell align="right">{proponentValue.quality}</TableCell>
                  <TableCell align="right">
                    {proponentValue.usability}
                  </TableCell>
                </TableRow>
              ) : (
                <></>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AdminListView;
