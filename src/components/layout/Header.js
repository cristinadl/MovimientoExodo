import React from 'react'
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <header style = {headerStyle}>
            <Link style = {linkStyle} to = "/">Inicio</Link> | <Link 
            style = {linkStyle} to = "/nosotros">Nosotros</Link> | <Link 
            style = {linkStyle} to = "/nuestros-valores">Nuestros Valores</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}