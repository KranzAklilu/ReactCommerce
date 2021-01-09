import React from "react";

import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  createStyles,
  makeStyles,
  Theme,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import {
  SupervisorAccount,
  AllInbox,
  Label,
  Home,
  Build,
  Book,
} from "@material-ui/icons/";

import NavBar from "./NavBar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // background: "#fff",
      // color: "#000",
    },
    list: {
      border: `1px solid ${theme.palette.grey[200]}`,
      width: "97%",
      margin: "0 auto",
    },
    link: {
      color: theme.palette.grey[700],
      textDecoration: "none",
    },
  })
);

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpen: () => void;
}
const NavDrawer: React.FC<Props> = ({ open, setOpen, handleOpen }) => {
  const classes = useStyles();
  const theme = useTheme();
  const aboveSmMQ = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Drawer
      anchor={aboveSmMQ ? "left" : "top"}
      open={open}
      onClose={() => setOpen(false)}
      className={classes.root}
    >
      <NavBar open={open} handleOpen={handleOpen} />
      <List className={classes.list}>
        <Link to="/" className={classes.link} onClick={() => setOpen(false)}>
          <ListItem button>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Divider />
        <Link
          to="/products"
          className={classes.link}
          onClick={() => setOpen(false)}
        >
          <ListItem>
            <ListItemIcon>
              <Label />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>
        </Link>
        <Divider />
        <Link
          to="/blog"
          className={classes.link}
          onClick={() => setOpen(false)}
        >
          <ListItem button>
            <ListItemIcon>
              <Book />
            </ListItemIcon>
            <ListItemText primary="Blog" />
          </ListItem>
        </Link>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <AllInbox />
          </ListItemIcon>
          <ListItemText primary="About us" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <SupervisorAccount />
          </ListItemIcon>
          <ListItemText primary="Contact us" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default NavDrawer;
