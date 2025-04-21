"use client"
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export default function AccordionUsage({ services }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {services.map((service, key) => (
        <Accordion
          key={key}
          expanded={expanded === key}
          onChange={handleChange(key)}
          sx={{ bgcolor: "transparent", boxShadow: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${key}-content`}
            id={`panel${key}-header`}
          >
            <Typography component="span" className="hover:text-blue-500">
              {service.title || `Accordion ${key + 1}`}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "1.5rem",
                margin: 0,
              }}
            >
              {service.values.map((value, i) => (
                <li key={i} style={{ marginBottom: "0.5rem" }}>
                  {value}
                </li>
              ))}
            </ul>
          </AccordionDetails>

          {service.actions && (
            <AccordionActions>
              {service.actions.map((action, i) => (
                <Button key={i} onClick={action.onClick}>
                  {action.label}
                </Button>
              ))}
            </AccordionActions>
          )}
        </Accordion>
      ))}
    </div>
  );
}
