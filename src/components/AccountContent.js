import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import * as firebase from 'firebase'
 
var db;
 
export default class AccountContent extends Component {
  constructor(props) {
    super(props);
    this.db = firebase.firestore();
    this.state = {
        username: props.nombre,
        email: props.email,
        newPassword: ""
    }
    this.handleInput = this.handleInput.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }
 
    componentDidMount()
    { 
        
        this.db.collection('Usuarios')
        .where("userId", "==", firebase.auth().currentUser.uid)
        .get()
        .then(result => {
            result.forEach(doc => {
                this.setState({
                id: doc.id,
                email: doc.data().email,
                username: doc.data().nombre,
                })
            })
        })
 
    }
 
    handleInput(event)
    {
        const target = event.target;
        const value = target.value;
        const name = target.name;
 
        this.setState({[name]: value});
    }
 
    changePassword(event)
    {
        event.preventDefault();
        console.log(this.state.newPassword)
        firebase.auth().currentUser.updatePassword(this.state.newPassword).then(function() {
            console.log("new");
            this.setState({newPassword: ""});
          }).catch(function(error) {
            console.log(error);
          });
        event.preventDefault();
    }
 
    // signIn(email, password)  {
    //     firebase.auth().signInWithEmailAndPassword(email, password).then((Credential) => {
    //         //El objeto de Credential en Credential.user tiene el usario qe necesitas para el change password
    //         console.log(Credential);
    //         credential = Credential;
    //         this.getUsername(credential.user.uid)
    //     }).catch((error) => {
    //         console.log(error.message);
    //     })
    // }
 
    getUsername(id)
    {
        var username;
        console.log(id);
 
        db.collection('Usuarios').where("userId", "==", id)
      .get() // Metodo de Firebase para obtener los datos
      .then((Snap) => {
        Snap.forEach(function(user) {
            username = user.data().nombre
            console.log(user.data().nombre);
          });
          this.setState({username: username})
        });
    }

    render(){
        return (
            <Card>
            <Card.Body>
                <Form onSubmit={this.changePassword}>
                    <Form.Group as={Row}>
                        <Form.Label column sm="2">
                            Usuario: {this.state.username}
                        </Form.Label>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="2">
                            Contraseña:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control name="newPassword" type="password" onChange={this.handleInput}/>
                        </Col>
                    </Form.Group>
                    <Button variant="dark" type="submit" on>
                        Cambiar Contraseña
                    </Button>
                </Form>
            </Card.Body>
            </Card>
        )
    }
}
 