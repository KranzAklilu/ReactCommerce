import React from "react";

import {
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  useTheme,
  Typography,
  makeStyles,
  CardActions,
  createStyles,
  Theme,
  Grid,
} from "@material-ui/core";

import blog1 from "../../assets/car-2.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 250,
      margin: "20px 0",
      padding: theme.spacing(2),
      boxShadow: "none",
      "&:hover": {
        boxShadow: theme.shadows[4],
      },
      [theme.breakpoints.up("xs")]: {
        maxWidth: 400,
      },
    },
    grid: {
      display: "grid",
      placeItems: "center",
      [theme.breakpoints.up("xs")]: {
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
      },
    },
    contentHeader: {
      marginBottom: "20px",
      display: "flex",
      alignItems: "center",
      color: theme.palette.secondary.main,
      textTransform: "uppercase",
    },
    cardMedia: {
      width: "100%",
      height: "150px",
    },
  })
);

const BlogCards = () => {
  const classes = useStyles();
  const theme = useTheme();
  console.log(theme.breakpoints.values);
  return (
    <Grid className={classes.grid}>
      {[...new Array(3)].map((arr, index) => (
        <Card className={classes.root} key={index}>
          <CardMedia
            component="img"
            src={blog1}
            className={classes.cardMedia}
            alt="Blog Picture"
          />
          <CardContent>
            <Box className={classes.contentHeader}>
              <Box border="2px solid" fontSize="1.6rem" mr="15px" p="10px">
                30
              </Box>
              <Box>
                <Typography>june, 2017</Typography>
                <Typography color="textPrimary">
                  Farniture drawing 2017
                </Typography>
              </Box>
            </Box>
            <Typography>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered If you are going to use a passage
              Lorem Ipsum, you alteration in some form.
            </Typography>
          </CardContent>
          <CardActions>
            <Button color="secondary" variant="text">
              Read more...
            </Button>
          </CardActions>
        </Card>
      ))}
    </Grid>
  );
};

export default BlogCards;
