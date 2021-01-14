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
      overflowY: "hidden",
      display: "grid",
      gridTemplateColumns: "2fr repeat(3, 1fr) 0.5fr",
      alignItems: "center",
      textAlign: "center",
      padding: "10px 0",
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
          <Box minWidth={75}>
            <Typography className={classes.price}>$56.00</Typography>
          </Box>
          <Box minWidth={150}>
            <InputAmount />
          </Box>
          <Box minWidth={75}>
            <Typography className={classes.total}>$112.00</Typography>
          </Box>
          <Box minWidth={60}>
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
