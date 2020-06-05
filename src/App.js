import React  from "react";
import Navbar from "./Components/Navbar";
import CoryMilsap from "./Assets/Name";
import BackgroundVideo from "./Components/BackgroundVideo";
import About from "./Components/About";
import QuickFacts from "./Components/QuickFacts";
import Proficiencies from "./Components/Proficiencies";
import { Grid, makeStyles } from "@material-ui/core";
import "./App.css";

const useStyles = makeStyles({
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
    width: '80%',
  },
});

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
        <section className= {classes.ContentContainer}>
          <Grid container direction="column" alignItems = 'center'>
            <Grid item xs = {10} md = {6}>
              <About />
            </Grid>

            <Grid item xs = {10} md = {6}>
              <QuickFacts />
            </Grid>

            <Grid item xs = {12} className = {classes.WideGrid}>
              <Proficiencies />
            </Grid>
          </Grid>
        </section>
      </main>
    </>
  );
};

export default App;
