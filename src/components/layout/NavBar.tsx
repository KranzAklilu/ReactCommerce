import React from "react";

import clsx from "clsx";
import {
  IconButton,
  Toolbar,
  AppBar,
  Box,
  createStyles,
  makeStyles,
  Theme,
  useTheme,
  useMediaQuery,
  Badge,
} from "@material-ui/core";
import { Close, Menu, ShoppingCart } from "@material-ui/icons/";

import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      padding: 0,
      background: "#fff",
      color: "#000",
      height: "auto",
    },
    appBarOpen: { width: "97%", margin: "10px 0 10px" },
    appBarAboveSm: {
      marginBottom: 100,
    },
    toolBar: {
      width: "100%",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: "space-between",
      [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
      },
    },
    logo: {
      marginLeft: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        marginLeft: 0,
      },
    },
    icons: {
      marginRight: theme.spacing(2),
      color: "#000",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(2),
      },
    },
  })
);

interface Props {
  open: boolean;
  handleOpen: () => void;
}

const NavBar: React.FC<Props> = ({ open, handleOpen }) => {
  const classes = useStyles();
  const theme = useTheme();
  const aboveSmMQ = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <AppBar
      id="back-to-top-anchor"
      className={clsx(classes.root, {
        [classes.appBarOpen]: open,
        [classes.appBarAboveSm]: aboveSmMQ && open,
      })}
      position="static"
    >
      <Toolbar className={classes.toolBar}>
        <IconButton
          edge="start"
          className={classes.icons}
          onClick={handleOpen}
          color="inherit"
          aria-label="menu"
        >
          {open ? <Close /> : <Menu />}
        </IconButton>
        <Box className={classes.logo}>
          <Link to="/products/2">
            <img src={logo} alt="" />
          </Link>
        </Box>
        {aboveSmMQ && (
          <Link to="/cart">
            <IconButton className={classes.icons} aria-label="shopping cart">
              <Badge badgeContent={4} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
