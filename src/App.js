import React, { Component } from 'react';
import './App.css';

import { Container, Row, Col } from 'reactstrap';
import CatCard from './Components/CatCard';
import CatsSlideShow from './Components/CatsSlideShow';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {

    return (
      <div className="App">
        Cats
        <Container>
          <Row>
            <Col><CatCard  name="CatName" /></Col>
            <Col><CatCard name="CatName" /></Col>
            <Col><CatCard name="CatName" /></Col>
          </Row>
          <br/>
          <Row>
            <Col><CatsSlideShow /></Col>
          </Row>
          <br/>
        </Container>

      </div>
    );
  }
}

export default App;
