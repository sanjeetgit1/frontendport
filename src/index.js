import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider}  from "react-redux";
import store from './Store';
import {  positions, transitions } from "react-alert";


const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  transition: transitions.SCALE,
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Provider store={store}>
        <App />
      
    </Provider> 
  </React.StrictMode>
);

