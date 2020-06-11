import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

export default function ExodoHeader() {
    return (
        <header style={headerStyle}>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand as={Link} to="/">
                    <img
                        alt=""
                        src="http://movimientoexodo.com/wp-content/uploads/2015/12/logoOKK.png"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link as={Link} to="/">Avisos</Nav.Link>
                      <Nav.Link as={Link} to="/datos-del-exodo">Datos del Éxodo</Nav.Link>
                    </Nav>
                    <Nav>
                      <Nav.Link as={Link} to="/cuenta-exodo">Cuenta</Nav.Link>
                      <Nav.Link as={Link} to="/logout">Cerrar sesión</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

const headerStyle = {
    background: '#343a40',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
