import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
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
          <NavLink exact to="/" activeClassName="active"> Home </NavLink>
          <NavLink to='/CivilRightsHistory' activeClassName="active"> Civil Rights History </NavLink>
          <NavLink to='/LGBTHistory' activeClassName="active"> LGBT History </NavLink>
          <NavLink to='/leaders' activeClassName="active"> Leaders </NavLink>
          <NavLink to='/LGBTLaws' activeClassName="active"> LGBT+ Laws </NavLink>
        </div>
      </div>
    );
  }

  /*
  Things to include:
    About Us
  */
}

export default App;
