import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import * as firebase from 'firebase'

export default class SubirAviso extends React.Component {
  constructor(props) {
    super(props);
    this.db = firebase.firestore();
    this.state = {
      title: '',
      content: ''
    }
    this.createPost = this.createPost.bind(this);
    this.handleInput = this.handleInput.bind(this);

  }

  createPost(event) {
      event.preventDefault();
      const now = new Date()
      const secondsSinceEpoch = Math.round(now.getTime() / 1000)
      this.db.collection('Avisos').add({
          Titulo: this.state.title,
          Contenido: this.state.content,
          date: secondsSinceEpoch
      }).then(() => {
          console.log('Success'); // Cambiar por feedback al usuario
      }).catch((error) => {
          console.log('Error al crear Anuncio'); // Cambiar por feedback al usuario
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
      <Card>
        <Card.Body>
            <Card.Title >Aviso</Card.Title>
            <Form onSubmit={this.createPost}>
                <Form.Group as={Row} >
                    <Form.Label column sm="2">
                        Titulo
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control name="title" placeholder="Titulo" onChange={this.handleInput} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
                    <Form.Label column sm="2">
                        Contenido
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control name="content" as="textarea" rows="4" onChange={this.handleInput} />
                    </Col>
                </Form.Group>
                <Button variant="dark" type="submit">
                    Publicar
                </Button>
            </Form>
        </Card.Body>
    </Card>
    )
  }
}
