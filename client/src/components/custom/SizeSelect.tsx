import React from "react";

import clsx from "clsx";
import { Box, makeStyles, Theme, createStyles } from "@material-ui/core";
import { useLocation } from "react-router-dom";

const useDefaultStyles = makeStyles((theme: Theme) =>
  createStyles({
    boxContainer: {
      display: "flex",
      justifyContent: "start",
    },
    selectbox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.palette.grey[200],
      fontFamily: theme.typography.subtitle1.fontFamily,
      fontSize: theme.typography.subtitle1.fontSize,
      margin: "0 5px",
      width: 40,
      height: 40,
      cursor: "pointer",
      "&:hover": {
        backgroundColor: theme.palette.grey[300],
      },
    },
    activeSize: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
      },
    },
  })
);
const useStylesForSinglePage = makeStyles((theme: Theme) =>
  createStyles({
    boxContainer: {
      display: "flex",
      justifyContent: "center",
    },
    selectbox: {
      cursor: "pointer",
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      fontFamily: theme.typography.subtitle1.fontFamily,
      fontWeight: 700,
      fontSize: ".8rem",
      margin: "0 5px",
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
    activeSize: {
      color: theme.palette.primary.main,
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
  })
);

interface Props {
  handleChange: () => void;
  name: string;
  activeSize: any;
}
const SizeSelect: React.FC<Props> = ({ handleChange, name, activeSize }) => {
  const location = useLocation();
  const pathname = location.pathname.split("/");

  const classesForSinglePage = useStylesForSinglePage();
  const defaultClasses = useDefaultStyles();

  const classes = pathname[2] ? classesForSinglePage : defaultClasses;

  return (
    <Box
      onClick={handleChange}
      className={clsx(classes.selectbox, {
        [classes.activeSize]: activeSize[name],
      })}
    >
      {name.toUpperCase()}
    </Box>
  );
};

export default SizeSelect;
