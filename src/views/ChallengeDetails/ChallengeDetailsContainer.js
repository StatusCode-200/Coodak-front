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
      solution: null,  //null //if opening saved challenge it will be fetched
      //saved
      stderr: "your solution is wrong because of the following test cases : bla bla bla",  //null untill the check button is pressed then if there is error or solution is false then goes here
      stdout: "your solution have passed the following test cases",  //null untill the check button is pressed then if solution is true then goes here
    };

  }

   componentWillMount() {
    this.props.getChallenge({ challengeId: this.props.match.params.challengeId , userId: this.props.userId, token: this.props.token});
  }

  componentWillReceiveProps(nextProps){
    // set Once => after loading
    if (!nextProps.isLoading && (nextProps.isLoading !== this.props.isLoading)){
      console.log("set solution");
      this.setState({ solution: nextProps.solution || nextProps.challenge.starter_code })
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    const { solution } = this.state;
    const { userId, token } = this.props;
    e.preventDefault();
    if(this.props.solution){
      this.props.putChallenge({ solution, userId, challengeId: this.props.match.params.challengeId, token });
    }else {
      this.props.postChallenge({ solution, userId, challengeId: this.props.match.params.challengeId, token });
    }
}

    checkResult = () => {
      console.log("checkResult");
    };

  render() {
    const { solution } = this.state;
    const { isLoading, challenge, stderr, stdout } = this.props;
    return (
      <>
      {isLoading ?
          <h1>loading</h1>
        :
      <Challenge challenge={challenge} solution={solution} challengeId={this.props.match.params.challengeId} handleChange={this.handleChange} handleSubmit={this.handleSubmit}  checkResult={this.checkResult} stderr={stderr} stdout={stdout} />
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
  solution: store.challengeDetails.solution,
  isLoading: store.challengeDetails.isLoading,
  userId:  store.auth.user ? store.auth.user._id : "",
  token: store.auth.token,
  msg: store.challengeDetails.msg,
})


export default connect(mapStateToProps, mapDispatchToProps)(ChallengesContainer)
