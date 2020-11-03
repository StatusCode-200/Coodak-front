import React, { Component } from "react";
import Challenges from "./Challenges";

export default class ChallengesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: [{
        name: "tree",
        summary: "implement a tree data structure with all traversal method",
        _id: "1234",
      }],
    };
  }

  render() {
    const { challenges } = this.state;
    return <Challenges challenges={challenges} />;
  }
}
