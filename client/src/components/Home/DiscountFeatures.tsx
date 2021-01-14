import React from "react";

import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";

import { ArrowRightAlt } from "@material-ui/icons";
import SwiperCore, { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import discount1 from "../../assets/discount-1.jpg";
import discount2 from "../../assets/discount-2.jpg";

SwiperCore.use([Pagination, Navigation]);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      margin: "auto",
      maxWidth: 300,
      boxShadow: "none",
      transition: "box-shadow 250ms",
      "& .swiper-pagination-bullets": {
        width: "auto",
        left: "unset",
        right: 10,
        bottom: "20px",
      },
      "&:hover": {
        boxShadow: theme.shadows[4],
      },
      [theme.breakpoints.up("xs")]: {
        maxWidth: 400,
      },
      [theme.breakpoints.up("sm")]: {
        maxWidth: 500,
        flexGrow: 3,
        margin: "70px 50px 0",
      },
    },
    card: {
      width: "100%",
      padding: "10px",
      paddingTop: "50px",
      margin: "auto",
      marginTop: theme.spacing(4),
      [theme.breakpoints.up("sm")]: {
        maxHeight: 400,
        margin: 0,
      },
    },
    cardMedia: {
      width: "90%",
      height: 150,
      margin: " auto",
      [theme.breakpoints.up("xs")]: {
        height: 200,
      },
    },
  })
);

const DiscountFeatures = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Card className={classes.card}>
            <CardMedia
              component="img"
              src={discount1}
              alt="Discount Items"
              className={classes.cardMedia}
            />
            <CardContent>
              <Typography variant="h3" color="secondary" gutterBottom>
                Discount 50%
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dignissimos placeat ipsa rerum quisquam repellendus voluptas
                debitis inventore quaerat maiores mollitia vero, quae adipisci
                hic veniam laborum, autem veritatis suscipit sunt.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                color="secondary"
                variant="text"
                endIcon={<ArrowRightAlt fontSize="small" />}
              >
                Get discount
              </Button>
            </CardActions>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className={classes.card}>
            <CardMedia
              component="img"
              src={discount2}
              height="200"
              alt="Discount Items"
              className={classes.cardMedia}
            />
            <CardContent>
              <Typography variant="h3" color="secondary" gutterBottom>
                Discount 50%
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dignissimos placeat ipsa rerum quisquam repellendus voluptas
                debitis inventore quaerat maiores mollitia vero, quae adipisci
                hic veniam laborum, autem veritatis suscipit sunt.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                color="secondary"
                variant="text"
                endIcon={<ArrowRightAlt fontSize="small" />}
              >
                Get discount
              </Button>
            </CardActions>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className={classes.card}>
            <CardMedia
              component="img"
              src={discount1}
              height="200"
              alt="Discount Items"
              className={classes.cardMedia}
            />
            <CardContent>
              <Typography variant="h3" color="secondary" gutterBottom>
                Discount 50%
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dignissimos placeat ipsa rerum quisquam repellendus voluptas
                debitis inventore quaerat maiores mollitia vero, quae adipisci
                hic veniam laborum, autem veritatis suscipit sunt.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                color="secondary"
                variant="text"
                endIcon={<ArrowRightAlt fontSize="small" />}
              >
                Get discount
              </Button>
            </CardActions>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className={classes.card}>
            <CardMedia
              component="img"
              src={discount2}
              height="200"
              alt="Discount Items"
              className={classes.cardMedia}
            />
            <CardContent>
              <Typography variant="h3" color="secondary" gutterBottom>
                Discount 50%
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dignissimos placeat ipsa rerum quisquam repellendus voluptas
                debitis inventore quaerat maiores mollitia vero, quae adipisci
                hic veniam laborum, autem veritatis suscipit sunt.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                color="secondary"
                variant="text"
                endIcon={<ArrowRightAlt fontSize="small" />}
              >
                Get discount
              </Button>
            </CardActions>
          </Card>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default DiscountFeatures;
