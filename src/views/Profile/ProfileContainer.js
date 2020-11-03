import React, { Component } from "react";
import Profile from "./Profile";

export default class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      challenes: [],
    };
  }

  render() {
    const { challenes } = this.state;
    const { projects } = this.state;

    return <Profile projects={projects} challenes={challenes} />;
  }
}
