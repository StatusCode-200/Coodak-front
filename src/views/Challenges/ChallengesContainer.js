import React, { Component } from "react";
import Challenges from "./Challenges";

export default class ChallengesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: [],
    };
  }

  render() {
    const { challenges } = this.state;
    return <Challenges challenges={challenges} />;
  }
}
