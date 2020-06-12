import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Carousel from 'react-bootstrap/Carousel'
import { Container, Row, Col } from 'reactstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import './loader.css';
import Button from 'react-bootstrap/Button'

import * as firebase from 'firebase'
import 'firebase/auth';
import Figure from 'react-bootstrap/Figure';

var db;

var image;

function Exodo(props) {
  const exodo = props.exodo
  return (
    <Col xl={3} lg={4} md={6} sm={12}>
      <Card onClick={props.selectExodo} className='my-2'>
        <Card.Img style={{ width: "125px", height: '125px', display: "block", marginLeft: "auto", marginRight: "auto", marginTop: "5px" }} variant="top" src={exodo.logo} alt='No carga porque ps no hay nada' />
        <Card.Body>
          <Card.Title>{exodo.nombreCompleto}</Card.Title>

        </Card.Body>
      </Card>
    </Col>
  )
}

function ExodoData(props) {
  const exodo = props.exodo
  return (
    <Col >
      <Card onClick={props.selectExodo} className='my-2'>
        <Jumbotron style={jumbotronStyle}>
          <br></br>
          <h1 style={textColor}>{exodo.nombreCompleto}</h1>
          <p><strong>{exodo.lema}</strong></p>
          <p>{exodo.pais} , {exodo.estado}</p>
        </Jumbotron>
        <Jumbotron style={jumbotronStyle2}>
          <Container>
            <Row className="justify-content-md-center">
              <Col>
                <Image src={exodo.logo} thumbnail rounded />
                <h3>{exodo.nombreCompleto}</h3>
              </Col>
              <Col xs={8} style={{ textAlign: 'left' }}>
                <h4>NUESTRA PORRA</h4>
                <p style={textColor} className="display-linebreak">{exodo.porra}</p>
                <h4>NUESTRO LEMA</h4>
                <p style={textColor} className="display-linebreak">{exodo.lema}</p>
                <p><br></br><div style={textSize1}>{exodo.cantidadExoditos}</div><div style={textColor}>NÚMERO DE EXODITOS</div></p>
              </Col>
            </Row>
            <hr></hr>
            <Row className="justify-content-md-center">
              <Col>
                <Figure>
                  <h4>HISTORIA</h4>
                  <Figure.Caption>
                    <p style={textColor} className="display-linebreak" >{exodo.historia}</p>
                  </Figure.Caption>
                </Figure>
              </Col>
              <Col>
                <Figure>
                  <h4>¿SABÍAS QUE?</h4>
                    <Figure.Caption>
                      <p style={textColor} className="display-linebreak">{exodo.sabiasQue}</p>
                    </Figure.Caption>
                </Figure>
              </Col>
            </Row>
            <hr></hr>
            <Row className="justify-content-md-center">
              <h4 >TRIBUS QUE NOS CONFORMAN</h4>
            </Row>
            <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={exodo.foto[0]}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={exodo.foto[1]}
                    alt="Second slide"
                  />
                </Carousel.Item>
                {/* <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={exodo.foto[2]}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={exodo.foto[3]}
                    alt="Fourth slide"
                  />
                </Carousel.Item> */}
              </Carousel>
            <Button variant="secondary" onClick={props.resetExodo}>Regresar a todos los Éxodos</Button>
          </Container>
        </Jumbotron>
      </Card>
    </Col>
  )
}

export default class Exodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exodos: [],
      internacional: [],
      local: [],
      exodo_id: null,
      loading: true
    };
    this.selectExodo = this.selectExodo.bind(this)
    this.resetExodo = this.resetExodo.bind(this)
  }

  componentDidMount() {
    var exodos = this.state.exodos
    var logoDefault = 'data:image/jpeg;base64,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'
    var logo = ''
    var nombre = ''
    db = firebase.firestore();
      db.collection('Usuarios')
      .where('tipoExodo', '==', true)
      .get()
      .then((Snap) => {
        Snap.forEach(function (exodo) {
          exodo.data().logo !== ' ' ? logo = exodo.data().logo : logo = logoDefault
          exodo.data().nombreDeGrupo !== ' ' ? nombre = exodo.data().nombreDeGrupo : nombre = exodo.data().nombre
          if(exodo.data().fotos.length < 1 | exodo.data().fotos === undefined ){
            image = ['', '', '', ''];
          }else if(exodo.data().fotos.length < 2){
            image = [exodo.data().fotos[0], exodo.data().fotos[0], exodo.data().fotos[0], exodo.data().fotos[0]];
          }else if(exodo.data().fotos.length < 3){
            image = [exodo.data().fotos[0], exodo.data().fotos[1], exodo.data().fotos[0], exodo.data().fotos[0]];
          }else if(exodo.data().fotos.length < 4){
            image = [exodo.data().fotos[0], exodo.data().fotos[1], exodo.data().fotos[2], exodo.data().fotos[0]];
          }else{
            image = [exodo.data().fotos[0], exodo.data().fotos[1], exodo.data().fotos[2], exodo.data().fotos[3]];
          }
          exodos.push({
            id: exodo.ref.id,
            pais: exodo.data().pais,
            estado: exodo.data().Estado,
            nombre: exodo.data().nombre,
            nombreCompleto: nombre,
            internacional: exodo.data().Internacional,
            porra: exodo.data().porra,
            historia: exodo.data().historia,
            sabiasQue: exodo.data().sabiasQue,
            cantidadExoditos: exodo.data().cantidadExoditos,
            lema : exodo.data().lema,
            foto : image,
            logo: logo
          });
        });
        var internacional = exodos.filter(function (exodo) { return exodo.internacional })
        var local = exodos.filter(function (exodo) { return !exodo.internacional })
        this.setState({ exodos: exodos, internacional: internacional, local: local, loading: false })
      });
  }

  selectExodo(id) {
    this.setState(
      { exodo_id: id }
    )
  }

  resetExodo() {
    this.setState({exodo_id: null})
  }

  render() {
    var current_id = this.state.exodo_id;
    return (
      <div className='exodos' ref={this.exodos}>
        {this.state.exodo_id ?
          <ExodoData resetExodo={() => this.resetExodo()} exodo={this.state.exodos.filter(function (exodo) { return exodo.id === current_id })[0]}></ExodoData>
          :
          this.state.loading ? <div className='loader center' /> :
            <div>
              <Card>
                <Card.Body>
                  <Card.Title>Éxodos Locales</Card.Title>
                  <CardGroup>{this.state.local.map((exodo, index) => (<Exodo className='exodo' exodo={exodo} key={exodo.id} selectExodo={() => this.selectExodo(exodo.id)}></Exodo>))}</CardGroup>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title> Éxodos Internacionales </Card.Title>
                  <CardGroup>{this.state.internacional.map((exodo, index) => (<Exodo className='exodo' exodo={exodo} key={exodo.id} selectExodo={() => this.selectExodo(exodo.id)}></Exodo>))}</CardGroup>
                </Card.Body>
              </Card>
            </div>

        }
      </div>
    )
  }
}

const textColor = {
  color: "#445cbc",
}

const jumbotronStyle2 = {
  padding: '1rem',
  background: 'white'
}

const jumbotronStyle = {
  background: 'url(http://movimientoexodo.com/wp-content/uploads/2015/01/dd23aaa.jpg) no-repeat 20% 25%',
  backgroundSize: "cover",
  textAlign: 'right',
}

const textSize1 = {
  fontSize: "3rem"
}