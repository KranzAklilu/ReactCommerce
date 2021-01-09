import React, { useState } from "react";

import {
  Box,
  Collapse,
  Paper,
  Typography,
  Divider,
  makeStyles,
} from "@material-ui/core";

import { useProperty } from "../../context/ProductsProperty";
import SizeSelect from "../custom/SizeSelect";

const useStyles = makeStyles({
  boxContainer: {
    display: "flex",
    justifyContent: "start",
  },
});

interface Props {
  repeatedClasses: Record<"hr" | "collapse" | "paper" | "heading", string>;
}
const SizeCollapse: React.FC<Props> = ({ repeatedClasses }) => {
  const classes = useStyles();
  const { activeSize, handleSizeChange: handleChange } = useProperty();

  const [collapseToggle, setCollapseToggle] = useState(true);
  const handleCollapse = function () {
    setCollapseToggle(!collapseToggle);
  };
  const allBoxes = ["xl", "lg", "md", "sm", "xs"];

  return (
    <Collapse
      className={repeatedClasses.collapse}
      in={collapseToggle}
      collapsedHeight={30}
    >
      <Typography
        align="left"
        variant="h5"
        className={repeatedClasses.heading}
        onClick={handleCollapse}
      >
        Size
      </Typography>
      <Divider className={repeatedClasses.hr} />
      <Paper elevation={4} className={repeatedClasses.paper}>
        <Box className={classes.boxContainer}>
          {allBoxes.map((name, index) => (
            <SizeSelect
              key={index}
              name={name}
              handleChange={handleChange}
              activeSize={activeSize}
            />
          ))}
        </Box>
      </Paper>
    </Collapse>
  );
};

export default SizeCollapse;
