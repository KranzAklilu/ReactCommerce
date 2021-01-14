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
import { activeComponentType } from "./ProductsDetails";

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
        maxWidth: 250,
      },
    },
    listItem: {
      width: "100%",
      padding: "10px 15px",
      background: "#fff",
      marginTop: 10,
      fontSize: "1.3rem",
      fontWeight: "bold",
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
    },
  })
);

interface Props {
  activeComponent: activeComponentType;
  setActiveComponent: React.Dispatch<React.SetStateAction<activeComponentType>>;
}
const ProductHead: React.FC<Props> = ({
  activeComponent,
  setActiveComponent,
}) => {
  const classes = useStyles();

  const handleClickedComponent = function (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) {
    setActiveComponent({
      description: false,
      review: false,
      information: false,
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
          [classes.activeListItem]: activeComponent.description,
        })}
        data-component="description"
        onClick={handleClickedComponent}
      >
        <ListItemText className={classes.header}>Description</ListItemText>
      </ListItem>
      <ListItem
        className={clsx(classes.listItem, {
          [classes.activeListItem]: activeComponent.review,
        })}
        data-component="review"
        onClick={handleClickedComponent}
      >
        <ListItemText className={classes.header}>Review</ListItemText>
      </ListItem>
      <ListItem
        className={clsx(classes.listItem, {
          [classes.activeListItem]: activeComponent.information,
        })}
        data-component="information"
        onClick={handleClickedComponent}
      >
        <ListItemText className={classes.header}>Information</ListItemText>
      </ListItem>
    </List>
  );
};

export default ProductHead;
