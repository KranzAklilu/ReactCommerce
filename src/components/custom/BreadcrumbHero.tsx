import React from "react";

import {
  Box,
  Button,
  Breadcrumbs,
  makeStyles,
  createStyles,
  Theme,
  Typography,
} from "@material-ui/core";

import banner from "../../assets/products-bg.jpeg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: `url(${banner}) no-repeat center`,
      backgroundSize: "cover",
      color: "#fff",
      height: 250,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        height: 350,
      },
      [theme.breakpoints.up("md")]: {
        height: 450,
      },
    },
    fader: {
      position: "relative",
      height: "100%",
      opacity: 0.4,
      backgroundColor: theme.palette.grey[900],
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    header: {
      fontSize: "2.0rem",
      [theme.breakpoints.up("md")]: {
        fontSize: "3.0rem",
      },
      fontWeight: 700,
    },
    breadCrumbs: {
      position: "absolute",
      color: "#fff",
      left: 20,
      bottom: 20,
    },
  })
);

interface Props {
  page: string;
}
const Hero: React.FC<Props> = ({ page }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.fader}>
        <Typography className={classes.header} variant="h2">
          {page}
        </Typography>
        <Breadcrumbs className={classes.breadCrumbs} aria-label="breadcrumb">
          <Button color="inherit" variant="text">
            Home
          </Button>
          <Button color="inherit" variant="text">
            {page}
          </Button>
        </Breadcrumbs>
      </Box>
    </Box>
  );
};

export default Hero;
