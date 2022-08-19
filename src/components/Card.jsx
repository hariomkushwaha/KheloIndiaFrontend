import React from "react";
import { Paper, Button,  Box, Typography } from "@mui/material";

export default function Card({values}) {
  console.log(values);
  return (
    <Box sx={{ width: '90%', m:2}}>
      <Paper  sx={{ p: 3, borderRadius: '25px',backgroundColor: 'ghostwhite',boxShadow: '2px 3px dodgerblue' }}>
        <Typography variant="h5" >{values.tenderId}</Typography>
        <Typography variant="h6">{values.workItemTitle}</Typography>
        <Typography variant="body2">{values.workItemDescription}</Typography>
        <br />
        {/* <div style={{display: 'flex',alignItems: 'center',justifyContent:'center'}}> */}
         <Button variant="outlined" color="primary" sx={{ p: 0.75}} href={`/post/proponent/${values.tenderId}`}>
          Submit Proposal
        </Button>
        {/* </div> */}
      </Paper>
    </Box>
  );
}
