import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import * as firebase from 'firebase'

var db;

export default class DetalleExodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initial_name: '',
      id: '',
      email: '',
      nombre: '',
      tipoExodo: true,
      //contrasena: '',
      loading: true,
      uploading: false,
      complete: false
    };
    this.handleInput = this.handleInput.bind(this);
    this.updateExodo = this.updateExodo.bind(this);
    this.deleteExodo = this.deleteExodo.bind(this);
  }

  handleInput(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  toggleChange = () => {
    this.setState({
      tipoExodo: !this.state.tipoExodo,
    });
  }

  deleteExodo(exodo) {
    const id = exodo.id
    if (window.confirm("¿Desea eliminar al grupo exodo " + exodo.nombre + "?")) {
      var exodos = [...this.state.exodos];
      var index = exodos.indexOf(exodo)
      console.log(index)
      console.log(this.exodos.current.childNodes[0].childNodes[index])
      this.exodos.current.childNodes[0].childNodes[index].setAttribute('style', 'filter: brightness(150%)')
      db.collection('Usuarios').doc(id).delete().then(() => {
        console.log('El Grupo Exodo ha sido eliminado');
        exodos.splice(index, 1);
        this.setState({exodos: exodos})
      }).catch((error) => {
        console.log('Se genero un error al borrar');
      });
    }
  }

  updateExodo(event) {
      event.preventDefault();
      this.setState({uploading: true, complete: false})
      var data;
      if(this.state.contrasena.length > 6){
        data = {
            nombre: this.state.nombre,
            email: this.state.email,
            // contrasena: this.state.contrasena, TODO: postear contraseña
            tipoExodo: this.state.tipoExodo
        }
      } else {
        data = {
            nombre: this.state.nombre,
            email: this.state.email,
            tipoExodo: this.state.tipoExodo
        }
      }
      db.collection('Usuarios').doc(this.state.id).update(data).then(() => {
          console.log('Success'); // Cambiar por feedback al usuario
          this.setState({uploading: false, complete: true})
      }).catch((error) => {
          console.log('Error al crear Exodo'); // Cambiar por feedback al usuario
      })
      event.preventDefault();
  }

  componentDidMount() {
    const {id_exodo} = this.props.match.params;
    db = firebase.firestore();
      db.collection('Usuarios')
      .doc(id_exodo)
      .get()
      .then((result) => {
        this.setState({
        id: result.ref.id,
        initial_name: result.data().nombre,
        email: result.data().email,
        nombre: result.data().nombre,
        contraseña: result.data().contraseña,
        tipoExodo: result.data().tipoExodo,
        loading: false
        });
      });
  }

  render() {
    return (
      <div className='exodo'>
          { this.state.loading ? <div className='loader center'/> :
            <Card>
              <Card.Body>
                <Card.Title >{ this.state.initial_name }</Card.Title>
                <Form onSubmit={this.updateExodo}>
                  <Form.Group as={Row} >
                    <Form.Label column sm="2">
                      Nombre
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control name="nombre" value={this.state.nombre} onChange={this.handleInput} />
                    </Col>
                  </Form.Group>
                  {/* // TODO(): Poder realizar estos cambios también en auth.
                  <Form.Group as={Row} >
                    <Form.Label column sm="2">
                      email
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleInput} />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} >
                    <Form.Label column sm="2">
                      Contraseña
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control type="password" name="contrasena" value={this.state.contrasena} onChange={this.handleInput} />
                    </Col>
                  </Form.Group>
                  */}
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check defaultChecked={this.state.tipoExodo} name="tipoExodo" type="checkbox" label="Tipo Exodo" onChange={this.toggleChange}/>
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Publicar
                    </Button>
                    { this.state.uploading && <div className='loader center'/>}
                    { this.state.complete && <Alert variant='success' className='center'>El exodo ha sido actualizado</Alert>}
                </Form>
              </Card.Body>
            </Card>
          }
      </div>
    )
  }
}
