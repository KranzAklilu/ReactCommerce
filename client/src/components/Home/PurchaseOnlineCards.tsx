import React from "react";

import ShoppingCard from "../custom/ShoppingCard";

import { Grid, makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "grid",
      [theme.breakpoints.up("xs")]: {
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 25,
      },
    },
  })
);
const a = [1, 2, 3, 4, 5, 6, 7, 8];
const PurchaseOnlineCards = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      {a.map((i, index) => (
        <ShoppingCard key={index} />
      ))}
    </Grid>
  );
};

export default PurchaseOnlineCards;
