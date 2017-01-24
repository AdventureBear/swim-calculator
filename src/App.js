import React, { Component } from 'react'
import logo from './swimmer.png'
import './App.css'
import Header from './Header'
import PaceInput from './PaceInput'
import PaceResults from './PaceResults'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <span><img src={logo} className="App-logo" alt="logo" /></span>
          <h2>Pacemaker</h2>
          <p>Swim Pace Calculator</p>
        </div>
        <div className="App-intro">
          <PaceInput />
          <PaceResults />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
