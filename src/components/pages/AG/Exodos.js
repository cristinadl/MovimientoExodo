import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Col from 'react-bootstrap/Col'

class Exodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: 'Nombre del grupo',
      logo: 'https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg',
      lema: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tribus: 'Pendiente el arreglo gg',
      porra: 'Arriba Pocahontas',
      fotos: 'Arreglo de urls para un carousel?',
      video: 'Link duh',
      internacional: 'Checkbox',
      pais: 'Mexico',
      estado: 'Nuevo Leon',
      cantidadExoditos: 18
    };
  }

  render() {
    return (
      <Col xl={3} lg={4} md={6} sm={12}>
        <Card className='my-2'>
          <Card.Img style={{width: "175px",height: '125px',display: "block",marginLeft: "auto",marginRight: "auto"}} variant="top" src={this.state.logo} alt='No carga porque ps no hay nada'/>
          <Card.Body>
            <Card.Title>{this.state.nombre}</Card.Title>
            <Card.Text><b>Lema: </b>{this.state.lema}</Card.Text>
            <Card.Text><b>Tribus: </b>{this.state.tribus}</Card.Text>
            <Card.Text><b>Porra: </b>{this.state.porra}</Card.Text>
            <Card.Text><b>Fotos: </b>{this.state.fotos}</Card.Text>
            <Card.Text><b>Video: </b>{this.state.video}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default function Exodos() {
    return (
      <div className='exodos'>
        <div className='h1'>
            Exodos
        </div>
        <CardGroup>
          <Exodo></Exodo>
          <Exodo></Exodo>
          <Exodo></Exodo>
          <Exodo></Exodo>
          <Exodo></Exodo>
        </CardGroup>
      </div>
    )
}
