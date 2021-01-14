import React from "react";

import {
  Divider,
  makeStyles,
  Theme,
  Grid,
  createStyles,
  Tooltip,
} from "@material-ui/core";
import {
  FavoriteBorder,
  ZoomIn,
  Sync,
  AddShoppingCart,
} from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      margin: "auto",
      padding: "12px 25px",
      textTransform: "uppercase",
      background: theme.palette.background.default,
      color: theme.palette.grey[700],
    },
    icon: {
      cursor: "pointer",
      fontSize: 16,
    },
  })
);

const ShoppingIcons = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      alignItems="center"
      justify="space-between"
      className={classes.root}
    >
      <Tooltip title="WISHLIST" placement="top" arrow>
        <FavoriteBorder className={classes.icon} />
      </Tooltip>
      <Divider orientation="vertical" flexItem />
      <Tooltip title="QUICK VIEW" placement="top" arrow>
        <ZoomIn className={classes.icon} />
      </Tooltip>
      <Divider orientation="vertical" flexItem />
      <Tooltip title="COMPARE" placement="top" arrow>
        <Sync className={classes.icon} />
      </Tooltip>
      <Divider orientation="vertical" flexItem />
      <Tooltip title="ADD TO CART" placement="top" arrow>
        <AddShoppingCart className={classes.icon} />
      </Tooltip>
    </Grid>
  );
};

export default ShoppingIcons;
