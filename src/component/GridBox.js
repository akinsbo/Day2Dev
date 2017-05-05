import React, { Component } from 'react';
// import {checkbox as mdcCheckbox} from 'material-components-web';
// import ReactDOM from 'react-dom';
import '../App.css';

class GridBox extends Component{

  constructor(props) {
  super(props);
  this.state = {
    // width: 0,
    // height: 0,
    clickCount: 0,
    draggedOver: ''
  };
  this.greeterText = this.greeterText.bind(this);
  this.handleClick = this.handleClick.bind(this);
  this.handleDrop = this.handleDrop.bind(this);
  this.allowDrop = this.allowDrop.bind(this)
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

handleDrop(event){
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  console.log(event);
  console.log('data is = '+ data);
 event.target.appendChild(document.getElementById(data));
// console.log('is being dropped');
}

allowDrop(event){
  // console.log('drop is allowed');
  event.preventDefault();
  this.setState({draggedOver: "highlight-orange"});
}
greeterText(){
  return (<p>wow, greeter text added</p>);
}

    render() {//console.log("draggedOver = " + this.state.draggedOver);          /**onDrop={this.handleDrop}**/

      return (         /**onDrop={this.handleDrop}**/
        <div className={"GridBox card card-rounded-border rectangle boxed " + (this.state.draggedOver? "highlight-orange": "")}
         onClick={this.handleClick}
         onDragOver={this.allowDrop}
         style={{width: this.props.width, height: this.props.height}}>
          {this.props.children}
        </div>
      );
  }
}

export default GridBox;
