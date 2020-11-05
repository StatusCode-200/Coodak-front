/*eslint-disable */
import React, { Component } from "react";
import Challenge from "./ChallengeDetails";

export default class ChallengesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenge: { //original    will always be wanted for both saved/non-saved
        name: "tree",
        summary: "implement a tree data structure with all traversal method",
        description: "challenge description",
        _id: "1234",
        starter_code: "starter code",
        test: "",
      },
      solution: null,  //null //if opening saved challenge it will be fetched
      userId: "123",
      //saved
        savedChallengeId: null, //null //if opening saved challenge it will be getted from route(link) (this.props.match.params.id)
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

/*
componentWillMount(){
  const challengeId = this.props.match.params.id;
  if (this.props.user){
  // fetch from userChallenges/userId/10/challenges/500 // response with solution
}
}
  fetch It from the server
}
*/

  render() {
    const { challenge, solution, userId, savedChallengeId } = this.state;
    return <Challenge challenge={challenge} solution={solution} userId={userId} savedChallengeId={savedChallengeId} />;
  }
}
