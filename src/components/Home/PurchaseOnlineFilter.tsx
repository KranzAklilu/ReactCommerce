import React from "react";

import { Box, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  btn: {
    textTransform: "capitalize",
    fontWeight: 700,
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

const PurchaseOnlineFilter = () => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexWrap="wrap"
      width="80%"
      m="50px auto"
    >
      <Button className={classes.btn} color="primary" variant="text">
        New Arrivals
      </Button>
      <Button className={classes.btn} color="primary" variant="text">
        best seller
      </Button>
      <Button className={classes.btn} color="primary" variant="text">
        most view
      </Button>
      <Button className={classes.btn} color="primary" variant="text">
        discount
      </Button>
    </Box>
  );
};

export default PurchaseOnlineFilter;
