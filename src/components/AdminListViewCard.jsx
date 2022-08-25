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

const AdminListViewCard = ({ values }) => {
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
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
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
            <Typography variant="body2" color="text.secondary">
              Description : {values.workItemDescription}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="delete">
              <RouterLink
                to=""
                // to={`/admin/analytics/${values.tenderId}`}
              >
                <DeleteIcon sx={{ color: red["500"] }} />
              </RouterLink>
            </IconButton>
            <IconButton aria-label="analyze">
              <RouterLink to={`/admin/analytics/${values.tenderId}`}>
                <InsightsIcon />
              </RouterLink>
            </IconButton>
            <RouterLink
              to={`/admin/list/${values.tenderId}`}
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="outlined"
                color="success"
                sx={{ p: 0.75 }}
                // href={`/admin/list/${values.tenderId}`}
              >
                View Proposals
              </Button>
            </RouterLink>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Grid container spacing={2} rowSpacing={5}>
                <Grid item xs={12} p={2}>
                  <Typography variant="h6"></Typography>
                  <br />
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={1}>
                    <Grid item xs={4}>
                      <Typography variant="button">
                        Organisation Chain
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="button">Reference Number</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="button">tender Type</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="caption">
                        {values.orgChain}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="caption">
                        {values.refNumber}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="caption">
                        {values.tenderType}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={4}>
                      <Typography variant="button">Payment Mode</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="button">
                        Two Stage Binding
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="button">Category</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="caption">
                        {values.paymentMode}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="caption">
                        {values.paymentMode}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="caption">
                        {values.tenderCategory}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={4}>
                      <Typography variant="button">
                        Item-wise Technical Evaluation
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="button">
                        General Technical Evaluation
                      </Typography>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                      <Typography variant="caption">
                        {values.itemwiseTechnicalEvaluation}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="caption">
                        {values.generalTechnicalEvaluation}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="button">tender Fee</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="caption">
                        {values.tenderFee}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="button">
                        tender Fee Payable To
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="button">
                        tender Fee Exemption
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="button">
                        tender Fee Payable At
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="caption">
                        {values.tenderFeePayableTo}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="caption">
                        {values.tenderFeeExemption}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="caption">
                        {values.tenderFeePayableAt}
                      </Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <Divider />
                    </Grid>

                    <Grid item xs={4}>
                      <Typography variant="button">EMD Fee</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="button">emd Percent</Typography>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                      <Typography variant="caption">{values.emdFee}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="caption">
                        {values.emdPercent}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={4}>
                      <Typography variant="button">
                        emd Fee Payable To
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="button">
                        emd Fee Payable At
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="button">emd Fee Type</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="caption">
                        {values.emdFeePayableTo}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="caption">
                        {values.emdFeePayableAt}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="caption">
                        {values.emdFeeType}
                      </Typography>
                    </Grid>
                  </Grid>
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
