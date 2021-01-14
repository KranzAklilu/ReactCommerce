import React, { useState } from "react";

import {
  Collapse,
  Paper,
  Typography,
  Divider,
  Slider,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    slider: {
      width: "70%",
    },
  })
);

interface Props {
  repeatedClasses: Record<"hr" | "collapse" | "paper" | "heading", string>;
}
const PriceCollapse: React.FC<Props> = ({ repeatedClasses }) => {
  const classes = useStyle();
  const [collapseToggle, setCollapseToggle] = useState(true);
  const [price, setPrice] = useState<number[]>([40, 900]);

  const handleCollapse = function () {
    setCollapseToggle(!collapseToggle);
  };
  const handleChange = (event: any, newValue: number | number[]) => {
    setPrice(newValue as number[]);
  };
  return (
    <Collapse
      className={repeatedClasses.collapse}
      in={collapseToggle}
      collapsedHeight={30}
    >
      <Typography
        className={repeatedClasses.heading}
        align="left"
        variant="h5"
        onClick={handleCollapse}
      >
        Price
      </Typography>
      <Divider className={repeatedClasses.hr} />
      <Paper elevation={4} className={repeatedClasses.paper}>
        <Typography variant="body2" gutterBottom>
          Your Range{" "}
          <Typography variant="subtitle2">
            ${price[0]}-${price[1]}
          </Typography>
        </Typography>
        <Slider
          className={classes.slider}
          value={price}
          max={2000}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          //   getAriaValueText='$'
        />
      </Paper>
    </Collapse>
  );
};

export default PriceCollapse;
