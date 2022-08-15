import { Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import AdminContext from "../context/AdminContext";
import Admin from "../pages/Admin";
import CompareCard from "./CompareCard";

const AdminCompareView = () => {
  const { selectedProposals } = useContext(AdminContext);

  const firstProposal = selectedProposals[0];
  const secondProposal = selectedProposals[1];

  console.log("firstProposal:", firstProposal);

  return (
    <>
      <Admin>
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
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
                Proponent Id: {firstProposal.proponentId}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                Proponent Id: {secondProposal.proponentId}
              </Typography>
            </Grid>
          </Grid>
          <CompareCard
            title="General Experience"
            firstData={firstProposal.generalexperience}
            secondData={secondProposal.generalexperience}
          />
          <CompareCard
            title="Sport Specific Experience"
            firstData={firstProposal.sportsspecificexperience}
            secondData={secondProposal.sportsspecificexperience}
          />
          <CompareCard
            title="Coordinator Experience"
            firstData={firstProposal.coordinatorexperience}
            secondData={secondProposal.coordinatorexperience}
          />
          <CompareCard
            title="Database Admin Experience"
            firstData={firstProposal.databaseadminexperience}
            secondData={secondProposal.databaseadminexperience}
          />
          <CompareCard
            title="Durability"
            firstData={firstProposal.durability}
            secondData={secondProposal.durability}
          />
          <CompareCard
            title="Duration"
            firstData={firstProposal.duration}
            secondData={secondProposal.duration}
          />
          <CompareCard
            title="Quality"
            firstData={firstProposal.quality}
            secondData={secondProposal.quality}
          />
          <CompareCard
            title="Total Cost"
            firstData={firstProposal.totalcost}
            secondData={secondProposal.totalcost}
          />
        </div>
      </Admin>
    </>
  );
};

export default AdminCompareView;
