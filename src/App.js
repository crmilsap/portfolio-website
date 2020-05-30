import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import CoryMilsap from './Assets/Name'
import BackgroundVideo from './Components/BackgroundVideo'
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
      </div>
    );
  }
}

export default App;
