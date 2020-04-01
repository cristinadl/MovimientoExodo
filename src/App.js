import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import AGHeader from './components/layout/AG/AGHeader';
import Inicio from './components/pages/Inicio';
import Nosotros from './components/pages/Nosotros';
import AvisosAG from './components/pages/AG/AvisosAG';
import SubirAviso from './components/pages/AG/SubirAviso';
import Exodos from './components/pages/AG/Exodos'
import CuentaAG from './components/pages/AG/CuentaAG';
import NuestrosValores from './components/pages/NuestrosValores';
import uuid from 'uuid';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const accountType =
{
  EXODITO: 'Exodito',
  EXODO: 'Exodo',
  AG: 'AG'
}

class App extends React.Component {
  state = {
    todos: [],
    currentAccount: accountType.AG
  }

  componentDidMount() {
    // Limit only works with '' not "".
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos: res.data}))
  }

  render()
  {
    switch(this.state.currentAccount)
    {
      case accountType.EXODITO: return this.renderExodito();
      case accountType.EXODO: return this.renderExodo();
      case accountType.AG: return this.renderAG();
      default: return this.renderExodito();
    }
  }

  renderExodito()
  {
    return (
      <Router>
      <div className="App">
        <div className="container">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
          <Header/>
          <Route exact path = "/" component = {Inicio} render = {props => (
            <React.Fragment>
            </React.Fragment>
          )}/>
          <Route path="/nosotros" component = {Nosotros}/>
          <Route path="/nuestros-valores" component = {NuestrosValores}/>
          <Footer/>
        </div>
      </div>
      </Router>
    );
  }

  renderExodo()
  {

  }

  renderAG()
  {
    return (
      <Router>
      <div className="App">
        <div className="container">
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossorigin="anonymous"
          />
          <AGHeader/>
          <Route exact path = "/" component = {AvisosAG} render/>
          <Route path="/subir-aviso" component = {SubirAviso}/>
          <Route path="/exodos" component = {Exodos}/>
          <Route path="/cuenta-ag" component = {CuentaAG}/>
          <Footer/>
        </div>
      </div>
      </Router>
    );
  }
}

const QuienesSomos = 'Movimiento Éxodo está sustentado por una espiritualidad cristiana con un fuerte y claro fundamento bíblico. Somos un movimiento eclesial católico a favor de los adolescentes que tiene como objetivo la promoción integral del adolescente sobre la base de 5 valores: RELIGIOSO, CULTURAL, FISICO, TÉCNICO, PSICO-SOCIAL.'

export default App;
