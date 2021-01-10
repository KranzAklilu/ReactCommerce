import React, { useState } from "react";
import {
  Box,
  FormControl,
  Input,
  Select,
  MenuItem,
  TextareaAutosize,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";

import SectionTitle from "../custom/SectionTitle";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "90%",
      margin: "50px auto",
    },
    form: {
      width: "100%",
      "& > *": {
        marginTop: 15,
      },
    },
  })
);

const Shipping = () => {
  const classes = useStyles();
  const [country, setCountry] = useState("ethiopia");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCountry(event.target.value as string);
  };
  return (
    <Box className={classes.root}>
      <SectionTitle title="ship to different address" />
      <FormControl className={classes.form}>
        <Input placeholder="Your name here..." />
        <Input placeholder="Phone here..." />
        <Input placeholder="Company name here..." />
        <Select
          value={country}
          onChange={handleChange}
          style={{ textTransform: "capitalize" }}
        >
          <MenuItem value="ethiopia">Ethiopia</MenuItem>
          <MenuItem value="united states">United States</MenuItem>
        </Select>
        <TextareaAutosize
          rowsMin={7}
          rowsMax={15}
          aria-label="address"
          placeholder="Your full address here.."
        />
      </FormControl>
    </Box>
  );
};

export default Shipping;
