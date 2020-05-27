import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Card from 'react-bootstrap/Card'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'


export default function Inicio() {
    return (
        <Card>
            <Card.Body>
                <Jumbotron style={jumbotronStyle}>
                    <h1>MOVIMIENTO ÉXODO</h1>
                    <p>
                        Somos un grupo formal y dinámico, constituido por adolecentes en busca de una formación integral.
                    </p>
                    <p>
                        <Link style={linkStyle} to="/nosotros"><Button variant="primary">SOBRE NOSOTROS</Button></Link>
                    </p>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col>
                            <Card style={{ width: '14rem' }}>
                                <Card.Img variant="top" src="http://movimientoexodo.com/wp-content/uploads/2016/07/13871968_10205584248279174_425006952_n.jpg" />
                                <Card.Body>
                                    <Card.Title>¿Quienes Somos?</Card.Title>
                                    <Card.Text>
                                        {quienesSomos}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                             <br />
                        </Col>
                        <Col>
                            <Card style={{ width: '14rem' }}>
                                <Card.Img variant="top" src="http://movimientoexodo.com/wp-content/uploads/2015/12/slide1ww-320x200.jpg" />
                                <Card.Body>
                                    <Card.Title>Nuestros Valores</Card.Title>
                                    <Card.Text>
                                        {nuestrosValores}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '14rem' }}>
                                <Card.Img variant="top" src="http://movimientoexodo.com/wp-content/uploads/2016/07/13874862_10205584207598157_1726164843_n.jpg" />
                                <Card.Body>
                                    <Card.Title>Nuestra Historia</Card.Title>
                                    <Card.Text>
                                        {nuestraHistoria}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '14rem' }}>
                                <Card.Img variant="top" src="http://movimientoexodo.com/wp-content/uploads/2015/12/slide1-320x200.jpg" />
                                <Card.Body>
                                    <Card.Title>Nuestra Motivación</Card.Title>
                                    <Card.Text>
                                        {nuestraMotivacion}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Jumbotron style={jumbotronStyle2} >
                    <h2>{familiaExodo}</h2>
                    <p style={{ color: 'gray' }}>
                        {unidos}
                    </p>

                </Jumbotron>
                <Alert variant="primary">
                    <Alert.Heading>{interesado}</Alert.Heading>
                    <p>
                        {uneteExodo}
                    </p>
                    <hr />
                    <p className="mb-0">
                        <Button variant="outline-primary">CONTACTO</Button>
                    </p>
                </Alert>
                <div>
                </div>
            </Card.Body>
        </Card >
    )
}

const linkStyle = {
    color: '#000',
    textDecoration: 'none'
}

const quienesSomos = "Éxodo es un movimiento eclesial católico a favor de los adolescentes. Nuestro objetivo es la promoción integral del adolescente."
const nuestrosValores = "Nos mueve el amor a Dios, la lealtad, la calidad humana, el servicio al prójimo, la amistad, la bondad y la generosidad."
const nuestraHistoria = "Éxodo nació el 4 de febrero de 1984, en la ciudad de Puebla, en la Comunidad Cristiana del Templo de “Santa María."
const nuestraMotivacion = "Éxodo pertenece a la vida y santidad de la Iglesia y vive en Ella, recibiendo la misión que continúa la obra de Jesús."

const familiaExodo = "La Familia Éxodo crece bajo impulso del Espíritu para hacer histórica nuestra consigna"
const unidos = "“Unidos con Cristo para siempre. Juntos caminaremos… y en Cristo nos liberaremos”"

const interesado = "¿Estas interesad@ en unirte a Grupo Éxodo? Contáctanos y te acercaremos al grupo más cercano"

const uneteExodo = "Únete y pertenece a la vida de la Iglesia y vive en Ella para su edificación. Por medio de la Iglesia recibimos la misión que continúa la obra de Jesús, el nuevo y definitivo Moisés, la ejercemos en su nombre y según nuestra vocación."

const jumbotronStyle = {
    background: 'url(http://movimientoexodo.com/wp-content/uploads/2015/07/slider_bg_3.jpg) no-repeat center',
    backgroundSize: "110% 100%",
    color: 'white'
}
const jumbotronStyle2 = {
    background: 'white'
}

