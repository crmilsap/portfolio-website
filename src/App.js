import React, { useRef } from "react";
import Navbar from "./Components/Navbar";
import CoryMilsap from "./Components/Header/Name";
import BackgroundVideo from "./Components/Header/BackgroundVideo";
import About from "./Components/Welcome";
import QuickFacts from "./Components/QuickFacts";
import Proficiencies from "./Components/Proficiencies";
import Experience from './Components/Experience';
import Contact from './Components/Contact';
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

  margin100: {
    marginTop: 100,
  },
}));

const App = () => {
  const classes = useStyles();
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const proficienciesRef = useRef(null);

  return (
    <>
      <header className={classes.header}>
        <BackgroundVideo />
        <CoryMilsap />
      </header>

      <Navbar
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        proficienciesRef={proficienciesRef}
        contactRef={contactRef}
      />

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
              innerRef = {aboutRef}
            >
              <About />
            </Grid>

            <Grid item xs={11} md={6}>
              <QuickFacts />
            </Grid>

            <Grid item xs={11} md={9} className={classes.WideGrid} innerRef = {experienceRef}>
              <Experience />
            </Grid>

            <Grid item xs={10} md={9} className={classes.WideGrid} innerRef = {proficienciesRef}>
              <Proficiencies />
            </Grid>

            <Grid
              item
              xs={11}
              md={6}
              className={classes.margin100}
              innerRef={contactRef}
            >
              <Contact />
            </Grid>
          </Grid>
        </section>
      </main>
    </>
  );
};

export default App;
