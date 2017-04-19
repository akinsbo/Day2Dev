import React, { Component } from 'react';
import logo from './logo.svg';
import FileDrop from './component/FileDrop';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="container">
        <div className="row">
        <div className="col-sm-6">
        <FileDrop width={100+'%'} height={100+'%'} />
        </div>
        <div className="col-sm-6">
        <FileDrop width={100+'%'} height={100+'%'} />
        </div>
        </div>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
