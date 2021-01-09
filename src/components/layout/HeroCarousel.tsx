import React from "react";

import SwiperCore, { Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Box,
  makeStyles,
  Theme,
  createStyles,
  Typography,
} from "@material-ui/core";

import car1 from "../../assets/car-1.jpg";
import car2 from "../../assets/car-2.jpg";
import { ChevronRight, ChevronLeft } from "@material-ui/icons";

SwiperCore.use([Pagination, Scrollbar, A11y, Autoplay]);

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    container: {
      "& .swiper-pagination-bullets": {
        width: "auto",
        right: "unset",
        left: "10%",
        bottom: "20px",
      },
    },
    typography: {
      position: "absolute",
      transition: "position 1s ease",
      left: "60%",
    },
    moveUp: {
      top: "unset",
    },
    img: {
      objectFit: "cover",
      width: "100%",
      height: "200px",

      [theme.breakpoints.up("sm")]: {
        height: "300px",
      },
      [theme.breakpoints.up("md")]: {
        height: "400px",
      },
    },
    swiperButton: {
      textAlign: "center",
      display: "inline",
      width: 40,
      height: 40,
      lineHeight: "30px",
      fontSize: ".8rem",
      "&::before": {
        all: "unset",
      },
      "&::after": {
        all: "unset",
      },
    },
  })
);

const HeroCarousel = () => {
  const classes = useStyle();
  return (
    <Box m="30px 0" position="relative" className={classes.container}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        pagination={{ clickable: true }}
        scrollbar={false}
        navigation={{
          nextEl: ".carousel-next",
          prevEl: ".carousel-prev",
        }}
      >
        <Box
          right={0}
          className={`carousel-next swiper-button-next ${classes.swiperButton}`}
        >
          <ChevronRight fontSize="small" />
        </Box>
        <Box
          left={0}
          className={`carousel-prev swiper-button-prev ${classes.swiperButton}`}
        >
          <ChevronLeft fontSize="small" />
        </Box>
        <SwiperSlide>
          <Box position="relative">
            <img className={classes.img} src={car1} alt="" />
            <Typography
              variant="h6"
              className={`${classes.typography} ${classes.typography}`}
            >
              furniture
            </Typography>
            <Typography
              variant="body1"
              className={`${classes.typography} ${classes.typography}`}
            >
              gallery 2017
            </Typography>
            <Typography
              variant="body1"
              className={`${classes.typography} ${classes.typography}`}
            >
              gallery 2017
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <img className={classes.img} src={car2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={classes.img} src={car1} alt="" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default HeroCarousel;
