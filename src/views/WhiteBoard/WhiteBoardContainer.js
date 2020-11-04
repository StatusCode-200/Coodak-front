import React, { Component } from "react";
import WhiteBoard from "./WhiteBoard";

export default class WhiteBoardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whiteboard: {
        user_challenge_id: "1234",
        problem_domain: "adnan",
        algorithm: "some algorithm for the challenge",
        bigo: null,
        edge_cases: "empty tree",
        pseudo_code: null,
        input: "tree",
        output: "tree",
      },
      savedChallengeId: "987",
      userId: "123",
    };
  }

  render() {
    const { whiteboard, savedChallengeId, userId } = this.state;
    return <WhiteBoard whiteboard={whiteboard} savedChallengeId={savedChallengeId} userId={userId} />;
  }
}
