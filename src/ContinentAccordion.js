import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import CountryDetails from "./ContinentDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ContinentAccordion = ({ continent }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">{continent.continent}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <CountryDetails countries={continent.countries} />
      </AccordionDetails>
    </Accordion>
  );
};

export default ContinentAccordion;
