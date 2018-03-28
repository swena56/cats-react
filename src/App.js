import React, { Component } from 'react';
import './App.css';

import { Container, Row, Col } from 'reactstrap';
import Pages from './Components/Pages';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {

    return (
      <div className="App">
        <Pages />
      </div>
    );
  }
}

export default App;
