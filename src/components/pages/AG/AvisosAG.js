import React from 'react'
import Card from 'react-bootstrap/Card'

class Anuncio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Titulo de aviso',
      author: 'Autor del aviso',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec gravida nisi. Aenean mattis nisl non blandit tempus. Phasellus id sem felis. Morbi tellus ligula, feugiat eget maximus vitae, laoreet cursus arcu. Phasellus non aliquet mauris. Ut fringilla volutpat erat, eu fringilla nibh condimentum vitae. Sed et consequat nibh. Cras id aliquam libero. Integer sapien mi, tempor sit amet pellentesque et, viverra sed urna. Duis sed nisi a lorem maximus auctor.',
      date: 'Fecha del aviso'
    };
  }

  render() {
    return (
      <Card className='mx-5 my-2'>
        <Card.Body>
          <div style={{textAlign: 'right'}}>Icono de basura</div>
          <Card.Title style={{textAlign: 'left'}}>{this.state.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted" style={{textAlign: 'left'}}>{this.state.author}</Card.Subtitle>
          <Card.Text style={{textAlign: 'center'}}>{this.state.content}</Card.Text>
          <Card.Text style={{textAlign: 'right'}}>{this.state.date}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default function AvisosAG() {
  return (
    <div className='anuncios'>
      <Anuncio></Anuncio>
      <Anuncio></Anuncio>
    </div>
  )
};
