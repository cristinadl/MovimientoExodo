import React, { Component } from 'react'
import AccountContent from './../../AccountContent'
import * as firebase from 'firebase'

var db;

export default class CuentaAG extends Component {
  constructor(props) {
      super(props);
      this.state = {
          userHasProfilePic: false,
          profilePic: "",
          invalidFile: true,
          loadedFile: null,
          email: props.email
      }
    }

  loadData(){
    db = firebase.firestore();
      db.collection('Usuarios')
      .where('email', '==', this.state.email)
      .get()
      .then((result) => {
        this.setState({
        email: result.data().email,
        nombre: result.data().nombre,
        tipoExodo: result.data().tipoExodo,
        loginRedirect: true
        });
    });
  }

  render(){
    return (
        <AccountContent username={this.state.email}></AccountContent>
    )
  }
}
