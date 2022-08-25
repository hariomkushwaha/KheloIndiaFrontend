import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {  Box } from "@mui/material";
import Container from '@mui/material/Container';

export default function Faq() {
  return (
    <Box>
      <Box style={{ textAlign: "center", padding: "50px", height: "27px"}}>
        <Typography variant="h4" component="div" gutterBottom>
          Frequently Asked Questions
        </Typography>
      </Box>
      <Box>
      <Container maxWidth="lg">
      <Accordion style={{marginBottom: "10px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h3>About Khelo India Scheme</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</i>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{marginBottom: "10px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h3>About Khelo India Scheme</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</i>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{marginBottom: "10px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h3>About Khelo India Scheme</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</i>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{marginBottom: "10px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h3>About Khelo India Scheme</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</i>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Container>
      </Box>
    </Box>
  );
}
