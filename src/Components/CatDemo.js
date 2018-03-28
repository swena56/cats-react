import React from 'react';
import CatCard from './CatCard';
import { Container, Row, Col } from 'reactstrap';
import CatsSlideShow from './CatsSlideShow';

export default class CatDemo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
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
