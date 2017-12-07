import React, { Component } from 'react';
import './App.css';

class BasicInfo extends Component {
  render() {
    return (
      <div>
      	<h1 className="Leaders-title">Welcome to this webpage</h1>
      	<p className="Leaders-intro">The purpose of this website is to inform you about the history, leaders, and laws of both the Civil Rights Movement and the LGBT+ Movement. Please use the above tabs to explore.</p>
      </div>
    );
  }
}

export default BasicInfo;