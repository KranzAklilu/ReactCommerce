import React from "react";

import { createStyles, makeStyles, Theme, Box } from "@material-ui/core";
import BillingDetails from "./BillingDetails";
import Shipping from "./Shipping";
import OrderReceipt from "./OrderReceipt";
import PaymentMethod from "./PaymentMethod";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
);
export enum item3Enum {
  cart = "quantity",
  wishlist = "stock status",
}
export enum item4Enum {
  cart = "total",
  wishlist = "add to cart",
}

interface Props {
  item3: string;
  item4: string;
}
const CheckOut = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box>
        <BillingDetails />
        <Shipping />
      </Box>
      <Box>
        <OrderReceipt />
        <PaymentMethod />
      </Box>
    </Box>
  );
};

export default CheckOut;
