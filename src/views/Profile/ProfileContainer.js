/* eslint-disable */
import React, { Component } from "react";
import Profile from "./Profile";

export default class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          _id: "111",
          project_name: "pro1",
        },
      ],
      challenges: [
        {
          _id: "222",
          user_id: "000",
          challenge_name: "cha1",
        },
      ],
      username: "Samara",
      user_id: "000",
    };
  }

  render() {
    const { challenges, projects, username,  user_id } = this.state;


    return <Profile projects={projects} challenges={challenges} username={username} user_id={user_id}/>;
  }
}
