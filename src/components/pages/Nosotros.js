import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { Container, Row, Col } from 'reactstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import Figure from 'react-bootstrap/Figure'

export default function Nosotros() {
    return (
        <Card>
            <CardBody>
                <Jumbotron style={jumbotronStyle}>
                    <br></br>
                    <h2 style={textColor}>MOVIMIENTO ÉXODO</h2>
                    <p>
                        “UNIDOS CON CRISTO PARA SIEMPRE”
                    </p>
                </Jumbotron>

                <Jumbotron style={jumbotronStyle2}>
                    <Container>
                        <Row>
                            <Col>
                                <Image src="http://movimientoexodo.com/wp-content/uploads/2015/01/Untitled-4.jpg" thumbnail rounded />
                            </Col>
                            <Col xs={8} style={{ textAlign: 'left' }}>
                                <h4>¿QUIENES SOMOS?</h4>
                                <p style={textColor}>{quieneSomos}</p>
                                <p style={textColor}>{quieneSomos2}</p>
                            </Col>
                        </Row>
                        <hr></hr>
                        <Row>
                            <Col>
                                <p><div style={textSize1}>199</div><br></br><div style={textColor}>TRIBUS REGISTRADAS</div></p>
                            </Col>
                            <Col>
                                <p><div style={textSize1}>2702</div><br></br><div style={textColor}>MIEMBROS TOTALES</div></p>
                            </Col>
                            <Col>
                                <p><div style={textSize1}>35</div><br></br><div style={textColor}>GRUPOS ÉXODO</div></p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <hr></hr>
                <Figure>
                    <Figure.Image
                        fluid
                        rounded
                        src="http://movimientoexodo.com/wp-content/uploads/2014/12/7.jpg"
                    />
                    <Figure.Caption>
                        <h4>NUESTRO ORIGEN</h4>
                        {nuestoOrigen}
                        <br></br>
                        {nuestoOrigen2}
                    </Figure.Caption>
                </Figure>
                <hr></hr>
                <Container>
                    <h2>ESTRUCTURA Y ORGANIGRAMA</h2>
                    <Row>
                        <Col>
                            <Figure>
                                <Figure.Image
                                    width={171}
                                    height={180}
                                    alt="171x180"
                                    src="https://image.flaticon.com/icons/svg/1006/1006555.svg"
                                />
                                <Figure.Caption>
                                    <h6>RELIGIOSOS – LAICOS</h6>
                                    {religiososLaicos}
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col >
                            <Figure >
                                <Figure.Image
                                    width={171}
                                    height={180}
                                    alt="171x180"
                                    src="https://image.flaticon.com/icons/svg/1506/1506635.svg"

                                />
                                <Figure.Caption>
                                    <h6>GRUPOS</h6>
                                    {grupos}
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col>
                            <Figure>
                                <Figure.Image
                                    width={171}
                                    height={180}
                                    alt="171x180"
                                    src="https://image.flaticon.com/icons/svg/476/476863.svg"
                                />
                                <Figure.Caption>
                                    <h6>EQUIPO DE DIRIGENTES</h6>
                                    {equipoDeDirigentes}
                                </Figure.Caption>
                            </Figure>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Figure>
                                <Figure.Image
                                    width={171}
                                    height={180}
                                    alt="171x180"
                                    src="https://image.flaticon.com/icons/svg/509/509846.svg"
                                />
                                <Figure.Caption>
                                    <h6>TRIBUS</h6>
                                    {tribus}
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col>
                            <Figure>
                                <Figure.Image
                                    width={171}
                                    height={180}
                                    alt="171x180"
                                    src="https://image.flaticon.com/icons/svg/2636/2636275.svg"
                                />
                                <Figure.Caption>
                                    <h6>ASESORES</h6>
                                    {asesores}
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col>
                            <Figure>
                                <Figure.Image
                                    width={171}
                                    height={180}
                                    alt="171x180"
                                    src="https://image.flaticon.com/icons/svg/1256/1256650.svg"
                                />
                                <Figure.Caption>
                                    <h6>EXODITOS</h6>
                                    {exoditos}
                                </Figure.Caption>
                            </Figure>
                        </Col>
                    </Row>
                </Container>
            </CardBody>
        </Card>
    )
}

const quieneSomos = "Movimiento Éxodo está sustentado por una espiritualidad cristiana con un fuerte y claro fundamento bíblico. Somos un movimiento eclesial católico a favor de los adolescentes que tiene como objetivo la promoción integral del adolescente sobre la base de 5 valores: RELIGIOSO, CULTURAL, FISICO, TÉCNICO, PSICO-SOCIAL."
const quieneSomos2 = "Desarrollamos una promoción significativa al impulso que se vive de ir alcanzando la madurez en actitudes positivas y de vida. Buscamos adquirir no solamente ciertos conocimientos sino asumir los valores del Reino de Dios, iniciado en el Éxodo con Moisés y proclamado como definitivo por Jesús."
const nuestoOrigen = "Éxodo nació el 4 de febrero de 1984, en la ciudad de Puebla, en la Comunidad Cristiana del Templo de “Santa María, Madre de la Iglesia” (Huexotitla), comunidad animada por la Congregación de Misioneros del Espíritu Santo."
const nuestoOrigen2 = "Éxodo fue fundado por el Padre Hilario Cedeño MSpS, quien junto con un grupo de adolescentes, jóvenes y adultos marcaron con cariño y esfuerzo las primeras huellas. Surgiendo como respuesta a la necesidad de la comunidad cristiana que impulse a los jóvenes en su adolescencia; una propuesta que acompañe la persona desde el fin de la infancia hasta la primera juventud, formando con actitudes definidas cristianas con un objetivo claro en su vida."

const religiososLaicos = "Son los principales dirigentes de todos el movimiento. Guían y dan forma a las actividades de los Dirigentes y Asesores."
const grupos = "Movimiento Éxodo esta formado por diferentes grupos, presentes en más de 13 estados de la República Mexicana, España, Colombia y Costa Rica."
const equipoDeDirigentes = "Un Dirigente, es un cristiano comprometido en el servicio de los adolescentes. Acompaña a una tribu en su caminar, dinamizándola con la mística de Éxodo y formando un equipo con los/las demás dirigentes."
const tribus = "Parte de un grupo, constituido por adolescentes que buscan una formación integral. Como en el Éxodo Bíblico, cada tribu tiene su propia mística, emanada de su historia y reflejada en su lema, banderín y uniforme."
const asesores = "Es el responsable primero y ultimo de que se cumplan los objetivos y la mística del Éxodo. Es junto con el coordinador y el equipo de dirigentes quien asume la responsabilidad eclesial del Grupo Éxodo."
const exoditos = "Son una de las piezas más importantes de nuestro movimiento; son adolescentes de 12 a 16 años, dirigidos por un dirigente (joven universitario de 18 a 25 años)."


const jumbotronStyle = {
    background: 'url(http://movimientoexodo.com/wp-content/uploads/2015/01/dd23aaa.jpg) no-repeat 20% 25%',
    backgroundSize: "cover",
    textAlign: 'right',
}

const jumbotronStyle2 = {
    padding: '1rem',
    background: 'white'
}

const textColor = {
    color: "#445cbc"
}
const textSize1 = {
    fontSize: "3rem"
}