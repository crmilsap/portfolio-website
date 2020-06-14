import React from "react";
import {
  TextField,
  Grid,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import NetlifyForm from "react-netlify-form";

const useStyles = makeStyles((theme) => ({
  fullWidth: {
    width: "100%",
  },
  margin10: {
    margin: "10 0 10 0",
  },
}));
export default function Contact() {
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
  };

  return (
    <>
      <Typography align="center" variant="h1" color="primary" gutterBottom>
        Contact Me!
      </Typography>
      <NetlifyForm name="Contact Form">
        {({ loading, error, success }) => (
          <div>
            {loading && (
              <Alert
                className={classes.margin10}
                onClose={handleClose}
                severity="warning"
              >
                Loading...
              </Alert>
            )}
            {error && (
              <Alert
                className={classes.margin10}
                onClose={handleClose}
                severity="error"
              >
                Your information was not sent. Please try again later.
              </Alert>
            )}
            {success && (
              <Alert
                className={classes.margin10}
                onClose={handleClose}
                severity="success"
              >
                Thank you for contacting me!
              </Alert>
            )}
            {!loading && !success && (
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <TextField
                    className={classes.fullWidth}
                    required
                    label="Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    className={classes.fullWidth}
                    required
                    label="Email"
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    className={classes.fullWidth}
                    required
                    multiline
                    label="Message"
                    rows={6}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.fullWidth}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            )}
          </div>
        )}
      </NetlifyForm>
    </>
  );
}
