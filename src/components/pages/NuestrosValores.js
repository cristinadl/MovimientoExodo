import React from 'react'
//import { Container, Row, Col } from 'reactstrap';
import { Container, Row } from 'reactstrap';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardDeck'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

export default function NuestrosValores() {
    return (
        <Card>
            <Card.Body>
                <Jumbotron style={jumbotronStyle}>
                    <br></br>
                    <h2>Nuestros Cinco Valores</h2>
                    <p>
                        “Unidos con Cristo para siempre. Juntos caminaremos…
                        <br></br>
                        y en Cristo nos liberaremos”
                    </p>

                </Jumbotron>
                <Jumbotron style={jumbotronStyle2} >
                    <h2>
                        Éxodo es un movimiento eclesial católico a favor de los adolescentes,
                        nuestro principal objetivo es la promoción integral del adolescente
                        sobre la base de 5 valores: Físico, Técnico, Psico-Social, Cultural y Religioso.
                    </h2>
                    <br></br>

                </Jumbotron>
            </Card.Body>
            <Container>
                <Row>
                    <CardColumns >
                        <Card border="light" style={{ width: '18rem' }}>
                            <Card.Img width={171}
                                height={180}
                                alt="171x180"
                                src="https://image.flaticon.com/icons/svg/2072/2072707.svg" />
                            <Card.Body>
                                <Card.Title>VALOR FÍSICO</Card.Title>
                                <Card.Text>
                                    {valorFisico}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card border="light" style={{ width: '18rem' }}>
                            <Card.Img width={171}
                                height={180}
                                alt="171x180"
                                src="https://image.flaticon.com/icons/svg/2362/2362537.svg" />
                            <Card.Body>
                                <Card.Title>VALOR TÉCNICO</Card.Title>
                                <Card.Text>
                                    {valorTecnico}
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card border="light" style={{ width: '18rem' }}>
                            <Card.Img
                                width={171}
                                height={180}
                                alt="171x180"
                                src="https://image.flaticon.com/icons/svg/2395/2395484.svg" />
                            <Card.Body>
                                <Card.Title>VALOR PSICO-SOCIAL</Card.Title>
                                <Card.Text>
                                    {valorPsico}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                </Row>
                <br />
                <Row className="justify-content-md-center">
                    <CardColumns>
                        <Card border="light" style={{ width: '18rem' }}>
                            <Card.Img
                                width={171}
                                height={180}
                                alt="171x180"
                                src="https://image.flaticon.com/icons/svg/2052/2052246.svg" />
                            <Card.Body>
                                <Card.Title>VALOR CULTURAL</Card.Title>
                                <Card.Text>
                                    {valorCultral}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card border="light" style={{ width: '18rem' }}>
                            <Card.Img
                                width={171}
                                height={180}
                                alt="171x180"
                                src="https://image.flaticon.com/icons/svg/1495/1495565.svg" />
                            <Card.Body>
                                <Card.Title>VALOR CULTURAL</Card.Title>
                                <Card.Text>
                                    {valorCultral}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                </Row>
            </Container>
            <Alert variant="primary" style={{ margin: '1rem' }}>
                <Alert.Heading>{interesado}</Alert.Heading>
                <p>
                    {uneteExodo}
                </p>
                <hr />
                <p className="mb-0">
                    <Button variant="outline-primary">¡Contáctanos!</Button>
                </p>
            </Alert>
        </Card>

    )
}

const interesado = "¿Estas interesad@ en unirte a Grupo Éxodo?"

const uneteExodo = "Únete y pertenece a la vida de la Iglesia y vive en Ella para su edificación. Por medio de la Iglesia recibimos la misión que continúa la obra de Jesús, el nuevo y definitivo Moisés, la ejercemos en su nombre y según nuestra vocación."

const valorFisico = "Forma parte de este valor todo aquello que impulse y ayude a tener y conservar buena salud y más de fondo todo lo que sirva a mejorar la calidad de vida. Dios nos ha dado un cuerpo que debes desarrollar en forma armónica. Hablar de actividad física no solamente nos lleva a pensar en un cuerpo más fuerte o bello, sino también en un concepto más amplio y más complejo como es la salud."
const valorTecnico = "Este valor comprende el manejo de un conjunto de conocimientos, procedimientos y habilidades de que se vale la ciencia y el arte .Buscamos desarrollar la habilidad de aplicar adecuadamente de esos recursos para responder a las situaciones mas diversas que se pueden presentar. Aquí integramos actividades del escultismo que nos ayudan."
const valorPsico = "Este valor busca propiciar el conocimiento, aceptación y desarrollo de nuestra persona, a fin de liberarnos de los obstáculos que impiden comprendernos a nosotros y a los demás. Impulsa el desarrollo de tus capacidades de relación serena y franca con los demás."
const valorCultral = "Busca fomentar una actitud positiva, que valora, asume, promueve el conocimiento y aprecio de nuestras raíces culturales, la apreciación de las distintas expresiones culturales contemporáneas como el teatro, cine, pintura, televisión, etc. Buscando tener una visión crítica hacia todos ellos."
//const valorReligioso = "En Exodo tenemos como base de los demás valores al valor religioso; constantemente se habla de lo que Jesús nos pide, de las místicas que representan actitudes de Cristo, y del amor que Dios nos tiene. La mística del grupo, habla de la esclavitud de un pueblo, que fue llamado por Dios a caminar, a ser libre y a buscar la tierra prometida, que en Jesús se transforma en el Reino de Dios. El cultivar este valor evita que Exodo se convierta en una guardería o en un grupo social."


// const linkStyle = {
//     color: '#000',
//     textDecoration: 'none'
// }

const jumbotronStyle = {
    background: 'url(http://movimientoexodo.com/wp-content/uploads/2014/07/teenprayer.jpg) no-repeat center',
    backgroundSize: "cover",
    textAlign: 'left',
    color: 'white'
}

const jumbotronStyle2 = {
    padding: '1rem',
    background: 'white'
}
