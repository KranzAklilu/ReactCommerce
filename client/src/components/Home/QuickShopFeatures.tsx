import {
  Box,
  makeStyles,
  createStyles,
  Theme,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";

import SwiperCore, { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import ShoppingCard from "../custom/ShoppingCard";

SwiperCore.use([Navigation, A11y]);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      maxWidth: 350,
      margin: "auto",
      overflowX: "visible",
      [theme.breakpoints.up("sm")]: {
        maxWidth: "90%",
      },
    },
    slider: {
      width: "100%",
      "& .swiper-slide": {
        [theme.breakpoints.up("sm")]: {
          width: "20%",
          minWidth: 300,
          margin: "auto",
        },
        width: "100%",
      },
    },
    swiperButton: {
      border: "1px solid #e9e9e9",
      display: "inline",
      background: "#fff",
      color: theme.palette.grey[500],
      padding: "5px 2px",
      width: 30,
      height: "auto",
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

const QuickShopFeatures = () => {
  const classes = useStyles();
  const theme = useTheme();
  const screenWidthSm = useMediaQuery(theme.breakpoints.down("xs"));
  const screenWidthMd = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const screenWidthLg = useMediaQuery(theme.breakpoints.down("lg"));
  const slidesNum = screenWidthSm ? 1 : screenWidthMd ? 2 : 3;

  console.log(slidesNum);

  return (
    <Box className={classes.root}>
      <Box right={-15} className={`swiper-button-next ${classes.swiperButton}`}>
        n<br />e<br />x<br />t
      </Box>
      <Box left={-15} className={`swiper-button-prev ${classes.swiperButton}`}>
        p<br />r<br />e<br />v
      </Box>
      <Swiper
        spaceBetween={20}
        className={classes.slider}
        slidesPerView="auto"
        loop
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        <SwiperSlide>
          <ShoppingCard />
        </SwiperSlide>
        <SwiperSlide>
          <ShoppingCard />
        </SwiperSlide>
        <SwiperSlide>
          <ShoppingCard />
        </SwiperSlide>
        <SwiperSlide>
          <ShoppingCard />
        </SwiperSlide>
        <SwiperSlide>
          <ShoppingCard />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default QuickShopFeatures;
