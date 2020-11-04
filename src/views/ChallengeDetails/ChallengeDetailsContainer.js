/*eslint-disable */
import React, { Component } from "react";
import Challenge from "./ChallengeDetails";

export default class ChallengesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenge: [{
        name: "tree",
        summary: "implement a tree data structure with all traversal method",
        _id: "1234",
        starter_code: "starter code",
        test: "",
      }],
      solution: null,
      userId: "123",

    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log('this.state >>', this.state);
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('contaxt>>>>',this.context);
}

componentWillMount(){
  console.log(this.props);
}

  render() {
    const { challenge, solution, userId } = this.state;
    return <Challenge challenge={challenge} solution={solution} userId={userId} />;
  }
}
