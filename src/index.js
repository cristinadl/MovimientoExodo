import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyC-g6SCIemVM1bwO_tRqGBNnQKWszvXUWo",
  authDomain: "dbmovimientoexodo.firebaseapp.com",
  databaseURL: "https://dbmovimientoexodo.firebaseio.com",
  projectId: "dbmovimientoexodo",
  storageBucket: "dbmovimientoexodo.appspot.com",
  messagingSenderId: "299145830200",
  appId: "1:299145830200:web:712fa8936de201ff1d2bcd",
  measurementId: "G-74LRPCPFTV"
};

firebase.initializeApp(firebaseConfig);

// TODO(): esta dando un warning esta file:
//         Cannot update during an existing state transition (such as within `render`). 
//         Render methods should be a pure function of props and state.
//         in App (at src/index.js:25)
//         in StrictMode (at src/index.js:24)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
