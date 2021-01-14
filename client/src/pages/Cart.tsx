import React, { useState } from "react";

import CartHead from "../components/Cart/CartHead";
import ShoppingCart from "../components/Cart/ShoppingCart";
import Wishlist from "../components/Cart/Wishlist";
import CheckOut from "../components/Cart/CheckOut";
import OrderComplete from "../components/Cart/OrderComplete";

import { Box, Paper, createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "90%",
      margin: "auto",
    },
    paper: {
      width: "100%",
      maxWidth: 250,
      margin: "30px auto",
      padding: 20,
      [theme.breakpoints.up("sm")]: {
        maxWidth: 450,
      },
      [theme.breakpoints.up("md")]: {
        width: "95%",
        maxWidth: "unset",
      },
    },
  })
);

export type activeComponentType = {
  cart: boolean;
  wishlist: boolean;
  checkout: boolean;
  ordercomplete: boolean;
};

const CartView = () => {
  const classes = useStyles();
  const [activeComponent, setActiveComponent] = useState<activeComponentType>({
    cart: true,
    wishlist: false,
    checkout: false,
    ordercomplete: false,
  });

  return (
    <Box className={classes.root}>
      <CartHead
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />
      <Paper className={classes.paper}>
        {activeComponent.cart && <ShoppingCart />}
        {activeComponent.wishlist && <Wishlist />}
        {activeComponent.checkout && <CheckOut />}
        {activeComponent.ordercomplete && <OrderComplete />}
      </Paper>
    </Box>
  );
};

export default CartView;
