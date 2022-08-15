import { Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import AdminContext from "../context/AdminContext";
import CompareCard from "./CompareCard";

const AdminCompareView = () => {
  const { selectedTenders } = useContext(AdminContext);

  const firstTender = selectedTenders[0];
  const secondTender = selectedTenders[1];

  console.log("firstTender:", firstTender);

  return (
    <div style={{ textAlign: "center" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={5}
        style={{ marginBottom: "1rem" }}
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Proponent Id: {firstTender.proponentId}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Proponent Id: {secondTender.proponentId}
          </Typography>
        </Grid>
      </Grid>
      <CompareCard
        title="General Experience"
        firstData={firstTender.generalexperience}
        secondData={secondTender.generalexperience}
      />
      <CompareCard
        title="Sport Specific Experience"
        firstData={firstTender.sportsspecificexperience}
        secondData={secondTender.sportsspecificexperience}
      />
      <CompareCard
        title="Coordinator Experience"
        firstData={firstTender.coordinatorexperience}
        secondData={secondTender.coordinatorexperience}
      />
      <CompareCard
        title="Database Admin Experience"
        firstData={firstTender.databaseadminexperience}
        secondData={secondTender.databaseadminexperience}
      />
      <CompareCard
        title="Durability"
        firstData={firstTender.durability}
        secondData={secondTender.durability}
      />
      <CompareCard
        title="Duration"
        firstData={firstTender.duration}
        secondData={secondTender.duration}
      />
      <CompareCard
        title="Quality"
        firstData={firstTender.quality}
        secondData={secondTender.quality}
      />
      <CompareCard
        title="Total Cost"
        firstData={firstTender.totalcost}
        secondData={secondTender.totalcost}
      />
    </div>
  );
};

export default AdminCompareView;
