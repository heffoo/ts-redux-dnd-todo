import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from 'redux';
import App from "./App";
import { Provider } from "react-redux";
import rootReducer from './store/store'

const store = createStore(rootReducer);

console.log(store.getState())


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
