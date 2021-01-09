import React from "react";

import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
  useTheme,
  createStyles,
  Theme,
} from "@material-ui/core";

import upComming from "../../assets/up-comming.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 300,
      margin: "auto",
      marginTop: 70,
      width: "100%",
      boxShadow: "none",
      "&:hover": {
        boxShadow: theme.shadows[4],
      },
      [theme.breakpoints.up("xs")]: {
        maxWidth: 400,
      },
      [theme.breakpoints.up("sm")]: {
        maxWidth: 500,
        flexGrow: 1,
      },
    },
    typography: {
      textTransform: "uppercase",
      fontSize: "1.2rem",
    },
    cardMedia: {
      width: "90%",
      margin: "20px auto",
    },
  })
);

const UpCommingFurniture = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        src={upComming}
        height="200"
        alt="Bed"
        className={classes.cardMedia}
      />
      <CardContent>
        <Typography className={classes.typography} variant="h2" align="center">
          indoor furniture
        </Typography>
        <Typography
          className={classes.typography}
          variant="body1"
          align="center"
        >
          $200.00
        </Typography>
        <Box
          display="flex"
          maxWidth="70%"
          m="auto"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Box textAlign="center">
            <Box
              display="inline-block"
              color="primary"
              border={`1px solid ${theme.palette.secondary.main}`}
              borderRadius="50%"
              p="15px 20px"
            >
              0
            </Box>
            <Typography variant="body1">Days</Typography>
          </Box>
          <Box textAlign="center">
            <Box
              display="inline-block"
              color="primary"
              border={`1px solid ${theme.palette.secondary.main}`}
              borderRadius="50%"
              p="15px 20px"
            >
              0
            </Box>
            <Typography variant="body1">Hours</Typography>
          </Box>
          <Box textAlign="center">
            <Box
              display="inline-block"
              color="primary"
              border={`1px solid ${theme.palette.secondary.main}`}
              borderRadius="50%"
              p="15px 15px"
            >
              00
            </Box>
            <Typography variant="body1">Mins</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UpCommingFurniture;
