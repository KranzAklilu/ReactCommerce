import React, { useState } from "react";

import {
  Box,
  Collapse,
  Paper,
  Typography,
  FormControlLabel,
  Divider,
  makeStyles,
  Theme,
  createStyles,
  useTheme,
} from "@material-ui/core";

import CheckBox from "../custom/CheckBox";
import { useProperty } from "../../context/ProductsProperty";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    checkBoxFlex: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "start",
      "&:nth-child(2)": {
        flexGrow: 3,
      },
    },
    formCont: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    checkBox: {
      textTransform: "capitalize",
    },
  })
);

interface Props {
  repeatedClasses: Record<"hr" | "collapse" | "paper" | "heading", string>;
}
const ColorCollapse: React.FC<Props> = ({ repeatedClasses }) => {
  const classes = useStyles();
  const { activeColor, handleColorChange: handleChange } = useProperty();

  const [collapseToggle, setCollapseToggle] = useState(true);
  const handleCollapse = function () {
    setCollapseToggle(!collapseToggle);
  };

  const colors = [
    {
      name: "lightsalmon",
      quantity: 20,
    },
    {
      name: "darksalmon",
      quantity: 20,
    },
    {
      name: "tomato",
      quantity: 20,
    },
    {
      name: "deepsky",
      quantity: 20,
    },
    {
      name: "electricpurple",
      quantity: 20,
    },
    {
      name: "atlantis",
      quantity: 20,
    },
    {
      name: "deeplilac",
      quantity: 20,
    },
  ];

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
        Color
      </Typography>
      <Divider className={repeatedClasses.hr} />
      <Paper elevation={4} className={repeatedClasses.paper}>
        <Box className={classes.checkBoxFlex}>
          {colors.map(({ name, quantity }, index) => {
            return (
              <Box key={index} className={classes.formCont}>
                <FormControlLabel
                  className={classes.checkBox}
                  control={
                    <CheckBox
                      name={name}
                      activeColor={activeColor}
                      handleChange={handleChange}
                    />
                  }
                  label={name}
                />
                <Typography variant="subtitle1">{quantity}</Typography>
              </Box>
            );
          })}
        </Box>
      </Paper>
    </Collapse>
  );
};

export default ColorCollapse;
