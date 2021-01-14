import React from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  createStyles,
  makeStyles,
  Theme,
  Button,
} from "@material-ui/core";

import SectionTitle from "../custom/SectionTitle";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    accordion: {
      margin: "15px 0",
    },
    accordionSummary: {
      backgroundColor: theme.palette.grey[200],
      textTransform: "uppercase",
    },
    title: {
      fontWeight: 700,
      color: theme.palette.grey[900],
    },
    btn: {
      marginTop: 25,
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      borderRadius: 0,
      padding: "5px 15px",
      textTransform: "uppercase",
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
    },
  })
);

const PaymentMethod = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <SectionTitle title="payment method" />
      <Accordion className={classes.accordion}>
        <AccordionSummary
          className={classes.accordionSummary}
          expandIcon
          aria-controls="panel1a-content"
        >
          <Typography className={classes.title}>
            Direct bank transfer
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order won't be shipped until
            the funds have cleared in our account.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          className={classes.accordionSummary}
          expandIcon
          aria-controls="panel1a-content"
        >
          <Typography className={classes.title}>Cheque Payment</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            Please send your cheque to Store Name, Store Street, Store Town,
            Store State / County, Store Postcode.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          className={classes.accordionSummary}
          expandIcon
          aria-controls="panel1a-content"
        >
          <Typography className={classes.title}>PayPal</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            Pay via PayPal; you can pay with your credit card if you don’t have
            a PayPal account.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Button className={classes.btn}>place order</Button>
    </Box>
  );
};

export default PaymentMethod;
