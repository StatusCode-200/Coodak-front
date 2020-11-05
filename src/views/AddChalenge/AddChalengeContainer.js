/*eslint-disable */
import React, { Component } from "react";
import AddChallenge from "./AddChalenge";


export default class AddChallengeContainer extends Component {

    constructor(props) {
        
        super(props);
        this.state = {
            summary: '',
            description:'',
            starter_code: '',
            test: '',
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log('this.state >>', this.state);
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('handleSubmit>>>>');

    }

    render() {
        console.log('props in AddChallenge container >>', this.props);

        return <AddChallenge handleChange={this.handleChange} handleSubmit={this.handleSubmit} />;
    }
}
