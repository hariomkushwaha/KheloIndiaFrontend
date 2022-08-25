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
          <Typography><h3>What is E-Procurement System?</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <i>E-Procurement System is a process of procuring the items electronically using internet. 
              This facility drastically reduces the tendering cycle time and reduces most of the indirect
               costs and enhances transparency in procurement.</i>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{marginBottom: "10px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h3>How can I fill the tenders?</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <i>First you need to sign in/sign up the portal. And then for filling a particular tender you need to fulfill its eligibility criteria. 
              Then you can navigate to the tender button and then choose the particular tender from the list and then click on the Get Started button for
               filling the tender.</i>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{marginBottom: "10px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h3>What is the role of Admin?</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <i>Admin is the System Manager who makes the end decision for the approval/rejection of the proposals.</i>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{marginBottom: "10px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h3>How can admin view the data in various forms?</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <i>Admin can view the data in three forms i.e. list view , comparison view and analytic view on the Admin Dashboard of the portal.</i>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Container>
      </Box>
    </Box>
  );
}
