/*eslint-disable */
import React, { Component } from "react";
import WhiteBoard from "./WhiteBoard";

export default class WhiteBoardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whiteboard: {
        user_challenge_id: "987",
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

  handleChange = e => {
    this.setState({ whiteboard: {...this.state.whiteboard, [e.target.name]: e.target.value}});
    
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("whiteboard data to be sent>>>>", this.state.whiteboard);
    // do a fetch to send data to the server then redirect to some page
  }

  render() {
    console.log('this.state >>', this.state);
    const { whiteboard, savedChallengeId, userId } = this.state;
    return <WhiteBoard whiteboard={whiteboard} savedChallengeId={savedChallengeId} userId={userId} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />;
  }
}
