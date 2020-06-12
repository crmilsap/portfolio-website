import React from "react";
import { makeStyles, Typography, Grid, useMediaQuery } from "@material-ui/core";
import MediaCard from './MediaCard';

const useStyles = makeStyles(theme => ({
  heading: {
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
}));


const Description = classes => {

  const isMDScreen = useMediaQuery("(min-width: 600px)");
  const headerAlignment = isMDScreen ? 'left' : 'center';

  return (
    <>
      <Typography
        variant="h1"
        color="primary"
        gutterBottom
        className={classes.heading}
        align = {headerAlignment}
      >
        Welcome!
      </Typography>
      <Typography paragraph>
        My name is Cory Milsap and I am from Overland Park, KS. I am a Computer
        Science major at the University of Alabama. Using React and Material-UI,
        I put together this personal portfolio site. Feel free to reach out for
        inquiries.
        <br />
        <br />
        Thanks for visiting!
        <br />
        Cory
      </Typography>
    </>
  );
};

export default function About() {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={10} md={6}>
        {Description(classes)}
      </Grid>
      <Grid item>
        <MediaCard/>
      </Grid>
    </>
  );
}
