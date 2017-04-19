import React, { Component } from 'react';
// import {checkbox as mdcCheckbox} from 'material-components-web';
import ReactDOM from 'react-dom';
import '../App.css';

class GridBox extends Component{

  constructor(props) {
  super(props);
  this.state = {
    // width: 0,
    // height: 0,
    clickCount: 0,
  };
  this.greeterText = this.greeterText.bind(this);
  this.handleClick = this.handleClick.bind(this);
  this.handleDrag = this.handleDrag.bind(this);
  this.handleDrop = this.handleDrop.bind(this);

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

handleDrag(){
  console.log('is being dragged');
}

handleDrop(){
  console.log('is being dropped');
}

allowDrop(event){
  // console.log('drop is allowed');
  event.preventDefault;
}
greeterText(){
  return (<p>wow, greeter text added</p>);
}
    render() {
      return (
        <div className="GridBox card card-rounded-border rectangle"
         onClick={this.handleClick}
         onDragOver={this.allowDrop}
         onDrop={this.handleDrop}
         style={{width: this.props.width, height: this.props.height}}>
          {this.props.children}
        </div>
      );
  }
}

export default GridBox;
