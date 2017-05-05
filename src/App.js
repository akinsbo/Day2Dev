import React, { Component } from 'react';
import logo from './logo.svg';
import FileDrop from './component/FileDrop';
import GridBox from './component/GridBox';
import NameForm from './component/NameForm';
import Client from './component/Client';

//Dnd imports
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Card from './component/Card';
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
        <GridBox id="gridbox1">
        <FileDrop width={100+'%'} height={100+'%'} id="filedrop1"/>
        </GridBox>
        </div>
        <div className="col-sm-6">
        <GridBox height={50+'px'} id='gridbox2'>
        <Card text="wa-wa-wiwa" />
        </GridBox>
        </div>
        </div>
        <div className="row">
        <NameForm />
        <Client />
        </div>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
