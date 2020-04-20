const functions = require('firebase-functions');
var firebase = require("firebase");
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

app.get('/Usuarios', (request, response) =>{
    admin.firestore().collection('Usuarios')
    .get()
        .then((data) =>{
            let ans = [];
            data.forEach((doc) => {
                ans.push({
                    userId: doc.id,
                    ...doc.data()
                });
            });
            return response.json(ans);
        }).catch(error => console.log(error));
});

const isEmail = (email) =>{
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(regEx)) return true;
    else return false;
}
const isEmpty = (string) =>{
    if(string.trim() === '') return true;
    else return false;
}

// Sign up
app.post('/crearUsuario', (req, res) =>{
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        handle: req.body.handle,
        tipoExodo: req.body.tipoExodo
      };

      let errors = {};

      console.log(newUser);

      if(isEmpty(newUser.email)){
          errors.email = 'campo obligatorio'
      }else if (!isEmail(newUser.email)){
          errors.email = 'Debe ser un correo válido'
      }

      if(isEmpty(newUser.password)) errors.password = 'campo obligatorio'
      if(newUser.password != newUser.confirmPassword) errors.password = 'No coincide'
      if(isEmpty(newUser.handle)) errors.handle = 'campo obligatorio'

      if(Object.keys(errors).length > 0) return res.status(400).json(errors)

      //TODO: Validar data
      let token, userId, userCredentials;
      admin.firestore().doc(`/Usuarios/${newUser.handle}`).get()
        .then(doc =>{
            if(doc.exists){
                return res.status(400).json({ handle: "este usuario ya existe"});
            } else {
                return admin
            .auth()
            .createUserWithEmailAndPassword(newUser.email, newUser.password);
            }
        })
        .then(data =>{
            userId = data.user.uid;
            return data.user.getIdToken();
        })
        .then(tokenId => {
            token = tokenId;
            if(newUser.tipoExodo){
                userCredentials = {
                    nombre: newUser.handle,
                    Internacional: false,
                    videoLink: " ",
                    fotos: [ ],
                    logo: " ",
                    Estado: " ",
                    porra: " ",
                    cantidadExoditos: 0,
                    nombreDeGrupo: " ",
                    Pais: " ",
                    tipoExodo: true,
                    Contacto: {
                        RedesSociales: {
                            Twitter: " ",
                            Facebook: " "
                        },
                        Telefono: " "
                    },
                    tribus: {
                        Levi: " ",
                        Juda: " ",
                        Ruben: " ",
                        Simeon: " "
                    },
                    email: newUser.email,
                    userId
                }
            } else {
                userCredentials = {
                    nombre: newUser.handle,
                    tipoExodo: false,
                    Contacto: {
                        RedesSociales: {
                            Twitter: " ",
                            Facebook: " "
                        },
                        Telefono: " "
                    },
                    email: newUser.email,
                    userId
                };
            };
            return admin.firestore().doc(`/Usuarios/${newUser.handle}`).set(userCredentials);
        })
        .then(()=>{
            return res.status(200).json({token});
        })
        .catch(err => {
            console.log(err);
            if(err.code === "auth/email-already-in-use"){
                return res.status(400).json({ email: "El email ya existe"});
            } else {
                return res.status(500).json({ error: err.code});
            }  
        })
});

//Sign In

app.post('/login', (req, res) =>{
    const user = {
        email: req.body.email,
        password: req.body.password,
      };

      let errors = {};

      if(isEmpty(user.email)) errors.email = 'campo obligatorio'
      if(isEmpty(user.password)) errors.password = 'campo obligatorio'

      if(Object.keys(errors).length > 0) return res.status(400).json(errors)

      admin.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((data) => {
            return data.user.getIdToken();
        })
        .then((idToken) =>{
            return res.json({idToken});
        })
        .catch((err) =>{
            console.log(err);
            if(err.code === 'auth/wrong-password') return res.status(403).json({general: "contraseña incorrecta"})
            if(err.code === 'auth/user-not-found') return res.status(403).json({general: "usuario incorrecto"})
            return res.status(500).json({error: err.code})
        })
});



exports.app = functions.https.onRequest(app);