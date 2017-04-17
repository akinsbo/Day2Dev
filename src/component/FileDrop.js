import React, { Component } from 'react';
// import {checkbox as mdcCheckbox} from 'material-components-web';
import ReactDOM from 'react-dom';
import '../App.css';

class FileDrop extends Component{

  constructor(props) {
  super(props);
  this.state = {
    // width: 0,
    // height: 0
  };
}

// componentDidMount(){
//   // Correct
// this.setState({width: 7});
// }
    render() {
      return (
        <div className="FileDrop card card-rounded-border rectangle" style={{width: this.props.width+'px', height: this.props.height+'px'}}>
        <input type="file" name="pic" accept="image/*"/>
        <div>width: {this.props.width}</div>
        <div>height: {this.props.height}</div>        
        </div>
      );
  }
}

export default FileDrop;
