import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import * as firebase from 'firebase'

var db;
var credential;

export class AccountContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: props.username,
        newPassword: ""
    }
    this.handleInput = this.handleInput.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }


    render(){
        return (
            // <div>
            //     <p>Usuario: {this.state.username}</p>
            //     # form
            //     <p>Contraseña: <button>Cambiar Contraseña</button></p>
            //     <p>Sign In: <button onClick={() => this.signIn('email@email.com', 'password')}>Sign In</button></p>
            // </div>
            <Card>
            <Card.Body>
                    {/* <Card.Text column sm = "10" style={{textAlign: 'left'}}>
                        <p>Usuario: {this.state.username}</p>
                    </Card.Text> */}
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

    componentDidMount()
    {
        db = firebase.firestore();
        this.signIn('agregional@gmail.com', '1234567');

        this.render();
    //     var username;
    //     console.log("w");

    //     db.collection('Usuarios').where("userId", "==", "bjGPO1x4ILUL3H3Zsmwo235RWh53")
    //   .get() // Metodo de Firebase para obtener los datos
    //   .then((Snap) => {
    //     Snap.forEach(function(user) {
    //         username = user.data().nombre
    //         console.log(user.data().nombre);
    //       });
    //       this.setState({username: username})
    //     });

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
        credential.user.updatePassword(this.state.newPassword).then(function() {
            console.log("new");
            this.setState({newPassword: ""});
          }).catch(function(error) {
            console.log(error);
          });
        event.preventDefault();
    }

    signIn(email, password)  {
        firebase.auth().signInWithEmailAndPassword(email, password).then((Credential) => {
            //El objeto de Credential en Credential.user tiene el usario qe necesitas para el change password
            console.log(Credential);
            credential = Credential;
            this.getUsername(credential.user.uid)
        }).catch((error) => {
            console.log(error.message);
        })
    }

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
}

export default AccountContent
