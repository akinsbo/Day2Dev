
import React, { Component } from 'react';
import { createStore } from 'redux';

//bootstrap Redux by creating store
const reducer = function(state, action){
  if (action.type === "INC"){
    return state+action.payload;
  }
  if(action.type === "DEC"){
    return state-action.payload;
  }
  return state;
}

const store = createStore(reducer, 0);

//listen to the store
store.subscribe(() => {
  console.log("store changed", store.getState())
})

store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 90});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 19});
store.dispatch({type: "DEC", payload: 25});


export default class Client extends Component{

  render(){
    return(
      <div className="client">
      </div>
    );
  }
}
