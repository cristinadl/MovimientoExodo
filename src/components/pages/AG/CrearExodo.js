import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Alert from 'react-bootstrap/Alert'
import { Container } from 'reactstrap'
import * as firebase from 'firebase'
import '../loader.css';

var config = {
  apiKey: "AIzaSyC-g6SCIemVM1bwO_tRqGBNnQKWszvXUWo",
  authDomain: "dbmovimientoexodo.firebaseapp.com",
  databaseURL: "https://dbmovimientoexodo.firebaseio.com",
  projectId: "dbmovimientoexodo",
  storageBucket: "dbmovimientoexodo.appspot.com",
  messagingSenderId: "299145830200",
  appId: "1:299145830200:web:712fa8936de201ff1d2bcd",
  measurementId: "G-74LRPCPFTV"
};

var secondaryApp = firebase.initializeApp(config, "Secondary");

const isEmail = (email) =>{
  const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regEx)) return true;
  else return false;
}
const isEmpty = (string) =>{
  if(string.trim() === '') return true;
  else return false;
}

export default class CrearExodo extends React.Component {
  constructor(props) {
    super(props);
    this.db = firebase.firestore();
    this.state = {
      email: '',
      nombre: '',
      contraseña: '',
      tipoExodo: true,
      loading: false,
      complete: false
    }
    this.createExodo = this.createExodo.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
  }

  createExodo(event) {
      event.preventDefault();
      this.setState({loading: true, complete: false})

      const newUser = {
        email: this.state.email,
        password: this.state.contraseña,
        handle: this.state.nombre,
        tipoExodo: this.state.tipoExodo
      }

      let errors = {};

      if(isEmpty(newUser.email)){
          errors.email = 'campo obligatorio'
      }else if (!isEmail(newUser.email)){
          errors.email = 'Debe ser un correo válido'
      }

      if(isEmpty(newUser.password)) errors.password = 'campo obligatorio'
      //if(newUser.password != newUser.confirmPassword) errors.password = 'No coincide'
      if(isEmpty(newUser.handle)) errors.handle = 'campo obligatorio'

      if(Object.keys(errors).length > 0) return

      //TODO: Validar data
      //let token, userId, userCredentials;
      let userId, userCredentials;
      firebase.firestore().doc(`/Usuarios/${newUser.handle}`).get()
        .then(doc =>{
            if(doc.exists){
                return null
            } else {
                return secondaryApp
            .auth()
            .createUserWithEmailAndPassword(newUser.email, newUser.password)
            }
        })
        .then(data =>{
            userId = data.user.uid;
            return data.user.getIdToken();
        })
        .then(tokenId => {
            //token = tokenId;
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
                    pais: " ",
                    tipoExodo: true,
                    Contacto: {
                        RedesSociales: {
                            Twitter: " ",
                            Facebook: " "
                        },
                        Telefono: " "
                    },
                    imagenPerfil: " ",
                    tribus: {
                        Levi: " ",
                        Juda: " ",
                        Ruben: " ",
                        Simeon: " "
                    },
                    email: newUser.email,
                    historia: ' ',
                    sabiasQue: ' ',
                    lema: ' ',
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
                    imagenPerfil: " ",
                    email: newUser.email,
                    userId
                };
            };
            return firebase.firestore().doc(`/Usuarios/${newUser.handle}`).set(userCredentials);
        })
        .then(()=>{
          console.log('Success'); // Cambiar por feedback al usuario
          this.setState({loading: false, complete: true})
        })
        .catch(err => {
            console.log(err);
            if(err.code === "auth/email-already-in-use"){
                console.log({ email: "El email ya existe"});
            } else {
              console.log({ error: err.code});
            }
            event.preventDefault();
        })
  }

  handleInput(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleChecked () {
    this.setState({tipoExodo: !this.state.tipoExodo});
    console.log(this.state.tipoExodo)
  }

  render() {
    return (
      <Container style={containerParentStyle}>
        <Card>
          <Card.Body>
            <Card.Title >Crear exodo</Card.Title>
            <Form onSubmit={this.createExodo}>
              <Form.Group as={Row} >
                <Form.Label column sm="2">
                  Nombre
                </Form.Label>
                <Col sm="10">
                  <Form.Control name="nombre" value={this.state.nombre} onChange={this.handleInput} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} >
                <Form.Label column sm="2">
                  email
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleInput} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} >
                <Form.Label column sm="2">
                  Contraseña
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="password" name="contraseña" value={this.state.contraseña} onChange={this.handleInput} />
                </Col>
              </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check defaultChecked name="tipoExodo" type="checkbox" label="Tipo Exodo" onChange={this.handleChecked}/>
                </Form.Group>
                <Button variant="dark" type="submit">
                    Publicar
                </Button>
                { this.state.loading && <div className='loader center'/>}
                { this.state.complete && <Alert variant='success' className='center'>El exodo ha sido creado</Alert>}
            </Form>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}

const containerParentStyle = {
  marginBottom: '10%',
  marginTop: '10%'
}
