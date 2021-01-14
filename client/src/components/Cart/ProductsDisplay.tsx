import React from "react";

import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import img from "../../assets/products-bg.jpeg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minWidth: 300,
    },
    productsImg: {
      width: 100,
      height: 100,
      objectFit: "cover",
    },
    productsDetails: {
      textAlign: "left",
      marginLeft: 15,
    },
    productsName: {},
  })
);

const ProductsDisplay = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img className={classes.productsImg} src={img} alt="product" />
      <Box className={classes.productsDetails}>
        <Typography className={classes.productsName}>
          Dummy product name
        </Typography>
        <Typography>Color: Black</Typography>
        <Typography>Size: XL</Typography>
      </Box>
    </Box>
  );
};

export default ProductsDisplay;
