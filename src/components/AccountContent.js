import React, { Component } from 'react'

export class AccountContent extends Component {

    state = {
        username: "Foo",
    }

    render(){
        return (
            <div>
                <p>Usuario: </p>
                # form
                <p>Contraseña: <button>Cambiar Contraseña</button></p>
            </div>
        )
    }
}

export default AccountContent
