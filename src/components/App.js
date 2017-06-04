import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="rootContainer">
      <Container fluid={true} textAlign="center">
        <Home />
      </Container>
      </div>
    );
  }
}

export default App;
