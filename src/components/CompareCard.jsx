import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import { Grid } from "@mui/material";

const CompareCard = () => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4">Experience</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={5}
          >
            <Grid item xs={12} md={4}>
              <Typography variant="h5" component="div">
                10 Years
              </Typography>
            </Grid>
            <Grid item xs={0} md={2}>
              {/* Not Working */}
              <Divider
                orientation="vertical"
                style={{ height: "100%" }}
              ></Divider>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" component="div">
                10 Years
              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default CompareCard;
