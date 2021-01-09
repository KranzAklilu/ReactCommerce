import React from "react";

import {
  Box,
  Button,
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  Chip,
  CardActions,
  Typography,
  Theme,
  createStyles,
} from "@material-ui/core";

import heroCard1 from "../../assets/hero-card1.jpg";
import heroCard2 from "../../assets/hero-card2.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.up("sm")]: {
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
      },
      "& :nth-child(2)": {
        flexGrow: 2,
      },
    },
    card: {
      position: "relative",
      padding: "10px 15px",
      maxWidth: 250,
      height: 250,
      margin: `50px auto`,
      flexGrow: 1,
      boxShadow: "none",
      "&:hover": {
        boxShadow: theme.shadows[4],
      },
      [theme.breakpoints.up("xs")]: {
        maxWidth: 350,
      },
      [theme.breakpoints.up("sm")]: {
        maxWidth: 650,
        margin: "10px 30px",
      },
      [theme.breakpoints.up("lg")]: {
        height: 250,
      },
    },
    card2Media: {
      margin: "50px 0px",
      height: 150,
    },
    content: {
      display: "flex",
      justifyContent: "space-between",
    },
    typography: {
      position: "absolute",
      maxWidth: "40%",
      textTransform: "uppercase",
      fontSize: "1.4rem",
      right: 30,
      top: 100,
    },
    btn: {
      "&:hover": {
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
    },
  })
);

const HeroCards = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Chip color="primary" label="New" size="small" />
          <Typography variant="body1">$50.00</Typography>
        </CardContent>
        <CardMedia
          component="img"
          image={heroCard1}
          alt="Furniture Design"
          height="125"
        />
        <CardActions className={classes.content}>
          <Box>
            <Typography variant="subtitle1">Product Name</Typography>
            <Typography variant="body1">Furniture</Typography>
          </Box>
          <Button variant="outlined" className={classes.btn}>
            Buy Now
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardMedia
          className={classes.card2Media}
          component="img"
          image={heroCard2}
          alt="Chier Design"
          height="140"
        />
        <Typography className={classes.typography} variant="h4">
          design by hurst modern <Typography color="primary">-2017</Typography>
        </Typography>
      </Card>
    </Box>
  );
};

export default HeroCards;
