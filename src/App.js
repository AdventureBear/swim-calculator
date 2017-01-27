import React, { Component } from 'react'
import logo from './swimmer.png'
import './App.css'
import Header from './Header'
import PaceInput from './PaceInput'
import PaceResults from './PaceResults'
import Footer from './Footer'
import timestring from 'timestring'
import convertTimeToPaces from './convertTimeToPaces'
import testFunc from './testFunc'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      t1HumanReadable: "1m 42s",
      t1Seconds: 90,
      d2Arr: [200,400,800,1000,1500,1600],
      t2Arr: [0,0,0,0,0,0],
      greeting: "hi"
    }
  }
  handleCalculateClick = (event) => {
    console.log(this.state.greeting);

    console.log('pace input changed to:', event);
    this.setState({
      greeting: testFunc("Suzanne"),
      t1Seconds:  timestring(event),
      t2Arr: convertTimeToPaces(this.state.t1Seconds, 100,1.06, this.state.d2Arr)
    })

    console.log(this.state.greeting, this.state.t1Seconds, this.state.t2Arr)
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <span><img src={logo} className="App-logo" alt="logo" /></span>
          <h2>Pacemaker</h2>
          <p>Swim Pace Calculator</p>
        </div>
        <div className="App-intro">


          <PaceInput calculate={this.handleCalculateClick} />
          <PaceResults paces = {[
          {"distance": "100","duration": 90},
           {"distance": "200","duration": 191},
            {"distance": "400","duration": 372}
          ]} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
