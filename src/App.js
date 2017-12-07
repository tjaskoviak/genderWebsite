import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Leaders from './Leaders.js';
import BasicInfo from './BasicInfo.js';
import { NavLink } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">A Comparison of the Civil Rights Movement and the LGBT+ Movement</h1>
        </header>
        <div className="navbar">
          <NavLink to="/home" activeClassName="active"> Home </NavLink>
          <NavLink to='/leaders' activeClassName="active"> Leaders </NavLink>
        </div>
      </div>
    );
  }

  /*
  Things to include:
    About Us
    Basic Info
    Laws
    Strategies
  */
}

export default App;
