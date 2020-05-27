import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

export default function Header(props) {
    return (
        <header style = {headerStyle}>
          <Navbar bg="dark" variant="dark">
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
                    <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                    <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
                    <Nav.Link as={Link} to="/nuestros-valores">Nuestros Valores</Nav.Link>
                    <Nav.Link as={Link} to="/exodos">Grupos Exodo</Nav.Link>
                  </Nav>
                  <Nav>
                      <Nav.Link href="/login">Iniciar sesión</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

// const linkStyle = {
//     color: '#fff',
//     textDecoration: 'none'
// }
