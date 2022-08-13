import { Grid, Typography } from "@mui/material";
import React from "react";
import CompareCard from "./CompareCard";

const AdminCompareView = () => {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={5}
        style={{ marginBottom: "1rem" }}
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Proposal 1
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Proposal 2
          </Typography>
        </Grid>
      </Grid>
      <CompareCard />
    </>
  );
};

export default AdminCompareView;
