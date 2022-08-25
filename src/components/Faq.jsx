import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid, Box } from "@mui/material";

export default function Faq() {
  return (
    <Box>
      <Box style={{ textAlign: "center", padding: "50px", height: "27px" }}>
        <Typography variant="h3" component="div" gutterBottom>
          FAQ
        </Typography>
      </Box>
      <Box>
        <Accordion
          sx={{ mx: "auto", width: 1500 }}
          style={{
            alignItems: "center",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ mx: "auto", width: 1500 }}
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ mx: "auto", width: 1500 }}
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ mx: "auto", width: 1500 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ mx: "auto", width: 1500 }}
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ mx: "auto", width: 1500 }}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ mx: "auto", width: 1500 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ mx: "auto", width: 1500 }}
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ mx: "auto", width: 1500 }}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ mx: "auto", width: 1500 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={{ mx: "auto", width: 1500 }}
          >
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ mx: "auto", width: 1500 }}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
