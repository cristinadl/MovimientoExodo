import React from 'react'
import {Link} from 'react-router-dom';

export default function AGHeader() {
    return (
        <header style = {headerStyle}>
            <Link style = {linkStyle} to = "/">Avisos</Link> | <Link 
            style = {linkStyle} to = "/subir-aviso">Subir Aviso</Link> | <Link 
            style = {linkStyle} to = "/exodos">Éxodos</Link> | <Link 
            style = {linkStyle} to = "/cuenta-ag">Cuenta</Link>
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