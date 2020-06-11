import React from "react";
import VerticalTab from "./VerticalTab";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  GridContainer: {
    marginTop: "100px",
  },

}));

export default function Proficiencies() {
  const classes = useStyles();
  return (
    <Grid className={classes.GridContainer} container direction="column">
      <Grid item>
        <Typography variant="h1" color="primary" gutterBottom>
          Proficiencies
        </Typography>
      </Grid>
      <Grid item>
        <VerticalTab
          labels={["Languages", "Frameworks", "Libraries", "Other"]}
        />
      </Grid>
    </Grid>
  );
}
