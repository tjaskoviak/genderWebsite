import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">A Comparison of the Civil Rights Movement and the LGBT+ Movement</h1>
        </header>
        <p className="App-intro">
          Info! Facts! Pictures!
          Important things to include
          <ul>
          	<li>About Us</li>
          	<li>Basic Info</li>
          	<li>Laws</li>
          	<li>Leaders</li>
          	<li>Strategies</li>
          </ul>
        </p>
      </div>
    );
  }
}

export default App;
