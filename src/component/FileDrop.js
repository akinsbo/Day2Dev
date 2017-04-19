import React, { Component } from 'react';
// import {checkbox as mdcCheckbox} from 'material-components-web';
import ReactDOM from 'react-dom';
import '../App.css';

class FileDrop extends Component{

  constructor(props) {
  super(props);
  this.state = {
    // width: 0,
    // height: 0,
    clickCount: 0,
  };
  this.greeterText = this.greeterText.bind(this);
  this.handleClick = this.handleClick.bind(this);
}

// componentDidMount(){
//   // Correct
// this.setState({width: 7});
// }

handleClick(){
  //e.preventDefault();
//this.setState({text: e.target.value});
console.log('The link was clicked.');
this.setState({clickCount: this.state.clickCount + 1});
// const {id} = e.target;
// console.log(id);
}

greeterText(){
  return (<p>wow, greeter text added</p>);
}
    render() {
      return (
        <div className="FileDrop card card-rounded-border rectangle" onClick={this.handleClick} style={{width: this.props.width, height: this.props.height}}>
        <input type="file" name="pic" accept="image/*"/>
        </div>
      );
  }
}

export default FileDrop;
