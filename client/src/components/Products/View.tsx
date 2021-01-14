import React, { useState } from "react";

import clsx from "clsx";

import {
  Box,
  Grid,
  makeStyles,
  createStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { ViewList, ViewModule } from "@material-ui/icons";
import ShoppingCard from "../custom/ShoppingCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "50px 0",
      [theme.breakpoints.up("md")]: {
        width: "100%",
      },
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      width: "100%",
      margin: "auto",
    },
    iconsCont: {
      margin: "20px auto ",
      backgroundColor: "#fff",
      padding: "15px 0px",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
    viewText: {
      color: theme.palette.grey[800],
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    icons: {
      color: theme.palette.grey[800],
      marginLeft: theme.spacing(3),
      "& > svg": {
        cursor: "pointer",
      },
    },
    active: {
      color: theme.palette.primary.main,
    },
  })
);
type ActiveState = {
  viewList: boolean;
  viewModule: boolean;
};
const View = () => {
  const classes = useStyles();

  const [activeView, setActiveView] = useState<ActiveState>({
    viewList: true,
    viewModule: false,
  });

  return (
    <Box className={classes.root}>
      <Box className={classes.iconsCont}>
        <Box className={classes.icons}>
          <ViewList
            className={clsx({ [classes.active]: activeView.viewList })}
            onClick={() => setActiveView({ viewList: true, viewModule: false })}
          />
          <ViewModule
            className={clsx({ [classes.active]: activeView.viewModule })}
            onClick={() => setActiveView({ viewList: false, viewModule: true })}
          />
        </Box>
        <Typography className={classes.viewText}>
          Showing 01-09 of 17 Results
        </Typography>
      </Box>
      <Grid className={classes.grid}>
        {[...new Array(10)].map((ar, index) => (
          <ShoppingCard key={index} />
        ))}
      </Grid>
    </Box>
  );
};

export default View;
