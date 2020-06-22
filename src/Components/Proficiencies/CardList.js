import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  CardContent,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    borderRadius: '0px 0px 15px 15px',
  },
  media: {
    height: "100%",
  },
  itemWidth: {
    width: 160,

    [theme.breakpoints.only("sm")]: {
      width: 140,
    },

    [theme.breakpoints.down("xs")]: {
      width: 140,
    },
  },
  cardContent: {
    padding: 5,
  },
}));

const createCards = (imagesObj, classes) => {
  return imagesObj.map((obj, index) => {
    return (
      <Grid item className={classes.itemWidth} key={index}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                image={obj.image}
              />
            </CardActionArea>
            <CardContent className = {classes.cardContent}>
              <Typography variant = 'body1' align = 'center'> {obj.title} </Typography>
            </CardContent>
          </Card>
      </Grid>
    );
  });
};
export default function ImgMediaCard({ imagesObject }) {
  // ImagesObject holds the image and the title for the tooltip

  const classes = useStyles();

  return (
    <Grid container spacing={4} justify="center">
      {createCards(imagesObject, classes)}
    </Grid>
  );
}
