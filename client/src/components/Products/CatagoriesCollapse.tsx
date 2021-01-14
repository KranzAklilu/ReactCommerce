import React, { useState } from "react";

import {
  Collapse,
  Paper,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  List,
  ListItem,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => createStyles({}));

interface Props {
  repeatedClasses: Record<
    "hr" | "collapse" | "paper" | "catagoriesAccordion" | "heading",
    string
  >;
}
const CatagoriesCollapse: React.FC<Props> = ({ repeatedClasses }) => {
  const classes = useStyles();
  const [collapseToggle, setCollapseToggle] = useState(true);

  const handleCollapse = function () {
    setCollapseToggle(!collapseToggle);
  };

  return (
    <Collapse
      className={repeatedClasses.collapse}
      in={collapseToggle}
      collapsedHeight={30}
    >
      <Typography
        variant="h5"
        className={repeatedClasses.heading}
        onClick={handleCollapse}
      >
        Categories
      </Typography>
      <Divider className={repeatedClasses.hr} />
      <Paper elevation={4} className={repeatedClasses.paper}>
        <Accordion className={repeatedClasses.catagoriesAccordion}>
          <AccordionSummary expandIcon={false} aria-controls="panel1a-content">
            <Typography>Chair</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <Typography variant="body1">Wooden</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">Wooden</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">Wooden</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">Wooden</Typography>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion className={repeatedClasses.catagoriesAccordion}>
          <AccordionSummary expandIcon={false} aria-controls="panel1a-content">
            <Typography>Tables</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <Typography variant="body1">Wooden</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">Wooden</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">Wooden</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">Wooden</Typography>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion className={repeatedClasses.catagoriesAccordion}>
          <AccordionSummary expandIcon={false} aria-controls="panel1a-content">
            <Typography>Bed</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <Typography variant="body1">Wooden</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">Wooden</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">Wooden</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">Wooden</Typography>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Collapse>
  );
};

export default CatagoriesCollapse;
