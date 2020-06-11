import React  from "react";
import Navbar from "./Components/Navbar";
import CoryMilsap from "./Components/Header/Name";
import BackgroundVideo from "./Components/Header/BackgroundVideo";
import About from "./Components/Welcome";
import QuickFacts from "./Components/QuickFacts";
import Proficiencies from "./Components/Proficiencies";
import Experience from './Components/Experience';
import { Grid, makeStyles } from "@material-ui/core";
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
  header: {
    margin: "0px",
    position: "relative",
    height: "60vh",
    width: "100vw",
    overflow: "hidden",
  },
  ContentContainer: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
  },
  WideGrid: {
    minWidth: '80%',
  },
  TopMargin: {
    marginTop: 75,

    [theme.breakpoints.down('sm')]: {
      marginTop: 25,
    },
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <>
      <header className={classes.header}>
        <BackgroundVideo />
        <CoryMilsap />
      </header>

      <Navbar />

      <main>
        <section className={classes.ContentContainer}>
          <Grid container direction="column" alignItems="center">
            <Grid
              container
              item
              xs={11}
              md={6}
              className={classNames(classes.WideGrid, classes.TopMargin)}
              alignItems="center"
              justify="space-around"
            >
              <About />
            </Grid>

            <Grid item xs={11} md={6}>
              <QuickFacts />
            </Grid>

            <Grid item xs={11} md={9} className={classes.WideGrid}>
              <Experience />
            </Grid>

            <Grid item xs={10} md={9} className={classes.WideGrid}>
              <Proficiencies />
            </Grid>
          </Grid>
        </section>
      </main>
    </>
  );
};

export default App;
