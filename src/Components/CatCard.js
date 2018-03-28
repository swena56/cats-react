import React, { Component } from 'react';

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import CatPopUp from './CatPopUp';

export default class CatCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            	<Card className="CatCard" outline>
			        <CardImg top width="100%" 
			        src={this.props.img || "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"} alt="Card image cap" />
			        <CardBody>
			          <CardTitle>{this.props.name}</CardTitle>
			          <CardSubtitle>Card subtitle</CardSubtitle>
			          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
			          <CatPopUp buttonLabel="Info" />
			        </CardBody>
			    </Card>
        );
    }
}
