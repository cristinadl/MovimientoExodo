import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
import Nosotros from './components/pages/Nosotros'
import NuestrosValores from './components/pages/NuestrosValores'
import uuid from 'uuid';
import axios from 'axios';

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
          <Header/>
          <Route exact path = "/" render = {props => (
            <React.Fragment>
            </React.Fragment>
          )}/>
          <Route path="/nosotros" component = {Nosotros}/>
          <Route path="/nuestros-valores" component = {NuestrosValores}/>
          
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
