import React from "react";

import { Box, makeStyles, createStyles, Theme } from "@material-ui/core";

import Hero from "../components/custom/BreadcrumbHero";
import Filter from "../components/Products/Filter";
import View from "../components/Products/View";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "0 25px",
      border: "1px solid",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
  })
);

const Products = () => {
  const classes = useStyles();

  return (
    <>
      <Hero page="Products" />
      <Box className={classes.root}>
        <Filter />
        <View />
      </Box>
    </>
  );
};

export default Products;
