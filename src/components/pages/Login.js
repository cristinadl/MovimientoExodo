import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Container } from 'reactstrap'
import * as firebase from 'firebase'
import './loader.css';


export default class CrearExodo extends React.Component {
  constructor(props) {
    super(props);
    this.db = firebase.firestore();
    this.state = {
      email: '',
      contraseña: '',
      loading: false,
    }
    this.login = this.login.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.loginData = props.login

  }

  login(event) {
      event.preventDefault();
      this.setState({loading: true})
      this.loginData(this.state.email)
      /*
      TODO: Validate credentials
      this.db.collection('Usuarios').add({
          email: this.state.email,
          contraseña: this.state.contraseña,
      }).then(() => {
          this.loginData(this.email);
      }).catch((error) => {
          console.log('Error al crear Exodo'); // Cambiar por feedback al usuario
      })
      */
      event.preventDefault();
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
                <Form.Control type="password" name="contraseña" placeholder="Contraseña" value={this.state.contraseña} onChange={this.handleInput} />
              </Form.Group>
              <Button variant="dark" type="submit">
                Iniciar sesión
              </Button>
              { this.state.loading && <div className='loader center'/>}
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
