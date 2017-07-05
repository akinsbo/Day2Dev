
import React, { Component } from 'react';
import { applyMiddleware, createStore } from 'redux';

//bootstrap Redux by creating store
const reducer = (initialState=0, action) => {
  if (action.type === "INC"){
    return initialState+action.payload;
  }
  if(action.type === "DEC"){
    return initialState-action.payload;
  }
  return initialState;
}

//chain of thumbs
const logger = (store) => (next) => (action) => {
  console.log("action fired ", action);
  next(action);
}

const middleware = applyMiddleware(logger);


const store = createStore(reducer, 1, middleware);//middleware

//listen to the store
store.subscribe(() => {
  console.log("store changed", store.getState())
})

store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 90});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 19});
store.dispatch({type: "DEC", payload: 25});


export default class MiddleWare extends Component{

  render(){
    return(
      <div className="middleware">
      </div>
    );
  }
}
