import React from "react";
import { makeStyles, Paper, Typography, Grid, Box } from "@material-ui/core";

const useStyles = makeStyles({

  baselineText: {
    padding: 0,
  },
  factsContainer: {
    width: 275,
    padding: "10px 5px 10px 5px",
    borderRadius: "5px",
    margin: "100px 0px 100px 0px",
  },
});

const makeRow = (leftSide, rightSide) => {
  return (
    <>
      <Grid item xs={3} align="right">
        <Typography variant="body1">
          <Box fontWeight="fontWeightBold">{leftSide}:</Box>
        </Typography>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={8}>
        <Typography variant="body1">{rightSide}</Typography>
      </Grid>
    </>
  );
};
export default function QuickFacts() {
  const classes = useStyles();
  return (
    <Paper elevation={15} className={classes.factsContainer}>
      <Typography color="primary" align="center" variant="h1" gutterBottom>
        Quick Facts
      </Typography>

      <Grid container>
        {makeRow('Major', 'Computer Science')}
        {makeRow('Year', 'Rising Junior')}
        {makeRow('GPA', '3.96/4.00')}
        {makeRow('ACT', '35/36')}
      </Grid>

    </Paper>
  );
}
