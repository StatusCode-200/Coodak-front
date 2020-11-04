import React, { Component } from "react";
import Challenge from "./Challenge";

export default class ChallengesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenge: [{
        name: "tree",
        summary: "implement a tree data structure with all traversal method",
        _id: "1234",
        starter_code: "",
        test: "",
      }],
      solution: null,
      userId: "123",

    };
  }

  render() {
    const { challenge, solution, userId } = this.state;
    return <Challenge challenge={challenge} solution={solution} userId={userId} />;
  }
}
