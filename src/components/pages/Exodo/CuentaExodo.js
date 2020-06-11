import React, { Component } from 'react'
import AccountContent from './../../AccountContent'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import * as firebase from 'firebase'
 
var db;
//var credential;
var imageJSX = <img src="/Person-02.png" alt="Person-02" height="150" width="150"></img>;
var username = "";
 
export default class CuentaExodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userHasProfilePic: false,
            username: "",
            profilePic: "",
            invalidFile: true,
            loadedFile: null
        }
        this.verifyFile = this.verifyFile.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
        this.toBase64 = this.toBase64.bind(this);
        this.getName = this.getName.bind(this);
      }
 
    render() {
        return (
 
            <div>
                <Col md={2}>
                <Card>
                    { imageJSX }
                </Card>
                </Col>
                
                <Col md={6}>
                <Card>
                    <Card.Body>
                        <Form onSubmit={this.uploadFile}>
                            <Form.Group as={Row}>
                                <input type="file" class="form-control" accept = ".png, .jpg" 
                                    multiple="" onChange = {this.verifyFile}></input>
                            </Form.Group>
                            <Button variant="dark" type="submit" disabled={this.state.invalidFile}>
                                Cambiar Foto
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
                </Col>

                <AccountContent></AccountContent>
            </div>
        )
    }
 
    componentDidMount()
    {
        db = firebase.firestore();

        this.getProfilePicture(firebase.auth().currentUser.uid);
    }
 
    // signIn(email, password)  {
    //     firebase.auth().signInWithEmailAndPassword(email, password).then((Credential) => {
    //         //El objeto de Credential en Credential.user tiene el usario qe necesitas para el change password
    //         console.log(Credential);
    //         credential = Credential;
    //         this.getProfilePicture(credential.user.uid)
    //     }).catch((error) => {
    //         console.log(error.message);
    //     })
    // }
 
    getProfilePicture(id)
    {
        db = firebase.firestore();
        var image;
 
        db.collection('Usuarios').where("userId", "==", id)
        .get() // Metodo de Firebase para obtener los datos
        .then((Snap) => {
            Snap.forEach(function(user) {
            image = user.data().imagenPerfil
            console.log(user.data().imagenPerfil);
            });
 
            if(image.startsWith("data:image/"))
            {
                imageJSX = <img src={image} alt = "Profile" height="150" width="150"/>
                this.setState({profilePic: image, userHasProfilePic: true})
            }
          
        });
    }
 
    getName(uid)
    {
        return new Promise((resolve, reject) => {
            var name;
 
            db.collection('Usuarios').where("userId", "==", uid)
            .get() // Metodo de Firebase para obtener los datos
            .then((Snap) => {
                Snap.forEach(function(user) {
                name = user.data().nombre
                console.log("name" + user.data().nombre);
                resolve(name);
                });
                username = name;
                this.setState({username: name})
            });
        })
    }
 
    verifyFile(event)
    {
        var file = event.target.files[0];
 
        console.log(file);
 
        if(!file.name.match(/.(jpg|png)$/i))
        {
            this.setState({invalidFile: true})
        }
        else
        {
            this.setState({invalidFile: false})
        }
 
        this.setState({loadedFile: file})
    }
 
    async uploadFile(event)
    {
        event.preventDefault();
        var data;
 
        this.toBase64((result) => {
            data = result;
            console.log(data);
        });
 
        //firebase.database().ref("Usuarios/" + credential.user.uid).set({nombre: "agre"})
        console.log("s");
        console.log(firebase.auth().currentUser.uid);
        
        var uid = firebase.auth().currentUser.uid;
        username = await this.getName(uid);
        console.log(username);
        db.collection("Usuarios").doc(username).update({
            imagenPerfil: data
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }
 
    toBase64(cb) {
        let reader = new FileReader();
        console.log("64")
        console.log(this.state.loadedFile)
        reader.readAsDataURL(this.state.loadedFile);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
}

