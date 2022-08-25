/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React from "react";
import { styled } from "@mui/material/styles";

import Card from "@mui/material/Card";
import Skeleton from "@mui/material/Skeleton";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Divider, Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsightsIcon from "@mui/icons-material/Insights";
import DeleteIcon from "@mui/icons-material/Delete";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const AdminListViewCard = ({ values, proposal }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [userDetails, setUserDetails] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const handleUserDetails = async () => {
    try {
      const userData = await fetch(`/API/userdetails/${values.proponentId}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = userData.json();
      data.then(async (response) => {
        setUserDetails(response);
        setLoading(true);
        console.log(response);
      });
      if (!userData.status === 200) {
        const error = new Error(userData.error);
        throw error;
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  React.useEffect(() => {
    handleUserDetails();
  }, []);

  return (
    <Card sx={{ width: "90%", m: 2, flexGrow: 1 }}>
      {loading ? (
        <>
          <CardHeader
            title={
              <>
                <IconButton aria-label="settings">
                  <Avatar />
                </IconButton>
                <span style={{ textTransform: "uppercase" }}>
                  {userDetails.fullname} &nbsp;
                  <Typography variant="button" color="text.secondary">
                    ({values.proponentId})
                  </Typography>
                </span>
              </>
            }
            subheader={
              <>
                <Typography variant="button" color="text.secondary">
                  {userDetails.fulladdress}, &nbsp;{userDetails.pincode}
                </Typography>

                <Typography variant="caption" as={'h1'} color="text.secondary">
                  <span style={{ textTransform: "uppercase" }}>
                    {userDetails.organization}
                  </span>
                </Typography>
              </>
            }
          />

          <CardContent>
            <Typography variant="h6">{values.workItemTitle}</Typography>
            <br />
            <Grid container spacing={2}>
              <Grid item xs={4} sm={4}>
                <Typography variant="body1">Durability</Typography>
              </Grid>
              <Grid item xs={4} sm={4}>
                <Typography variant="body1">Usability</Typography>
              </Grid>
              <Grid item xs={4} sm={4}>
                <Typography variant="body1">Quality</Typography>
              </Grid>
              <Grid item xs={4} sm={4}>
                <Typography variant="body1">{values.durability}</Typography>
              </Grid>
              <Grid item xs={4} sm={4}>
                <Typography variant="body1">{values.usability}</Typography>
              </Grid>
              <Grid item xs={4} sm={4}>
                <Typography variant="body1">{values.quality}</Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions disableSpacing>
            <Typography variant="body2" pl={2}>More Details</Typography>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={4} sm={4}>
                  <Typography variant="body1">Duration</Typography>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <Typography variant="body1">Total Cost</Typography>
                </Grid>
                <Grid item xs={4} sm={4}>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <Typography variant="body1">{values.duration}</Typography>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <Typography variant="body1">{values.totalcost}</Typography>
                </Grid>
                <Grid item xs={4} sm={4}>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography variant="body2" color="text.secondary">
                    Previous Records : NIL
                    {/* {userDetails.previousRecords} */}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Collapse>
        </>
      ) : (
        <Skeleton />
      )}
    </Card>
  );
};

export default AdminListViewCard;