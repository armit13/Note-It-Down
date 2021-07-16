import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {  BrowserRouter } from 'react-router-dom';
import firebase from 'firebase';

require('firebase/firestore');

  // Initialize Firebase
  firebase.initializeApp({
    apiKey: "your firebase api key",
    authDomain: "your authorised domain",
    projectId: "your project id",
    storageBucket: "your storageBucke",
    messagingSenderId: "your messagingSenderId",
    appId: "your appId",
    measurementId: "your measurementId"
  });
  firebase.analytics();


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('noteitdown-container')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
