import React, { useState } from "react";

import {
  makeStyles,
  createStyles,
  Theme,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 200,
      borderRadius: 0,
      padding: 0,
      marginBottom: 10,
      [theme.breakpoints.up("sm")]: {
        marginBottom: 0,
      },
      "& .MuiFilledInput-input": {
        padding: "10px 15px",
        color: theme.palette.grey[700],
      },
      "& .MuiFormHelperText-root": {
        position: "absolute",
        bottom: -20,
      },
      "& :nth-child(1)": {
        padding: 0,
        borderRadius: 0,
      },
      "& ::before": {
        all: "unset",
      },
      "& ::after": {
        borderBottom: "none",
      },
    },
    left: {
      cursor: "pointer",
      height: "100%",
      padding: "0 2px",
      color: theme.palette.grey[700],
      borderRight: "1px solid",
    },
    right: {
      cursor: "pointer",
      height: "100%",
      padding: "0 2px",
      color: theme.palette.grey[700],
      borderLeft: "1px solid",
    },
  })
);

const InputAmount = () => {
  const classes = useStyles();
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState<string>();

  const handleChange = function (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    const value = Number(event.currentTarget.value);
    if (!value && value !== 0) {
      setError("Insert Number Only");
      return;
    }
    if (value < 0) {
      setError("Number Cannot Be Negative");
      return;
    }
    setError("");
    setAmount(value);
  };
  const handleClick = function (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const duty = event.currentTarget.dataset.duty;
    duty === "add"
      ? setAmount((amount) => amount + 1)
      : setAmount((amount) => amount - 1);
    setError("");
    if (amount < 0) {
      setError("Number Cannot Be Negative");
    }
  };

  return (
    <TextField
      className={classes.root}
      value={amount}
      variant="filled"
      error={error ? true : false}
      helperText={error ? error : ""}
      InputProps={{
        onChange: handleChange,
        startAdornment: (
          <InputAdornment
            data-duty="minus"
            onClick={handleClick}
            position="end"
            className={classes.left}
          >
            <Remove />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment
            data-duty="add"
            onClick={handleClick}
            position="end"
            className={classes.right}
          >
            <Add />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default InputAmount;
