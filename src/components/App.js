import React, { Component } from 'react';
import '../App.css';
import mainReducer, {initialState} from "../reducers/mainReducer";
import createSagaMiddleware, {SagaMiddleware} from "redux-saga";
import {applyMiddleware, createStore} from "redux";
import rootSaga from "../saga/rootSaga";
import User from "./User";
import {Provider} from "react-redux";


let sagaMiddleware = createSagaMiddleware();
let store =  store = createStore(mainReducer, initialState, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <User/>
        </Provider>
    );
  }
}

export default App;
