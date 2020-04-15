const functions = require('firebase-functions');
const express = require('express')
require("firebase/auth");
require("firebase/firestore");
var admin = require("firebase/app");

const app = express();

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
  
// Initialize Firebase
admin.initializeApp(firebaseConfig);

exports.getUsers = functions.https.onRequest((request, response) =>{
    admin.firestore().collection('Usuarios')
    .get()
        .then((data) =>{
            let ans = [];
            data.forEach((doc) => {
                ans.push(doc.data());
            });
            return response.json(ans);
        }).catch(error => console.log(error));
});


