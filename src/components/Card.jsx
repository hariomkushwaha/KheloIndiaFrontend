import React from "react";
import { Paper, Button, Stack, Box, Typography } from "@mui/material";

export default function Card() {
  return (

    <Box sx={{ width: '90%', m:2 }}>
      <Paper elevation={6} sx={{ p: 3 }}>
        <Typography variant="h6">Title</Typography>
        <Typography variant="subtitle1" component="div">Description : </Typography>
        <Typography variant="body2">We use cookies and similar technologies to help
          personalise content, tailor and measure ads, and provide a better
          experience. By clicking OK or turning an option on in Cookie
          Preferences, you agree to this, as outlined in our Cookie Policy. To
          change preferences or withdraw consent, please update your Cookie
          Preferences.</Typography>
        <br />
        <Button variant="outlined" color="success" sx={{ p: 0.75 }}>
          Submit Proposal
        </Button>
      </Paper>
    </Box>
  );
}
