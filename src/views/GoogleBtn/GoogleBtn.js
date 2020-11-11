/*eslint-disable*/
import React, { Component } from 'react'
import axios from "axios";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Cookies from "universal-cookie";
const cookies = new Cookies();
import { Redirect } from "react-router-dom";

import { API } from "../../store/config";


const CLIENT_ID = '612985001665-ojtsob6eddqf3pv3rmc423vf6uq20mmi.apps.googleusercontent.com';


class GoogleBtn extends Component {
   constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: ''
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    // this.logout = this.logout.bind(this);
    // this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login (response) {
    console.log("response.accessToken", response.accessToken);
    if(response.accessToken){
      this.setState(state => ({
        isLogined: true,
        accessToken: response.accessToken
      }));
//
// const API = "https://coodak-api.herokuapp.com";
//  const API = "http://localhost:4000";
axios.get(`${API}/reactOauth?token=${response.accessToken}`, { headers: { "Content-Type": "application/json" } })
    .then(({ data }) => {
      console.log(data);
      cookies.set("token", data.token);
      document.location.reload();
      // console.log("token from cookies",cookies.get("token"));

    }).catch((err) => {
      console.log(err);
    });

//
    }
  }

  // logout (response) {
  //   this.setState(state => ({
  //     isLogined: false,
  //     accessToken: ''
  //   }));
  // }

  handleLoginFailure (response) {
    alert('Failed to log in')
  }

  // handleLogoutFailure (response) {
  //   alert('Failed to log out')
  // }

  render() {
    return (
      <>
      {
        this.props.user&&this.props.user.username ?
          <Redirect to="/" />
          :
          <GoogleLogin
        clientId={ CLIENT_ID }
        buttonText=''
        onSuccess={ this.login }
        onFailure={ this.handleLoginFailure }
        cookiePolicy={ 'single_host_origin' }
        responseType='code,token'
      />
      }
      </>
    )
  }
}

export default GoogleBtn;
