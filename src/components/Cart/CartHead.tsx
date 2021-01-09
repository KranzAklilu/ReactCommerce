import React from "react";

import clsx from "clsx";
import {
  List,
  ListItem,
  ListItemText,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { activeComponentType } from "../../pages/Cart";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 290,
      margin: "auto",
      marginTop: 25,
      [theme.breakpoints.up("sm")]: {
        maxWidth: 490,
      },
      [theme.breakpoints.up("md")]: {
        display: "flex",
        gap: 25,
        maxWidth: "unset",
      },
    },
    listItem: {
      width: "100%",
      padding: "10px 15px",
      background: "#fff",
      marginTop: 10,
      fontSize: "1.3rem",
      fontWeight: "bold",
      textAlign: "center",
      "&:hover": {
        cursor: "pointer",
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
    },
    header: {
      // color: theme.palette.grey[800],
    },
    activeListItem: {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    link: {
      color: theme.palette.grey[700],
      textDecoration: "none",
      textTransform: "uppercase",
    },
  })
);

interface Props {
  activeComponent: activeComponentType;
  setActiveComponent: React.Dispatch<React.SetStateAction<activeComponentType>>;
}
const CartHead: React.FC<Props> = ({ activeComponent, setActiveComponent }) => {
  const classes = useStyles();

  const handleClickedComponent = function (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) {
    setActiveComponent({
      cart: false,
      wishlist: false,
      checkout: false,
      ordercomplete: false,
    });
    const componentName = event.currentTarget.dataset.component;
    componentName &&
      setActiveComponent((component) => ({
        ...component,
        [componentName]: true,
      }));
  };

  return (
    <List className={classes.root}>
      <ListItem
        className={clsx(classes.listItem, {
          [classes.activeListItem]: activeComponent.cart,
        })}
        data-component="cart"
        onClick={handleClickedComponent}
      >
        <ListItemText className={classes.header}>ShoppingCart</ListItemText>
      </ListItem>
      <ListItem
        className={clsx(classes.listItem, {
          [classes.activeListItem]: activeComponent.wishlist,
        })}
        data-component="wishlist"
        onClick={handleClickedComponent}
      >
        <ListItemText className={classes.header}>Wishlist</ListItemText>
      </ListItem>
      <ListItem
        className={clsx(classes.listItem, {
          [classes.activeListItem]: activeComponent.checkout,
        })}
        data-component="checkout"
        onClick={handleClickedComponent}
      >
        <ListItemText className={classes.header}>CheckOut</ListItemText>
      </ListItem>
      <ListItem
        className={clsx(classes.listItem, {
          [classes.activeListItem]: activeComponent.ordercomplete,
        })}
        data-component="ordercomplete"
        onClick={handleClickedComponent}
      >
        <ListItemText className={classes.header}>OrderComplete</ListItemText>
      </ListItem>
    </List>
  );
};

export default CartHead;
