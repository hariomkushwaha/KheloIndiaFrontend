import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import { Grid } from "@mui/material";

const CompareCard = ({ title, firstData, secondData }) => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={5}
          >
            <Grid item xs={12} md={6}>
              <Typography variant="body1" component="div">
                {firstData}
              </Typography>
            </Grid>
            {/* <Grid item xs={0} md={0}>
              Not Working
              <Divider
                orientation="vertical"
                style={{ height: "100%" }}
              ></Divider>
            </Grid> */}
            <Grid item xs={12} md={6}>
              <Typography variant="body1" component="div">
                {secondData}
              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default CompareCard;

