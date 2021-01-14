import React from "react";

import {
  Box,
  Paper,
  createStyles,
  makeStyles,
  Theme,
  IconButton,
  Typography,
} from "@material-ui/core";
import { AddShoppingCartRounded, Close } from "@material-ui/icons";

import SectionBar, { item3Enum, item4Enum } from "./SectionBar";
import ProductsDisplay from "./ProductsDisplay";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "90%",
      margin: "auto",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "2fr repeat(3, 1fr) 0.5fr",
      alignItems: "center",
      textAlign: "center",
      padding: "10px 0",
      border: "1px solid",
    },
    price: {},
    total: {},
  })
);

const Wishlist = () => {
  const classes = useStyles();

  return (
    <>
      <SectionBar item3={item3Enum.wishlist} item4={item4Enum.wishlist} />
      <Paper className={classes.root}>
        <Box className={classes.grid}>
          <ProductsDisplay />
          <Box>
            <Typography className={classes.price}>$56.00</Typography>
          </Box>
          <Box>
            <Typography className={classes.total}>In Stock</Typography>
          </Box>
          <Box>
            <IconButton
              edge="start"
              aria-label="close"
              style={{ borderRadius: 0 }}
            >
              <AddShoppingCartRounded />
            </IconButton>
          </Box>
          <Box>
            <IconButton
              edge="start"
              aria-label="close"
              style={{ borderRadius: 0 }}
            >
              <Close />
            </IconButton>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default Wishlist;
