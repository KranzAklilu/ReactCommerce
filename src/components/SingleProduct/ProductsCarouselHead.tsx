import React, { useEffect, useState } from "react";

import SwiperCore, { EffectFade, Autoplay, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../../assets/sp1.jpg";
import img2 from "../../assets/sp2.jpg";
import img3 from "../../assets/sp3.jpg";
import img4 from "../../assets/sp2.jpg";

import { makeStyles, createStyles, Theme, Box } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.up("md")]: {
        maxWidth: 500,
      },
    },
    img: {
      objectFit: "cover",
      height: 300,
      width: "100%",
      [theme.breakpoints.up("md")]: {
        height: 400,
      },
      [theme.breakpoints.up("md")]: {
        height: 500,
      },
    },
  })
);

SwiperCore.use([Autoplay, Thumbs, EffectFade]);

interface Props {
  thumbsSwiper: null;
}
const ProductsCarouselHead: React.FC<Props> = ({ thumbsSwiper }) => {
  const classes = useStyles();

  return (
    <div>
      <Swiper
        className={classes.root}
        thumbs={{ swiper: thumbsSwiper }}
        effect="fade"
        spaceBetween={10}
        autoplay={{ delay: 5000 }}
        loop
        loopedSlides={2}
      >
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
    </div>
  );
};

export default ProductsCarouselHead;
