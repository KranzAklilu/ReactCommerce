import React, { useState } from "react";

import ProductHead from "./ProductHead";
import ProductDescription from "./ProductDescription";
import ProductReview from "./ProductReview";
import ProductInformation from "./ProductInformation";
import { Box, Paper, createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "90%",
      margin: "auto",
      [theme.breakpoints.up("md")]: {
        display: "flex",
        justifyContent: "center",
        gap: 20,
      },
    },
    paper: {
      width: "100%",
      maxWidth: 250,
      margin: "auto",
      padding: 20,
      [theme.breakpoints.up("sm")]: {
        maxWidth: 450,
      },
      [theme.breakpoints.up("md")]: {
        maxWidth: 900,
      },
    },
  })
);

export type activeComponentType = {
  description: boolean;
  review: boolean;
  information: boolean;
};

const ProductsDetails = () => {
  const classes = useStyles();
  const [activeComponent, setActiveComponent] = useState<activeComponentType>({
    description: true,
    review: false,
    information: false,
  });

  return (
    <Box className={classes.root}>
      <ProductHead
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />
      <Paper className={classes.paper}>
        {activeComponent.description && <ProductDescription />}
        {activeComponent.review && <ProductReview />}
        {activeComponent.information && <ProductInformation />}
      </Paper>
    </Box>
  );
};

export default ProductsDetails;
