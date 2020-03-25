import React from 'react'
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';

export default function Inicio() {
    return (
        <div>
            <h1>MOVIMIENTO ÉXODO</h1>
            <h3>Somos un grupo formal y dináico, constituido por adolecentes en busca de una formación integral</h3>
            <Link style = {linkStyle} to = "/nosotros"><button>SOBRE NOSOTROS</button></Link>
            <Container>
                <Row>
                    <Col>
                        <h5>¿Quienes Somos?</h5>
                        <h6>{quienesSomos}</h6>
                    </Col>
                    <Col>
                        <h5>Nuestros Valores</h5>
                        <h6>{nuestrosValores}</h6>
                    </Col>
                    <Col>
                        <h5>Nuestra Historia</h5>
                        <h6>{nuestraHistoria}</h6>
                    </Col>
                    <Col>
                        <h5>Nuestra Motivación</h5>
                        <h6>{nuestraMotivacion}</h6>
                    </Col>
                </Row>
            </Container>
            <h2>{familiaExodo}</h2>
            <h4>{unidos}</h4>
            <div>
                <h3>{interesado}</h3>
                <button>CONTACTO</button>
            </div>
        </div>
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
