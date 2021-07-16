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
    apiKey: "AIzaSyAQvrc3H2pNEOWH5C1KGZBCXUn8-Gw-Slk",
    authDomain: "noteitdown-b89d4.firebaseapp.com",
    projectId: "noteitdown-b89d4",
    storageBucket: "noteitdown-b89d4.appspot.com",
    messagingSenderId: "582629202014",
    appId: "1:582629202014:web:7ec41092cfb27be34b3ccf",
    measurementId: "G-L51G6CH089"
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
