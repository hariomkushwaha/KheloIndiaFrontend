import React from "react";
import { Grid, Typography, Box } from "@mui/material";

import ViewListIcon from "@mui/icons-material/ViewList";
import CompareIcon from "@mui/icons-material/Compare";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import useStyles from "../styles/styles";

const Section = () => {
  const classes = useStyles();

  const sectionItems = [
    {
      id: 1,
      icon: <ViewListIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence: " LIST VIEW ",
    },
    {
      id: 2,
      icon: <CompareIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence: "COMPARE VIEW",
    },
    {
      id: 3,
      icon: <AnalyticsOutlinedIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence: "ANALYTICS VIEW",
    },
  ];
  return (
    <Box sx={{ flexGrow: 1, minHeight: "400px" }}>
      <Box style={{ textAlign: "center", padding: "10px", height: "27px" }}>
        <Typography variant="h3" component="div" gutterBottom>
          Features
        </Typography>
      </Box>
      <Grid container className={classes.sectionGridContainer}>
        {sectionItems.map((item) => (
          <Grid
            item
            xs={12}
            md={3.5}
            minHeight={300}
            key={item.id}
            className={classes.sectionGridItem}
            style={{
              "&:hover": { background: "black" },
              marginLeft: "4px",
              marginRight: "4px",
            }}
          >
            {item.icon}
            <Typography variant="h5" component="div" gutterBottom padding={4}>
              {item.sentence}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Section;
