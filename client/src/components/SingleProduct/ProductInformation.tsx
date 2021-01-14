import React from "react";

import SectionTitle from "../custom/SectionTitle";
import { Typography, createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    typography: {
      fontSize: ".9rem",
      marginBottom: 20,
      color: theme.palette.grey[800],
    },
  })
);
const ProductInformation = () => {
  const classes = useStyles();
  return (
    <>
      <SectionTitle title="Dummy products Information" />
      <Typography className={classes.typography}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic nam quod
        saepe dolorem dolore tempora tempore tenetur, veniam, doloremque
        veritatis doloribus modi exercitationem similique odio rem. Vitae veniam
        quas quod, laudantium commodi molestiae laboriosam cupiditate quia neque
        numquam aliquid sed, iste id, consequuntur maiores et hic eos dolores
        voluptates accusantium!
      </Typography>
      <Typography className={classes.typography}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic nam quod
        saepe dolorem dolore tempora tempore tenetur, veniam, doloremque
        veritatis doloribus modi exercitationem similique odio rem. Vitae veniam
        quas quod, laudantium commodi molestiae laboriosam cupiditate quia neque
        numquam aliquid sed, iste id, consequuntur maiores et hic eos dolores
        voluptates accusantium!
      </Typography>
      <Typography className={classes.typography}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic nam quod
        saepe dolorem dolore tempora tempore tenetur, veniam, doloremque
        veritatis doloribus modi exercitationem similique odio rem. Vitae veniam
        quas quod, laudantium commodi molestiae laboriosam cupiditate quia neque
        numquam aliquid sed, iste id, consequuntur maiores et hic eos dolores
        voluptates accusantium!
      </Typography>
    </>
  );
};

export default ProductInformation;
