import React from "react";
import {
  Box,
  List,
  ListItem,
  Divider,
  Typography,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";

import SectionTitle from "../custom/SectionTitle";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "90%",
      margin: "75px auto",
      color: theme.palette.grey[700],
      "& li": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        textTransform: "capitalize",
      },
    },
    topBar: {
      backgroundColor: theme.palette.grey[300],
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      textTransform: "uppercase",
      height: 45,
      padding: "0 15px",
    },
    accentItem: {
      marginTop: 5,
      color: theme.palette.secondary.main,
    },
  })
);

const OrderReceipt = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <SectionTitle title="our order" />
      <Box className={classes.topBar}>
        <Typography>product</Typography>
        <Typography>total</Typography>
      </Box>
      <List>
        <ListItem>
          <Typography>Dummy Product Name x 2</Typography>
          <Typography>$86.00</Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <Typography>Dummy Product Name x 1</Typography>
          <Typography>$46.00</Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <Typography>Cart subtotal</Typography>
          <Typography>$115.00</Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <Typography>shipping and handling</Typography>
          <Typography>$15.00</Typography>
        </ListItem>
        <Divider />
        <ListItem className={classes.accentItem}>
          <Typography>order total</Typography>
          <Typography>$170.00</Typography>
        </ListItem>
      </List>
    </Box>
  );
};

export default OrderReceipt;
