/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";
import CardHeader from "@mui/material/CardHeader";
import AdminContext from "../context/AdminContext";
import CompareIcon from "@mui/icons-material/Compare";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import Modal from '@mui/material/Modal';

import emailjs from "@emailjs/browser";

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

const AdminListViewCard = ({
  values,
  proposal,
  index,
  selectedProposalValue,
  setSelectedProposalValue,
}) => {
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
  const { selectedProposals, setSelectedProposals } = useContext(AdminContext);

  React.useEffect(() => {
    handleUserDetails();
  }, [""]);

  const form = React.useRef();

  const sendEmail = () => {
    let mail = {
      to_name: userDetails.fullname,
      from_name: "Khelo India",
      message: `Hello ${userDetails.fullname}, Your proposal has been selected`,
    };

    emailjs
      .send("service_r2jsu9s", "template_k8n64se", mail, "FvgiL4qh0LS7uZkY0")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  console.log(index)
  return (
    <Card sx={{ width: "90%", m: 2, flexGrow: 1 }}>
      
      {loading ? (
        <>
          <CardHeader
            action={
              index === 1
                ?
                <>
                  <Typography
                    variant="button"
                    sx={{
                      background: "rgba(255,190,0,1)",
                      color: "white",
                      p: "2px 5px",
                      borderRadius: "5px",
                    }}
                  >
                    Recommended
                  </Typography>
                  <IconButton aria-label="compare">
                    Add to Compare
                    <CompareIcon
                      color="warning"
                      onClick={() => {
                        setSelectedProposals((prevTender) => [
                          ...prevTender,
                          values,
                        ]);
                      }}
                    >
                    </CompareIcon>
                  </IconButton>
                </>
                :
                <CompareIcon
                  color="warning"
                  onClick={() => {
                    setSelectedProposals((prevTender) => [
                      ...prevTender,
                      values,
                    ]);
                  }}
                >
                  {/* Add to Compare */}
                </CompareIcon>
            }
            title={
              <>
                <IconButton aria-label="settings">
                  <img
                    src="https://i.pinimg.com/736x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg"
                    alt="SomeWeirdo"
                    style={{
                      width: "100%",
                      height: "100%",
                      maxHeight: "50px",
                      maxWidth: "50px",
                      borderRadius: "50%",
                    }}
                  />
                </IconButton>
                <span style={{ textTransform: "uppercase" }}>
                  {userDetails.fullname} &nbsp;
                </span>
              </>
            }
            subheader={
              <>
                <Typography variant="button" color="text.secondary">
                  {userDetails.fulladdress}, &nbsp;{userDetails.pincode}
                </Typography>

                <Typography variant="caption" as={"h1"} color="text.secondary">
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
          </CardContent>
          <CardActions disableSpacing>
            {selectedProposalValue === "" ? (
              <>
                <IconButton
                  onClick={() => {
                    setSelectedProposalValue(values.proponentId);
                    sendEmail();
                    
                  }}
                >
                  <DoneIcon color={"success"} />
                </IconButton>
                <IconButton
                  onClick={() => {
                  }}
                >
                  <ClearIcon style={{color:'red'}} />
                </IconButton>
              </>
            ) : selectedProposalValue === values.proponentId ? (
              <Typography
                variant="button"
                color="info"
                style={{
                  background: "green",
                  color: "white",
                  padding: "0px 5px",
                }}
              >
                Selected
              </Typography>
            ) : (
              <Typography variant="button" color="error">
                Rejected
              </Typography>
            )}
            <Typography variant="body2" pl={2}>
              More Details
            </Typography>
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
                  <Typography variant="button">Durability</Typography>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <Typography variant="button">Usability</Typography>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <Typography variant="button">Quality</Typography>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <Typography variant="caption">{values.durability}</Typography>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <Typography variant="caption">{values.usability}</Typography>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <Typography variant="caption">{values.quality}</Typography>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <Typography variant="button">Duration</Typography>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <Typography variant="button">Total Cost</Typography>
                </Grid>
                <Grid item xs={4} sm={4}></Grid>
                <Grid item xs={4} sm={4}>
                  <Typography variant="caption">{values.duration}</Typography>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <Typography variant="caption">{values.totalcost}</Typography>
                </Grid>
                <Grid item xs={4} sm={4}></Grid>
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
