import React from "react";

import {
  Box,
  Paper,
  createStyles,
  makeStyles,
  Theme,
  List,
  ListItem,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import img from "../../assets/products-bg.jpeg";
import InputAmount from "../custom/InputAmount";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: "90%",
      margin: "auto",
      backgroundColor: theme.palette.grey[300],
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      textTransform: "uppercase",
      height: 25,
      "& > li": {
        border: "1px solid",
        width: "auto",
        flexGrow: 1,
      },
      "& :nth-child(1)": {
        border: "1px solid pink",
        flexGrow: 2,
      },
    },
    typography: {
      border: "1px solid",
      color: theme.palette.grey[800],
      textAlign: "center",
      fontSize: "0.9rem",
      flexGrow: 1,
    },
    paper: {
      width: "90%",
      margin: "auto",
      border: "1px solid",
    },
    cart: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      textAlign: "center",
      "& >div": {
        border: "1px solid",
        flexGrow: 1,
      },
    },
    products: {
      flexGrow: 5,
    },
    productsImg: {
      width: 100,
    },
    productsDetails: {},
    productsName: {},
    price: {},
    total: {},
  })
);

const ShoppingCart = () => {
  const classes = useStyles();

  return (
    <div>
      <List className={classes.list}>
        <ListItem>
          <Typography className={classes.typography}>Products</Typography>
        </ListItem>
        <ListItem>
          <Typography className={classes.typography}>Products</Typography>
        </ListItem>
        <ListItem>
          <Typography className={classes.typography}>Products</Typography>
        </ListItem>
        <ListItem>
          <Typography className={classes.typography}>Products</Typography>
        </ListItem>
        <ListItem>
          <Typography className={classes.typography}>Products</Typography>
        </ListItem>
      </List>

      <Paper className={classes.paper}>
        <Box className={classes.cart}>
          <Box className={classes.products}>
            <img className={classes.productsImg} src={img} alt="product" />
            <Box className={classes.productsDetails}>
              <Typography className={classes.productsName}>
                Dummy product name
              </Typography>
              <Typography>Color: Black</Typography>
              <Typography>Color: Black</Typography>
            </Box>
          </Box>
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
            <IconButton edge="start" aria-label="close">
              <Close />
            </IconButton>
          </Box>
        </Box>
      </Paper>
    </div>
  );
};

export default ShoppingCart;
