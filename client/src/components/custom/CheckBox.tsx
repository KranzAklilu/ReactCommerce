import React from "react";

import { Checkbox, makeStyles, Theme, createStyles } from "@material-ui/core";
import { colors } from "../../utils/checkboxColors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...colors,
  })
);

interface Props {
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  activeColor: any;
}
const CheckBox: React.FC<Props> = ({ name, handleChange, activeColor }) => {
  const classes: any = useStyles();

  return (
    <Checkbox
      className={classes[name]}
      color="default"
      name={name}
      checked={activeColor[name]}
      onChange={handleChange}
    />
  );
};

export default CheckBox;
