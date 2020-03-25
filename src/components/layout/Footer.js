import React from 'react'
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';

export default function Footer() {
    return (
        <footer style = {footerStyle}>
            <Container>
                <Row>
                    <Col>{footerText}</Col>
                    <Col>
                        <p><Link style = {linkStyle} to = "/nosotros">Sobre Nosotros</Link></p>
                        <p><Link style = {linkStyle} to = "/nuestros-valores">Nuestros Valores</Link></p>
                        <p>Materiales de Apoyo</p>
                        <p>Grupos Éxodo</p>
                        <p>Grupos Internacionales</p>
                    </Col>
                    <Col>
                        <h3>¡CONTÁCTANOS!</h3>
                        <p>
                            43 Poniente y Privada de la 16 de Septiembre
                            Col. Huexotitla Puebla
                            Puebla México
                        </p>
                        <p>+52 (01222) 240 77 99 | 409 04 30</p>
                        <p>+52 (01222) 240 24 29 | 243 62 90 </p>
                        <p>+52 (044) 2227 57 10 69</p>
                        <p>contacto@movimientoexodo.com</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

const footerText = "Movimiento Éxodo es un grupo sustentado por una espiritualidad cristiana con un fuerte y claro fundamento bíblico. Somos un movimiento eclesial católico a favor de los adolescentes que tiene como objetivo la promoción integral del adolescente sobre la base de 5 valores: RELIGIOSO, CULTURAL, FISICO, TÉCNICO, PSICO-SOCIAL. "

const footerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}