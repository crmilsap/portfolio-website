import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardMedia,
  Tooltip,
  Grid,
} from "@material-ui/core";


const useStyles = makeStyles( theme => ({
  root: {
    width: '100%',
  },
  media: {
    height: '100%',
  },
  itemWidth: {
    width: 160,

    [theme.breakpoints.only('sm')]: {
      width: 120,
    },

    [theme.breakpoints.down('xs')]: {
      width: 95,
    },
  },
}));

const createCards = (imagesObj, classes) => {

  return (
    imagesObj.map((obj, index) => {
      return (
        <Grid item className = {classes.itemWidth} key = {index}>
        <Tooltip title={obj.title}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                image={obj.image}
              />
            </CardActionArea>
          </Card>
        </Tooltip>
        </Grid>
      );
    })
  );
}
export default function ImgMediaCard({imagesObject}) {
  // ImagesObject holds the image and the title for the tooltip
  
  const classes = useStyles();

  return (
  <Grid container spacing = {4} justify = 'center'>
    {createCards(imagesObject, classes)}
  </Grid>
  );
}
