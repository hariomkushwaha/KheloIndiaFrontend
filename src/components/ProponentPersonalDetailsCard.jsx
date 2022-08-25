import { Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import PinDropIcon from "@mui/icons-material/PinDrop";
import EmailIcon from "@mui/icons-material/Email";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VerifiedIcon from "@mui/icons-material/Verified";
import { amber, red } from "@mui/material/colors";
import { Link } from "react-router-dom";

const ProponentPersonalDetailsCard = ({ userDetails }) => {
  return (
    <Box
      //   m={}
      mt={10}
      style={{
        boxShadow: "5px 5px 10px rgba(0,0,0,0.25)",
        border: "1px solid #eee",
        textAlign: "center",
      }}
    >
      <Grid container>
        <Grid item xs={12} p={3} m={"auto"}>
          <Box p={2}>
            <Typography variant="h4">
              {userDetails.fullname}
              &nbsp;
              <Typography as={"span"} variant="button">
                ({userDetails.proponentID})
              </Typography>
              <VerifiedIcon color="success" />
            </Typography>
            <br />
            <Grid
              container
              rowSpacing={5}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={4}>
                <EmailIcon sx={{ color: amber[700] }} />
                <Typography underline="none" variant="body1">
                  {userDetails.email}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <PinDropIcon sx={{ color: red[500] }} />
                <Typography variant="body1">{userDetails.state}</Typography>
              </Grid>
            </Grid>
          </Box>
          <br />
          <Divider />
          <br />
          <Grid container rowSpacing={5}>
            <Grid item xs={4}>
              <Typography variant="h6">Organisation</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6">Full Address</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6">Pin Code</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={4}>
              <Typography variant="body2">
                {userDetails.organization}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2">{userDetails.fulladdress}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2">{userDetails.pincode}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProponentPersonalDetailsCard;
