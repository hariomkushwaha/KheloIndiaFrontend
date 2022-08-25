import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import img3 from "../images/img3.jpg";
import useStyles from "../styles/styles";

const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.heroBox}>
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} md={7}>
          <Typography variant="h3" fontWeight={700} className={classes.title}>
            Welcome To Tenders FC
          </Typography>
          <Typography variant="h6" className={classes.subtitle}>
            This is a procurement site for handling the proposals under
            kheloIndia scheme. The tenders filled by the proponents are handled
            and compared digitally. Our site would help in easing the process of
            procurement for the admin by listing out the favourable tenders at
            the top of the list.
          </Typography>
          <Button
            href="get-started"
            variant="contained"
            color="success"
            style={{
              borderRadius: "5px",
              alignItems: "center",
              marginLeft: "220px",
              marginTop: "20px",
            }}
          >
            Get Started
          </Button>
        </Grid>
        <Grid item xs={12} md={5}>
          <img src={img3} alt="landing page " className={classes.largeImage} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
