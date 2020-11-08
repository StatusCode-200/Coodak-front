/*eslint-disable */
import React, { Component } from "react";
import { connect } from "react-redux";
import Challenge from "./ChallengeDetails";
import { getChallengeAction , postChallengeAction , putChallengeAction } from "../../store/actions/challengeDetails";
// import { defaults } from "gh-pages";

 class ChallengesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenge: {},
      solution: null,  //null //if opening saved challenge it will be fetched
      //saved
      stderr: "your solution is wrong because of the following test cases : bla bla bla",  //null untill the check button is pressed then if there is error or solution is false then goes here
      stdout: "your solution have passed the following test cases",  //null untill the check button is pressed then if solution is true then goes here
    };

  }

   componentWillMount() {
    this.props.getChallenge({ savedChallengeId: this.props.match.params.savedChallengeId , userId: this.props.userId, token: this.props.token});
    // this.setState({challenge: this.props.challenge, savedChallengeId: this.props.match.params.savedChallengeId});
    // console.log("inside componentWillMount this.props.challenge",this.props.challenge);
  }

  checkResult = () => {
    console.log("checkResult");
  };

  handleChange = e => {
    this.setState({ challenge: { ...this.state.challenge ,  [e.target.name]: e.target.value }});
    console.log('this.state >>', this.state);
  }

  handleSubmit = e => {
    const { challenge , savedChallengeId} = this.state;
    const userId = this.props.userId;
    e.preventDefault();
    if(this.props.challenge){
      this.props.putChallenge({ challenge , savedChallengeId , userId });
    }else {
      this.props.postChallenge({ challenge, savedChallengeId , userId });
    console.log('contaxt>>>>',this.context);
    }
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
    const { challenge, solution, stderr, stdout } = this.props;
    return <Challenge challenge={challenge} solution={solution} checkResult={checkResult} stderr={stderr} stdout={stdout} />;
  }
}

const mapDispatchToProps = {
  getChallenge: getChallengeAction ,
  postChallenge: postChallengeAction ,
  putChallenge: putChallengeAction,
}

const mapStateToProps = store => ({
  challenge: store.challengeDetails.challenge,
  isLoading: store.challengeDetails.isLoading,
  userId: store.auth.user._id,
  token: store.auth.token,
  msg: store.challengeDetails.msg,
})


export default connect(mapStateToProps, mapDispatchToProps)(ChallengesContainer)
