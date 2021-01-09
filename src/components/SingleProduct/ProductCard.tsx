import React, { useState } from "react";

import {
  Card,
  CardContent,
  makeStyles,
  createStyles,
  Theme,
  Typography,
  Box,
  CardActions,
} from "@material-ui/core";
import { Star, StarBorder } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";

import ProductCheckbox from "./ProductCheckbox";
import ShoppingIcons from "../custom/ShoppingIcons";
import ProductsCarouselHead from "./ProductsCarouselHead";
import ProductsCarouselThumb from "./ProductsCarouselThumb";
import InputAmount from "../custom/InputAmount";
import SizeSelect from "../custom/SizeSelect";

import { useProperty } from "../../context/ProductsProperty";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "90%",
      maxWidth: 250,
      margin: "50px auto",
      padding: 20,
      [theme.breakpoints.up("sm")]: {
        maxWidth: 450,
      },
      [theme.breakpoints.up("md")]: {
        maxWidth: "unset",
        display: "flex",
      },
    },
    productName: {
      margin: "20px 0",
      fontSize: "1.1rem",
      textTransform: "uppercase",
      fontWeight: 700,
      [theme.breakpoints.up("sm")]: {
        fontSize: "1.1rem",
      },
      [theme.breakpoints.up("md")]: {
        marginTop: 0,
      },
    },
    productDetails: {
      fontSize: ".9rem",
      margin: "20px 0",
    },
    nameAndRate: {
      marginBottom: 30,
      [theme.breakpoints.up("sm")]: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 0,
      },
    },
    flexContainer: {
      display: "flex",
      marginBottom: 20,
      alignItems: "center",
    },
    rateContainer: {
      display: "flex",
      alignItems: "center",
    },
    propertyTitle: {
      marginRight: 10,
      fontSize: ".9rem",
      fontWeight: 700,
    },
    productAction: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
        justifyContent: "start",
      },
    },
  })
);

const ProductCard = () => {
  const classes = useStyles();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { activeSize, handleSizeChange: handleChange } = useProperty();
  const allBoxes = ["xl", "lg", "md", "sm", "xs"];

  return (
    <Card className={classes.root}>
      {thumbsSwiper && <ProductsCarouselHead thumbsSwiper={thumbsSwiper} />}
      <CardContent>
        <Box className={classes.nameAndRate}>
          <Typography className={classes.productName}>
            Dummy product name
          </Typography>
          <Box className={classes.rateContainer}>
            <Rating
              value={4}
              emptyIcon={<StarBorder fontSize="small" />}
              icon={<Star fontSize="small" color="secondary" />}
            />
            <Typography variant="subtitle2">(27 Rating)</Typography>
          </Box>
        </Box>
        <Typography variant="h5" color="secondary">
          $56.00
        </Typography>
        <Typography className={classes.productDetails} variant="subtitle1">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have be suffered alteration in some form, by injected
          humou or randomised words which donot look even slightly believable.
          If you are going to use a passage of Lorem Ipsum.
        </Typography>
        <Box className={classes.flexContainer}>
          <Typography className={classes.propertyTitle}>Color</Typography>
          <ProductCheckbox />
        </Box>
        <Box className={classes.flexContainer}>
          <Typography className={classes.propertyTitle}>Size</Typography>
          {allBoxes.map((name, index) => (
            <SizeSelect
              key={index}
              name={name}
              handleChange={handleChange}
              activeSize={activeSize}
            />
          ))}
        </Box>
        <Box className={classes.productAction}>
          <InputAmount />
          <ShoppingIcons />
        </Box>
        <ProductsCarouselThumb setThumbsSwiper={setThumbsSwiper} />
      </CardContent>
    </Card>
  );
};

export default ProductCard;
