import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import CoryMilsap from './Assets/Name'
import BackgroundVideo from './Components/BackgroundVideo'
import About from './Components/About'
import QuickFacts from './Components/QuickFacts';
import Proficiencies from './Components/Proficiencies';
import {Grid} from '@material-ui/core';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">

          <BackgroundVideo/>
          <CoryMilsap/>

        </header>

        <Navbar/>

        <main>
          <section className = 'content-container'>
            <Grid 
            container
            direction = 'column'
            >
              <Grid item> 
                <About />
              </Grid>
              
              <Grid item>
                <QuickFacts/>
              </Grid>
              
              <Grid item> 
                <Proficiencies/>
              </Grid>
            </Grid>
            
          </section>
        </main>
      </div>
    );
  }
}

export default App;
