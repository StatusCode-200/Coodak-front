/*eslint-disable */
import React, { Component } from "react";
import Signup from "./Signup";
import  { AuthContext }  from '../context/auth';

export default class SignupContainer extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email:'',
            password: '',
            role: '',
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log('this.state >>', this.state);
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('contaxt>>>>',this.context);
        this.context.signUp(this.state.username, this.state.password, this.state.role);

    }

    render() {
        console.log('props in container >>', this.props);

        return <Signup handleChange={this.handleChange} handleSubmit={this.handleSubmit} />;
    }
}
