
import React, { Component } from 'react';
import { createStore } from 'redux';


//bootstrap Redux by creating store
const reducer = function(){

}

const store = createStore(reducer, 0);


//listen to the store
store.subscribe(() => {
  console.log("store changed", store.getState())
})

store.dispatch({type: "INC", payload: 1});

export default class Client extends Component{

  render(){
    return(
      <div className="client">
      </div>
    );
  }
}
