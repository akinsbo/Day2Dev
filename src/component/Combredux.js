
import React, { Component } from 'react';
import { combineReducers, createStore } from 'redux';

//bootstrap Redux by creating store
const userReducer =(state={}, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      state = {...state, name: action.payload};
      break;
    case "CHANGE_AGE":
      state = {...state, age: action.payload};
      break;
  }
 return state;
}

const tweetsReducer =(state=[], action) => {
 return state;
}

const reducers = combineReducers({
  User: userReducer,
  tweets: tweetsReducer,
});
const store = createStore(reducers);
//
// {
//   User: {
//     "name": "Will",
//     "age": 35
//   },
//   tweets: []
// }
//listen to the store
store.subscribe(() => {
  console.log("store changed", store.getState())
})

store.dispatch({type: "CHANGE_NAME", payload: "Dele"});
store.dispatch({type: "CHANGE_AGE", payload: 35});
store.dispatch({type: "CHANGE_AGE", payload: 36});
store.dispatch({type: "CHANGE_AGE", payload: 39});



export default class Client extends Component{

  render(){
    return(
      <div className="comb-redux">
      </div>
    );
  }
}
