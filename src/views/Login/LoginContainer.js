import React, { Component } from "react";
import Login from "./Login";

export default class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "adnan",
    };
  }

  render() {
    const { name } = this.state;
    return <Login name={name} />;
  }
}
