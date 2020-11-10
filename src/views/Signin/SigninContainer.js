/*eslint-disable */
import React, { Component } from "react";
import Signin from "./Signin";
import { Redirect } from "react-router-dom";
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

    handleGitHubSignIn(){
      let URL = "https://github.com/login/oauth/authorize";
    let options = {
      client_id: document.location.origin.includes("localhost") ? "d3c0c39f87fedf5a33c8" : "f9f24fcbf3cf9a8ff233",
      redirect_uri: `${document.location.origin}/oauth2`,
      scope: "read:email",
      state: "asldfjdfs",
    };
    let QueryString = Object.keys(options)
      .map((key) => {
        return `${key}=` + encodeURIComponent(options[key]);
      })
      .join("&");
    let authURL = `${URL}?${QueryString}`;
    console.log(">>>> auth ", authURL);
    let link = document.getElementById("oauth");
    link.setAttribute("href", authURL);
    }

    handleGoogleSignIn(){
      let googleURL = "https://accounts.google.com/o/oauth2/v2/auth";

    let googleOptions = {
      response_type: "code",
      client_id: document.location.origin.includes("localhost") ? "425927941032-6o1spfk58qsfo8fdfrka1ang198ahimd.apps.googleusercontent.com" : "119702569642-m6aiji66l3acdhl81jsvf31no84tfa0d.apps.googleusercontent.com",
      redirect_uri: `${document.location.origin}/oauth`,
      scope: "openid email profile",
      state: `${document.location.hostname}`,
      access_type: "offline",
    };

    let queryString = Object.keys(googleOptions)
      .map((key) => {
        return `${key}=` + encodeURIComponent(googleOptions[key]);
      })
      .join("&");

    let googleAuthURL = `${googleURL}?${queryString}`;

    let googleLink = document.getElementById("oauthGoogle");
    googleLink.setAttribute("href", googleAuthURL);
    }

    render() {
        return (
        <>
        {
          this.props.user.username ?
            <Redirect to="/" />
            :
            <Signin
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            setSwitchToSignup={this.props.setSwitchToSignup}
            switchToSignup={this.props.switchToSignup}
            isLoading={this.props.isLoading}
            msg={this.props.msg}
             />
        }
        </>
      )
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
