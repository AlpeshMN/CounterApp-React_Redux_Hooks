import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// First step - set index.js root file
// import Provider and inject it around main App.js component
import { Provider } from "react-redux";
// Second step - set store
// import createStore and create store at line 13 with rootReducer
// and then
// third step - is to create rootReducer.js
import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
