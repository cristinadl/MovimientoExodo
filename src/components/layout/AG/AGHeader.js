import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

export default function AGHeader() {
    return (
        <header style={headerStyle}>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
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
                        <Nav.Link as={Link} to="/subir-aviso">Subir Aviso</Nav.Link>
                        <Nav.Link as={Link} to="/exodos">Éxodos</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/cuenta-ag">Cuenta</Nav.Link>
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
