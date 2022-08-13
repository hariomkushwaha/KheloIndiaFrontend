import React from "react";
import { Paper, Button,  Box, Typography } from "@mui/material";

export default function Card({values}) {
  console.log(values);
  return (
    <Box sx={{ width: '90%', m:2 }}>
      <Paper elevation={6} sx={{ p: 3 }}>
        <Typography variant="h6">{values.tenderId}</Typography>
        <Typography variant="h6">{values.workItemTitle}</Typography>
        <Typography variant="subtitle1" component="div">Description : </Typography>
        <Typography variant="body2">{values.workItemDescription}</Typography>
        <br />
        <Button variant="outlined" color="primary" sx={{ p: 0.75 }} href={`/post/proponent/${values.tenderId}`}>
          Submit Proposal
        </Button>
      </Paper>
    </Box>
  );
}
