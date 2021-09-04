import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";


var firebaseConfig = {
  apiKey: "AIzaSyD_heV0GhLPB3yshfR7Z1ipNSxmHR3xDmE",
  authDomain: "login-22617.firebaseapp.com",
  databaseURL: "https://login-22617-default-rtdb.firebaseio.com",
  projectId: "login-22617",
  storageBucket: "login-22617.appspot.com",
  messagingSenderId: "585694719700",
  appId: "1:585694719700:web:4066f2212f053198c49541"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
  
  
  export const auth = firebase.auth() 
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
