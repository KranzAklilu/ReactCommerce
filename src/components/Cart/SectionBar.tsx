import React from "react";

import {
  createStyles,
  makeStyles,
  Theme,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "90%",
      margin: "auto",
      backgroundColor: theme.palette.grey[300],
      display: "grid",
      gridTemplateColumns: "2fr repeat(3, 1fr) 0.5fr",
      textTransform: "uppercase",
      height: 45,
      padding: 0,
    },
    typography: {
      color: theme.palette.grey[800],
      textAlign: "center",
      textTransform: "capitalize",
      fontSize: "0.9rem",
      flexGrow: 1,
    },
  })
);
export enum item3Enum {
  cart = "quantity",
  wishlist = "stock status",
}
export enum item4Enum {
  cart = "total",
  wishlist = "add to cart",
}

interface Props {
  item3: string;
  item4: string;
}
const SectionBar: React.FC<Props> = ({ item3, item4 }) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <Typography className={classes.typography}>products</Typography>
      </ListItem>
      <ListItem>
        <Typography className={classes.typography}>price</Typography>
      </ListItem>
      <ListItem>
        <Typography className={classes.typography}>{item3}</Typography>
      </ListItem>
      <ListItem>
        <Typography className={classes.typography}>{item4}</Typography>
      </ListItem>
      <ListItem>
        <Typography className={classes.typography}>remove</Typography>
      </ListItem>
    </List>
  );
};

export default SectionBar;
