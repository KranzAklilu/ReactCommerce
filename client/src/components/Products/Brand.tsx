import React from "react";

import {
  makeStyles,
  createStyles,
  Theme,
  Card,
  CardMedia,
} from "@material-ui/core";

import brand from "../../assets/best-brand.jpeg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "90%",
      padding: 20,
      margin: "auto",
      marginTop: 30,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "none",
      [theme.breakpoints.between("sm", "md")]: {
        display: "none",
      },
    },
    media: {
      objectFit: "cover",
    },
  })
);
const Brand = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        component="img"
        src={brand}
        alt="Best Brand"
      />
    </Card>
  );
};

export default Brand;
