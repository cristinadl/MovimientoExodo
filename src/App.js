import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
import Nosotros from './components/pages/Nosotros'
import NuestrosValores from './components/pages/NuestrosValores'
import uuid from 'uuid';
import axios from 'axios';
import Footer from './components/layout/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state = {
    todos: []
  }

  componentDidMount() {
    // Limit only works with '' not "".
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos: res.data}))
  }

  render() {
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
          <Route exact path = "/" render = {props => (
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
}

const QuienesSomos = 'Movimiento Éxodo está sustentado por una espiritualidad cristiana con un fuerte y claro fundamento bíblico. Somos un movimiento eclesial católico a favor de los adolescentes que tiene como objetivo la promoción integral del adolescente sobre la base de 5 valores: RELIGIOSO, CULTURAL, FISICO, TÉCNICO, PSICO-SOCIAL.'

export default App;
