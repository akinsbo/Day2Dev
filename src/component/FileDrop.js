import React, { Component } from 'react';
// import {checkbox as mdcCheckbox} from 'material-components-web';
import ReactDOM from 'react-dom';
import '../App.css';

class FileDrop extends Component{
    render() {
      return (
        <div className="FileDrop card card-rounded-border square" >
        <input type="file" name="pic" accept="image/*"/>
        </div>
      );
  }
}

export default FileDrop;
