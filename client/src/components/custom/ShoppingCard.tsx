import React from "react";

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  makeStyles,
  Chip,
  Typography,
  Theme,
  createStyles,
} from "@material-ui/core";
import { Star, StarBorder } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";

import ShoppingIcons from "./ShoppingIcons";
import card1 from "../../assets/car-2.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      maxWidth: 250,
      margin: "20px auto",
      padding: "15px",
      overflow: "visible",
      boxShadow: "none",
      "&:hover": {
        boxShadow: theme.shadows[4],
      },
      [theme.breakpoints.up("xs")]: {
        maxWidth: 400,
      },
      [theme.breakpoints.up("md")]: {
        maxWidth: 250,
      },
    },
    title: {
      textTransform: "uppercase",
    },
    cardHeader: {
      posititon: "absolute",
      bottom: 50,
      display: "flex",
      justifyContent: "space-between",
    },
    cardContent: {
      marginTop: "15px",
      textAlign: "center",
    },
    cardMedia: {
      width: "100%",
      height: "150px",
    },
  })
);

const ShoppingCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardHeader}>
        <Chip color="primary" label="New" />
        <Typography>$56.20</Typography>
      </CardContent>
      <CardMedia
        component="img"
        className={classes.cardMedia}
        src={card1}
        alt="Featured Image"
      />
      <CardContent className={classes.cardContent}>
        <Typography className={classes.title}>Dummy product name</Typography>
        <Rating
          value={4}
          emptyIcon={<StarBorder />}
          icon={<Star color="secondary" />}
        />
      </CardContent>
      <CardActions>
        <ShoppingIcons />
      </CardActions>
    </Card>
  );
};

export default ShoppingCard;
