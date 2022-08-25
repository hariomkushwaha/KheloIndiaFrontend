/* eslint-disable no-unused-vars */
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Skeleton from "@mui/material/Skeleton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsightsIcon from "@mui/icons-material/Insights";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link as RouterLink } from "react-router-dom";
import { red, amber, grey } from "@mui/material/colors";

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

export default function RecipeReviewCard({ values }) {
  const [expanded, setExpanded] = React.useState(false);

  // const [submission, setSubmission] = React.useState([]);
  // const [proponentValues, setProponentValues] = React.useState([]);

  // const handleProponents = async () => {
  //     try {
  //         const res = await fetch("/API/proponentform", {
  //             method: "GET",
  //             headers: {
  //                 Accept: "application/json",
  //                 "Content-Type": "application/json",
  //             },
  //             credentials: "include",
  //         });
  //         const data = res.json();

  //         data.then((responses) => {
  //             responses.map((response) => {
  //                 if (response.tenderId === values.tenderId) {
  //                     return setSubmission((current) => [...current, response]);
  //                 }
  //                 return null;
  //             });
  //             setProponentValues(responses);
  //         });

  //         if (!res.status === 200) {
  //             const error = new Error(res.error);
  //             throw error;
  //         }
  //     } catch (err) {
  //         console.error(err);
  //     }
  // };

  // React.useEffect(() => {
  //     handleProponents();
  // }, []);

  // var da = values.publishDate;
  // // var newDate = da.toLocaleDateString();

  // console.log(da);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{ width: "90%", m: 2, flexGrow: 1 }}
      style={{ border: "1px solid " + grey["300"] }}
    >
      <CardHeader
        action={
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* <Typography variant="button" sx={{ color: amber['800'] }} >Submissions: &nbsp;&nbsp;</Typography>
                        <Typography variant="button" pr={2} sx={{ color: amber['800'] }} >{submission.length}</Typography> */}
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          </Box>
        }
        title={values.tenderId}
        subheader={
          <Typography variant="caption" color="text.secondary">
            Posted on: {values.publishDate}
          </Typography>
        }
      />

      <CardContent>
        <Typography variant="h6">{values.workItemTitle}</Typography>
        <Typography variant="body2" color="text.secondary">
          Description : {values.workItemDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <RouterLink
          to={`/post/proponent/${values.tenderId}`}
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="outlined"
            color="success"
            sx={{ p: 0.75, m: 1 }}
            // href={`/admin/list/${values.tenderId}`}
          >
            Submit Proposals
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
                  <Typography variant="button">Organisation Chain</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="button">Reference Number</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="button">tender Type</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="caption">{values.orgChain}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="caption">{values.refNumber}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="caption">{values.tenderType}</Typography>
                </Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={4}>
                  <Typography variant="button">Payment Mode</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="button">Two Stage Binding</Typography>
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
                  <Typography variant="caption">{values.tenderFee}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="button">
                    tender Fee Payable To
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="button">tender Fee Exemption</Typography>
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
                  <Typography variant="caption">{values.emdPercent}</Typography>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={4}>
                  <Typography variant="button">emd Fee Payable To</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="button">emd Fee Payable At</Typography>
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
                  <Typography variant="caption">{values.emdFeeType}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}
