import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function SubirAviso() {
    return (
      <Card>
        <Card.Body>
            <Card.Title >Aviso</Card.Title>
            <Form>
                <Form.Group as={Row} >
                    <Form.Label column sm="2">
                        Titulo
            </Form.Label>
                    <Col sm="10">
                        <Form.Control placeholder="Titulo" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
                    <Form.Label column sm="2">
                        Contenido
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control as="textarea" rows="4" />
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
