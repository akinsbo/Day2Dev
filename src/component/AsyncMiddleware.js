
import React, { Component } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null,
};

//bootstrap Redux by creating store
const reducer = (state=initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_START": {
      return {...state, fetching: true}
      break;
    }
    case "FETCH_USERS_ERROR": {
      return {...state, fetching: false, error: action.payload}
      break;
    }
    case "RECEIVE_USERS": {
      return {...state,
        fetching: false,
        fetched: true,
        users: action.payload,
      }
      break;
    }
  }
return state;
}

const middleware = applyMiddleware(promise(), thunk, logger);
const store = createStore(reducer, 1, middleware);//middleware


store.dispatch((dispatch) => {
  dispatch({type: "FETCH_USERS",
  payload: fetch("http://rest.learncode.academy/api/wstern/user")
})
  // fetch("http://rest.learncode.academy/api/wstern/users")
  // .then((response) => {
  //   dispatch({type: "RECEIVE_USERS", payload: response.data})
  // })
  // .catch((err) => {
  //   dispatch({type: "FETCH_USERS_ERROR", payload: err})
  // })
  //do smth async
})
store.dispatch({type: "INC", payload: 90});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 19});
store.dispatch({type: "DEC", payload: 25});


export default class AsyncMiddleware extends Component{

  render(){
    return(
      <div className="asyncMiddleware">
      </div>
    );
  }
}
