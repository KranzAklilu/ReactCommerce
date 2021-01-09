import React from "react";

import QuickShopFeatures from "./QuickShopFeatures";
import DiscountFeatures from "./DiscountFeatures";
import UpCommingFurniture from "./UpCommingFurniture";
import CustomSectionTitle from "../custom/SectionTitle";

import { Box, makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flexContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
      [theme.breakpoints.up("md")]: {
        flexDirection: "row",
      },
    },
  })
);

const Featured = () => {
  const classes = useStyles();
  return (
    <>
      <CustomSectionTitle title="Featured Products" />
      <QuickShopFeatures />
      <Box className={classes.flexContainer}>
        <DiscountFeatures />
        <UpCommingFurniture />
      </Box>
    </>
  );
};

export default Featured;
