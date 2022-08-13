import React, { useState, useEffect } from "react";
import { Paper, Button, Box, Typography, Grid, Divider } from "@mui/material";

export default function Card({ values }) {
  const [proponentValues, setProponentValues] = useState([]);
  const [submission, setSubmission] = useState([]);
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


      data.then(responses => {
        responses.map(response => {
          if (response.tenderId === values.tenderId) {
            return setSubmission(current => [...current, response])
          }
          return null;
        });
        setProponentValues(responses);
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
    <Box sx={{ width: '90%', m: 2, flexGrow: 1 }}>
      <Paper elevation={6} sx={{ p: 3 }}>
        <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
          <Grid item xs={9}>
            <Typography variant="h6">{values.tenderId}</Typography>
            <Typography variant="h6">{values.workItemTitle}</Typography>
            <Typography variant="subtitle1" component="div">Description : </Typography>
            <Typography variant="body2">{values.workItemDescription}</Typography>
            <br />
            <Button variant="outlined" color="success" sx={{ p: 0.75 }} href={`/admin/list/${values.tenderId}`}>
              View Proposals
            </Button>
          </Grid>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', minHeight: '200px', minWidth: '200px' }} style={{ color: 'green' }}>
            <Typography variant="h4">{submission.length}</Typography>
            <Typography variant="caption">No. of Submissions</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
