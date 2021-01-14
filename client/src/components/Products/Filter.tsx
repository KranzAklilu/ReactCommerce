import React from "react";

import {
  Box,
  makeStyles,
  createStyles,
  Theme,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";

import CatagoriesCollapse from "./CatagoriesCollapse";
import PriceCollapse from "./PriceCollapse";
import ColorCollapse from "./ColorCollapse";
import SizeCollapse from "./SizeCollapse";
import Brand from "./Brand";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      padding: "50px 0",
      color: "black",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      [theme.breakpoints.up("md")]: {
        maxWidth: 300,
        marginRight: 30,
      },
    },
    search: {
      width: "100%",
      background: "#fff",
      margin: "20px auto",
    },
  })
);
const useStylesForChildern = makeStyles((theme: Theme) =>
  createStyles({
    collapse: {
      width: "100%",
      background: "#fff",
      margin: "20px auto",
      padding: "10px 5px",
      [theme.breakpoints.up("md")]: {
        padding: "10px 0",
      },
    },
    paper: {
      padding: "0 25px",
      boxShadow: "none",
      textAlign: "center",
    },
    heading: {
      marginLeft: theme.spacing(3),
    },
    hr: {
      margin: "10px 0px 25px",
    },
    catagoriesAccordion: {
      boxShadow: "none",
      border: "none",
      "&::before": {
        height: 0,
      },
    },
  })
);

const Filter = () => {
  const classes = useStyles();
  const repeatedClasses = useStylesForChildern();

  return (
    <Box className={classes.root}>
      <TextField
        className={classes.search}
        label="Search for Products"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <Search style={{ cursor: "pointer" }} />
            </InputAdornment>
          ),
        }}
      />
      <CatagoriesCollapse repeatedClasses={repeatedClasses} />
      <PriceCollapse repeatedClasses={repeatedClasses} />
      <ColorCollapse repeatedClasses={repeatedClasses} />
      <SizeCollapse repeatedClasses={repeatedClasses} />
      <Brand />
    </Box>
  );
};

export default Filter;
