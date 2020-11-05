/*eslint-disable */
import React, { Component } from "react";
import Signin from "./Signin";
import { connect } from "react-redux";
import { loginAction, signupAction, setSwitchToSignupAction } from "./../../store/actions";

class SigninContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email:'',
            password: '',
        };
    }

    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
       const { username, password, email } = this.state;
       const { switchToSignup } = this.props;
        e.preventDefault();
        if (switchToSignup){
          this.props.signup({ username, password, email });
        } else {
          this.props.login({ username, password });
        }
    }

    render() {

        return <Signin
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        setSwitchToSignup={this.props.setSwitchToSignup}
        switchToSignup={this.props.switchToSignup}
        isLoading={this.props.isLoading}
        msg={this.props.msg}
         />;
    }
}

const mapDispatchToProps = {
  login: loginAction,
  signup: signupAction,
  setSwitchToSignup: setSwitchToSignupAction,
}

const mapStateToProps = store => ({
  isLoading: store.auth.isLoading,
  user: store.auth.user,
  msg: store.auth.msg,
  switchToSignup: store.auth.switchToSignup,
});

export default connect(mapStateToProps, mapDispatchToProps) (SigninContainer);
