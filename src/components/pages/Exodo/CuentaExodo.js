import React, { Component } from 'react'
import AccountContent from './../../AccountContent'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import * as firebase from 'firebase'

var db;
var credential;
var imageJSX = <img src="/Person-02.png" alt="Person-02" height="150" width="150"></img>;

export default class CuentaExodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userHasProfilePic: false,
            profilePic: "",
            invalidFile: true,
            loadedFile: null
        }
        this.verifyFile = this.verifyFile.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
        this.toBase64 = this.toBase64.bind(this);
      }

    render() {
        return (

            <div>
                <Col md={2}>
                <Card>
                    {
                        imageJSX
                    }
                </Card>
                </Col>
                
                <Col md={6}>
                <Card>
                    <Card.Body>
                            {/* <Card.Text column sm = "10" style={{textAlign: 'left'}}>
                                <p>Usuario: {this.state.username}</p>
                            </Card.Text> */}
                        <Form onSubmit={this.uploadFile}>
                            <Form.Group as={Row}>
                                {/* <Form.Label column sm="6">
                                    Sube tu foto de perfil.
                                </Form.Label> */}
                                <input type="file" class="form-control" accept = ".png, .jpg" 
                                    multiple="" onChange = {this.verifyFile}></input>
                            </Form.Group>
                            <Button variant="dark" type="submit" disabled={this.state.invalidFile}>
                                Cambiar Foto
                            </Button>
                        </Form>
                    </Card.Body>
                {/* <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <form method="post" action="#" id="#">
                                <div class="form-group files">
                                    <label>Sube tu foto de perfil</label>
                                    <input type="file" class="form-control" accept = ".png, .jpeg" 
                                    multiple="" onChange = {this.verifyFile}></input>
                                    <button type="submit">Subir</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> */}
                {/* <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01"/>
                        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                    </div>
                </div> */}
                </Card>
                </Col>

                

                <AccountContent></AccountContent>
            </div>
        )
    }

    componentDidMount()
    {
        db = firebase.firestore();
        this.signIn('almelek@gmail.com', '123456');
    }

    signIn(email, password)  {
        firebase.auth().signInWithEmailAndPassword(email, password).then((Credential) => {
            //El objeto de Credential en Credential.user tiene el usario qe necesitas para el change password
            console.log(Credential);
            credential = Credential;
            this.getProfilePicture(credential.user.uid)
        }).catch((error) => {
            console.log(error.message);
        })
    }

    getProfilePicture(id)
    {
        var image;
        console.log(id);

        db.collection('Usuarios').where("userId", "==", id)
        .get() // Metodo de Firebase para obtener los datos
        .then((Snap) => {
            Snap.forEach(function(user) {
            image = user.data().imagenPerfil.imagen
            console.log(user.data().imagenPerfil.imagen);
            });

            if(image.startsWith("data:image/"))
            {
                imageJSX = <img src={image} alt = "Profile"/>
                this.setState({profilePic: image, userHasProfilePic: true})
            }
          
        });
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

    uploadFile(event)
    {
        event.preventDefault();
        var data;

        this.toBase64((result) => {
            data = result;
            console.log(data);
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
