import React, { useRef } from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/Welcome";
import Proficiencies from "./Components/Proficiencies";
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import { Grid, makeStyles } from "@material-ui/core";
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({


  WideGrid: {
    minWidth: '80%',
  },
  TopMargin: {
    marginTop: 75,

    [theme.breakpoints.down('sm')]: {
      marginTop: 25,
    },
  },

  margin150: {
    marginTop: 150,
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

      <Navbar
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        proficienciesRef={proficienciesRef}
        contactRef={contactRef}
      />

      <main>
        <section className={classes.ContentContainer}>
          <Grid container direction="column" alignItems="center" justify = 'center' spacing = {5}>
            <Grid
              container
              item
              spacing = {5}
              xs={11}
              md={6}
              className={classNames(classes.WideGrid, classes.TopMargin)}
              alignItems="center"
              justify="center"
              innerRef = {aboutRef}
            >
              <About />
            </Grid>

            <Grid item xs={10} md={9} className={classes.WideGrid} innerRef = {experienceRef}>
              <Experience />
            </Grid>

            <Grid item xs={10} md={9} className={classes.WideGrid} innerRef = {proficienciesRef}>
              <Proficiencies />
            </Grid>

            <Grid
              item
              className = {classes.margin150}
              xs={10}
              md={6}
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
