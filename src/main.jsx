import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"; 

import { store, } from '../src/redux/store.js';

import App from "./App.jsx";
import "./index.css";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <Provider store={store}>
      <BrowserRouter basename="/goit-gr2-kapusta/">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);