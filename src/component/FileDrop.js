import React, { Component } from 'react';
// import {checkbox as mdcCheckbox} from 'material-components-web';
// import ReactDOM from 'react-dom';
import '../App.css';

class FileDrop extends Component{

  constructor(props) {
  super(props);
  this.state = {
    // width: 0,
    // height: 0,
    clickCount: 0,
    draggable: true,
    isBeingDragged: false,
  };
  this.greeterText = this.greeterText.bind(this);
  this.handleClick = this.handleClick.bind(this);
  this.handleDragStart = this.handleDragStart.bind(this);
  this.handleDrag = this.handleDrag.bind(this);
  // this.handleDrop = this.handleDrop.bind(this);
}

// componentDidMount(){
//   // Correct
// this.setState({width: 7});
// }

handleClick(event){
event.preventDefault();
//this.setState({text: e.target.value});
console.log('The link was clicked.');
this.setState({clickCount: this.state.clickCount + 1});
// const {id} = e.target;
// console.log(id);
}

handleDragStart(event){
  event.preventDefault();
   event.stopPropagation();     /// add this too
  //  console.log("target id = " + this.props.id);
    event.persist();
  event.dataTransfer.setData("text", this.props.id);
  event.dataTransfer.effectAllowed = "move";

  this.setState({isBeingDragged: true});
  // console.log('target id = ' + event.target.id);
   console.log("type " + event.type);
   console.log(event.currentTarget.getAttribute("id") + 'is current target');
   console.log("Event dataTransfer is = " + event.dataTransfer.getData("text"));

}

// handleDrop(){
//   console.log('is being dropped');
// }
handleDrag(event){
  event.preventDefault();
  console.log("dragging");
}

// allowDrop(event){
//   // console.log('drop is allowed');
//   event.preventDefault;
// }
greeterText(){
  return (<p>wow, greeter text added</p>);
}

render() {
      return (
        <div className={"FileDrop card card-rounded-border rectangle " + (this.state.isBeingDragged? "highlight-orange": "")}
         onClick={this.handleClick}
         draggable={this.state.draggable}
         onDragStart={this.handleDragStart}
         id={this.props.id}
          style={{width: this.props.width, height: this.props.height}}>
        <input type="file" name="pic" accept="image/*"/>
        </div>
      );
  }
}

export default FileDrop;
