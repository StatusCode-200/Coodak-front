/*eslint-disable */
import React, { Component } from "react";
import { connect } from "react-redux";
import Challenge from "./ChallengeDetails";
import { getChallengeAction , postChallengeAction , putChallengeAction } from "../../store/actions/challengeDetails";
// import { defaults } from "gh-pages";
import Loading from "../../components/Loading/Loading";

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
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.challenge && (JSON.stringify(nextProps.challenge) !== JSON.stringify(this.props.challenge))){
      this.setState({ solution: nextProps.challenge.solution || nextProps.challenge.starter_code })
    }
  }

  // handleChange = e => {
  //   this.setState({ challenge: { ...this.state.challenge ,  [e.target.name]: e.target.value }});
  // }

  handleSubmit = e => {
    const { solution } = this.state;
    const { userId, token } = this.props;
    e.preventDefault();
    if(this.props.challenge.solution){
      this.props.putChallenge({ solution , userId, savedChallengeId: this.props.match.params.savedChallengeId, token });
    }else {
      this.props.postChallenge({ solution, userId, savedChallengeId: this.props.match.params.savedChallengeId, token });
    }
}

    checkResult = () => {
      console.log("checkResult");
    };

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
    const { solution } = this.state;
    const { isLoading, challenge, stderr, stdout } = this.props;
    return (
      <>
      {isLoading ?
          // <h1>loading</h1>
          <Loading/>
        :
      <Challenge challenge={challenge} solution={solution} handleSubmit={this.handleSubmit}  checkResult={this.checkResult} stderr={stderr} stdout={stdout} />
        }
      </>
    )
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
  userId:  store.auth.user ? store.auth.user._id : "",
  token: store.auth.token,
  msg: store.challengeDetails.msg,
})


export default connect(mapStateToProps, mapDispatchToProps)(ChallengesContainer)
