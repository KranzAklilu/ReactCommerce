import React from "react";

import {
  Divider,
  Typography,
  makeStyles,
  Box,
  createStyles,
  Theme,
} from "@material-ui/core";
import { useLocation } from "react-router-dom";

const useStylesForSectionTitle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "100px 0 50px",
    },
    title: {
      textTransform: "capitalize",
      fontSize: "1.6rem",
    },
    divider: {
      width: "20%",
      height: "3px",
      background: theme.palette.secondary.main,
      margin: "auto",
    },
  })
);

const useStylesForSinglePageDetails = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "20px 0 30px",
    },
    title: {
      textTransform: "uppercase",
      textAlign: "left",
      fontSize: "1.1rem",
      fontWeight: "bold",
      color: theme.palette.grey[800],
    },
    divider: {
      width: "20%",
      height: "3px",
      background: theme.palette.grey[300],
    },
  })
);

interface Props {
  title: String;
}
const SecionTitle: React.FC<Props> = ({ title }) => {
  const location = useLocation();
  const pathname = location.pathname.split("/");

  const classesForSinglePageTitle = useStylesForSinglePageDetails();
  const classesForSectionTitle = useStylesForSectionTitle();

  const classes =
    pathname[1] === "products"
      ? classesForSinglePageTitle
      : classesForSectionTitle;

  return (
    <Box className={classes.root}>
      <Typography variant="h1" align="center" className={classes.title}>
        {title}
      </Typography>
      <Divider className={classes.divider} />
    </Box>
  );
};

export default SecionTitle;
