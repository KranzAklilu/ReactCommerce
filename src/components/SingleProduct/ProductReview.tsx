import React from "react";

import {
  Avatar,
  Box,
  Typography,
  createStyles,
  makeStyles,
  Theme,
  Button,
  FormControl,
  TextField,
  TextareaAutosize,
} from "@material-ui/core";
import { Star, StarBorder, Reply, Close } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";

import SectionTitle from "../custom/SectionTitle";
import avatarImg from "../../assets/avatar.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    review: {
      textAlign: "center",
      [theme.breakpoints.up("md")]: {
        marginBottom: 30,
        textAlign: "left",
        display: "grid",
        gridTemplateColumns: "200px 1fr 200px",
        gridTemplateRows: "50px 1fr",
      },
    },
    typography: {
      fontSize: ".8rem",
      margin: "30px 0",
      color: theme.palette.grey[800],
      [theme.breakpoints.up("md")]: {
        margin: "10px 0",
        gridColumn: "2 / 4",
      },
    },
    avatar: {
      width: 75,
      height: 75,
      margin: "auto",
      [theme.breakpoints.up("md")]: {
        height: "100%",
        maxHeight: 150,
        width: 100,
        gridColumn: "1",
        gridRow: "1 / span 2",
      },
    },
    avatarImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    reviewDetails: {
      // display: "inline",
    },
    buttonCont: {
      gridColumn: "3",
      // display: "inline",
    },
    button: {
      margin: 5,
      color: theme.palette.grey[500],
      backgroundColor: theme.palette.grey[300],
      borderRadius: 0,
      "&:hover": {
        color: "#fff",
        backgroundColor: theme.palette.primary.main,
      },
    },
    textField: {
      marginBottom: 10,
      width: "100%",
      "& .MuiInputBase-root": {
        backgroundColor: theme.palette.grey[100],
        color: theme.palette.grey[900],
        borderRadius: 0,
      },
    },
    formControl: {
      width: "100%",
    },
    textFieldCont: {
      [theme.breakpoints.up("md")]: {
        display: "flex",
        gap: 10,
      },
    },
    textArea: {
      maxWidth: "100%",
      border: "none",
      backgroundColor: theme.palette.grey[100],
      color: theme.palette.grey[900],
    },
    submitButton: {
      maxWidth: 150,
      margin: "25px 0",
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      borderRadius: 0,
      "&:hover": {
        color: theme.palette.grey[900],
      },
    },
  })
);

const ProductReview = () => {
  const classes = useStyles();

  return (
    <>
      <SectionTitle title="Customer Review" />
      <Box className={classes.review}>
        <Avatar variant="square" className={classes.avatar}>
          <img className={classes.avatarImg} src={avatarImg} alt="User Img" />
        </Avatar>
        <Box className={classes.reviewDetails}>
          <Typography>Gerald Barnes</Typography>
          <Typography variant="subtitle2">27 Jun, 2017 at 2:30pm</Typography>
        </Box>
        <Box className={classes.buttonCont}>
          <Button className={classes.button}>
            <Reply fontSize="small" />
          </Button>
          <Button className={classes.button}>
            <Close fontSize="small" />
          </Button>
        </Box>
        <Typography className={classes.typography}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic nam quod
          dolorem dolore tempora tempore tenetur, veniam, doloremque saepe
          doloribus modi exercitationem similique odio rem. Vitae eos
        </Typography>
      </Box>
      <SectionTitle title="Leave Your Review" />
      <Box>
        <Typography color="textPrimary">Your Rating</Typography>
        <Rating
          value={4}
          emptyIcon={<StarBorder />}
          icon={<Star color="secondary" />}
        />
      </Box>
      <FormControl className={classes.formControl} margin="dense">
        <Box className={classes.textFieldCont}>
          <TextField
            className={classes.textField}
            variant="filled"
            label="Your name here..."
          />
          <TextField
            className={classes.textField}
            variant="filled"
            label="Subject..."
          />
        </Box>
        <TextareaAutosize
          className={classes.textArea}
          rowsMin={7}
          rowsMax={15}
          aria-label="maximum height"
          placeholder="Your review here.."
        />
        <Button className={classes.submitButton}>Submit</Button>
      </FormControl>
    </>
  );
};

export default ProductReview;
