import React from "react";
import VerticalTab from "./VerticalTab";
import { Grid, Typography } from "@material-ui/core";


export default function Proficiencies() {
  return (
    <Grid container direction="column">
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
