import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Container } from 'reactstrap'
import * as firebase from 'firebase'
import 'firebase/auth';
import './loader.css';
import Alert from 'react-bootstrap/Alert'


export default class CrearExodo extends React.Component {
  constructor(props) {
    super(props);
    this.db = firebase.firestore();
    this.state = {
      email: '',
      contrasena: '',
      loading: false,
      error: false,
      empty: false
    }
    this.login = this.login.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.loginData = props.login

  }

  isEmpty(string){
    return string.trim() === ''
  }

  login(event) {
      event.preventDefault();
      if(this.isEmpty(this.state.contrasena) || this.isEmpty(this.state.email)){
        this.setState({error: false, empty: true})
      } else {
        this.setState({loading: true, error: false, empty: false})
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.contrasena).then((Credential) => {
            //El objeto de Credential en Credential.user tiene el usario qe necesitas para el change password
            var credential = Credential;
            this.loginData(credential.user.email)
        }).catch((error) => {
            console.log(error)
            this.setState({loading: false, error: true})
        })
        event.preventDefault();
      }
  }

  handleInput(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <Container style={containerParentStyle}>
        <Card>
          <Card.Body>
            <Card.Title >Iniciar sesión</Card.Title>
            <Form onSubmit={this.login}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" name="email" placeholder="Introducir correo electrónico" value={this.state.email} onChange={this.handleInput}/>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" name="contrasena" placeholder="Contraseña" value={this.state.contraseña} onChange={this.handleInput} />
              </Form.Group>
              <Button variant="dark" type="submit" style={{marginBottom: '10px'}}>
                Iniciar sesión
              </Button>
              { this.state.loading && <div className='loader center'/>}
              { this.state.error && <Alert variant='danger' className='center'>Los datos son incorrectos</Alert>}
              { this.state.empty && <Alert variant='danger' className='center'>Los campos no pueden estar vacíos</Alert>}
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
