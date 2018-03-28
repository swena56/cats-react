import React, { Component } from 'react';

export default class CatCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="CatCard"> 
            	<div>{this.props.name}</div>

            </div>
        );
    }
}
