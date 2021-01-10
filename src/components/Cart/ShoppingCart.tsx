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
import { Close } from "@material-ui/icons";

import InputAmount from "../custom/InputAmount";
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

const ShoppingCart = () => {
  const classes = useStyles();

  return (
    <>
      <SectionBar item3={item3Enum.cart} item4={item4Enum.cart} />
      <Paper className={classes.root}>
        <Box className={classes.grid}>
          <ProductsDisplay />
          <Box>
            <Typography className={classes.price}>$56.00</Typography>
          </Box>
          <Box>
            <InputAmount />
          </Box>
          <Box>
            <Typography className={classes.total}>$112.00</Typography>
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

export default ShoppingCart;
