import React from "react";
import { makeStyles, Typography, Grid, useMediaQuery } from "@material-ui/core";
import QuickFacts from "./QuickFacts";
import MediaCard from "./MediaCard";

const useStyles = makeStyles((theme) => ({
  heading: {
    marginBottom: 20,
    alignSelf: "flex-start",
  },
}));

const Description = (classes) => {
  const isMDScreen = useMediaQuery("(min-width: 600px)");
  const headerAlignment = isMDScreen ? "left" : "center";

  return (
    <>
      <Typography
        variant="h1"
        color="primary"
        gutterBottom
        className={classes.heading}
        align={headerAlignment}
      >
        Welcome!
      </Typography>
      <Typography paragraph>
        My name is Cory Milsap and I am from Overland Park, KS. I am a Computer
        Science major at the University of Alabama. I am most interested in
        buy-side investing, data science, and software engineering. Feel free to
        reach out for inquiries.
      </Typography>
    </>
  );
};

export default function About() {
  const classes = useStyles();
  return (
    <>
      <Grid container direction = 'column' alignItems = 'center' spacing = {4} item xs={11} md={6}>
        <Grid item>
          {Description(classes)}
          </Grid>
          <Grid item>
            <QuickFacts/>
          </Grid>
      </Grid>
      <Grid container item xs = {11} md = {6} justify = 'center'>
        <MediaCard />
      </Grid>
    </>
  );
}
