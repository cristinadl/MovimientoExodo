import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Alert from 'react-bootstrap/Alert'
import { Container } from 'reactstrap'
import * as firebase from 'firebase'
import './AG.css';


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

  }

  createExodo(event) {
      event.preventDefault();
      this.setState({loading: true, complete: false})
      this.db.collection('Usuarios').add({
          nombre: this.state.nombre,
          email: this.state.email,
          contraseña: this.state.contraseña,
          tipoExodo: this.state.tipoExodo
      }).then(() => {
          console.log('Success'); // Cambiar por feedback al usuario
          this.setState({loading: false, complete: true})
      }).catch((error) => {
          console.log('Error al crear Exodo'); // Cambiar por feedback al usuario
      })
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
                  <Form.Check defaultChecked name="tipoExodo" type="checkbox" label="Tipo Exodo" onChange={this.handleInput}/>
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