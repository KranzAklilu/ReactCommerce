import React, { useState, useEffect } from "react";

import SwiperCore, { Scrollbar, Autoplay, Thumbs, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  makeStyles,
  createStyles,
  Theme,
  Box,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";

import img1 from "../../assets/sp1.jpg";
import img2 from "../../assets/sp2.jpg";
import img3 from "../../assets/sp3.jpg";
import img4 from "../../assets/sp2.jpg";

SwiperCore.use([Scrollbar, Autoplay, Thumbs, A11y]);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      marginTop: 15,
      "& .swiper-slide": {
        opacity: 0.8,
        maxWidth: 100,
        [theme.breakpoints.up("md")]: {
          maxWidth: 175,
        },
      },
      "& .swiper-slide-thumb-active": {
        opacity: 1,
        border: `1px solid ${theme.palette.primary.main}`,
      },
    },
    img: {
      objectFit: "cover",
      height: 125,
      [theme.breakpoints.up("sm")]: {
        height: 150,
      },
      width: "100%",
    },
    swiperButton: {
      top: 15,
      display: "grid",
      placeItems: "center",
      background: theme.palette.grey[200],
      color: theme.palette.grey[500],
      padding: "5px 2px",
      width: 25,
      height: "100%",
      textAlign: "center",
      "&:hover": {
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
      "&::before": {
        all: "unset",
      },
      "&::after": {
        all: "unset",
      },
    },
  })
);

interface Props {
  setThumbsSwiper: React.Dispatch<React.SetStateAction<null>>;
}
const ProductsCarouselThumb: React.FC<Props> = ({ setThumbsSwiper }) => {
  const classes = useStyles();

  return (
    <Swiper
      className={classes.root}
      spaceBetween={10}
      slidesPerView="auto"
      loop
      loopedSlides={2}
      onSwiper={setThumbsSwiper}
      watchSlidesVisibility
      watchSlidesProgress
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
    >
      <Box
        right={0}
        className={`swiper-button-next ${classes.swiperButton}`}
        borderLeft="3px solid #fff"
      >
        <ChevronRight />
      </Box>
      <Box
        left={0}
        className={`swiper-button-prev ${classes.swiperButton}`}
        borderRight="3px solid #fff"
      >
        <ChevronLeft />
      </Box>
      <SwiperSlide>
        <img className={classes.img} src={img1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={classes.img} src={img2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={classes.img} src={img3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={classes.img} src={img4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={classes.img} src={img1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={classes.img} src={img2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={classes.img} src={img3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={classes.img} src={img4} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default ProductsCarouselThumb;
