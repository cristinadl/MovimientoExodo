import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Alert from 'react-bootstrap/Alert'
import * as firebase from 'firebase'
import './pages/loader.css';
import 'firebase/auth';
 
var db;
 
export default class AccountContent extends Component {
  constructor(props) {
    super(props);
    this.db = firebase.firestore();
    this.state = {
        username: props.nombre,
        email: props.email,
        newPassword: "",
        oldPassword: "",
        loading: false,
        complete: false,
        error: false
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
                loading: false,
                complete: false,
                error: false
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
        this.setState({loading: true, complete: false})
        console.log(this.state.newPassword)
        var user = firebase.auth().currentUser;
        user.updatePassword(this.state.newPassword).then(()=> {
            this.setState({loading: false, complete: true})
        }).catch((error) => {
            this.setState({loading: false, error: true})
        });
        event.preventDefault();

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
                            Contraseña Nueva:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control name="newPassword" value={this.state.newPassword} type="password" onChange={this.handleInput}/>
                        </Col>
                    </Form.Group>
                    <Button variant="dark" type="submit" on>
                        Cambiar Contraseña
                    </Button>
                    { this.state.loading && <div className='loader center'/>}
                    { this.state.complete && <Alert variant='success' className='center'>Se ha cambiado la contraseña.</Alert>}
                    { this.state.error && <Alert variant='danger' className='center'>Error al intentar cambiar contraseña, comuníquese con el administrador.</Alert>}
                </Form>
            </Card.Body>
            </Card>
        )
    }
}
 