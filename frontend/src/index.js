import React from 'react';
//import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import './index.css';
import App from './App';
// eslint-disable-next-line
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();


// this is all from package.json. Just needed a place to store it for now.

// "buffer": "^6.0.3",
    // "crypto-browserify": "^3.12.0",
    // "stream-browserify": "^3.0.0",
    // "util": "^0.12.5",
    // "vm-browserify": "^1.1.2",