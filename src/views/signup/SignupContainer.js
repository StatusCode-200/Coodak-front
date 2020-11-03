import React, { Component } from "react";
import Signup from "./Signup";

export default class SignupContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   username: '',
    //   password: '',
    //   role: '',
    };
  }

  render() {
    const { name } = this.state;
    return <Signup name={name} />;
  }
}
