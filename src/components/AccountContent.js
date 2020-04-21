import React, { Component } from 'react'
import * as firebase from 'firebase'

export class AccountContent extends Component {

    signIn(email, password)  {
        firebase.auth().signInWithEmailAndPassword(email, password).then((Credential) => {
            //El objeto de Credential en Credential.user tiene el usario qe necesitas para el change password
            console.log(Credential);
        }).catch((error) => {
            console.log(error.message);
        })
    }

    state = {
        username: "Foo",
    }

    render(){
        return (
            <div>
                <p>Usuario: </p>
                # form
                <p>Contraseña: <button>Cambiar Contraseña</button></p>
                <p>Sign In: <button onClick={() => this.signIn('email@email.com', 'password')}>Sign In</button></p>
            </div>
        )
    }
}

export default AccountContent
