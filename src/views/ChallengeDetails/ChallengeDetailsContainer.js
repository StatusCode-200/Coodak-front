/*eslint-disable */
import React, { Component } from "react";
import { connect } from "react-redux";
import Challenge from "./ChallengeDetails";
import { getChallengeAction , postChallengeAction , putChallengeAction, checkSolutionAction } from "../../store/actions/challengeDetails";
// import { defaults } from "gh-pages";
import Loading from "../../components/Loading/Loading";

 class ChallengesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      solution: null  //null //if opening saved challenge it will be fetched
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
    const { userId, token, savedChallengeId } = this.props;
    e.preventDefault();
    if(savedChallengeId){ // is Saved before to handle the first case
      this.props.putChallenge({ solution, userId, challengeId: this.props.match.params.challengeId, token });
    }else {
      this.props.postChallenge({ solution, userId, challengeId: this.props.match.params.challengeId, token });
    }
}

    checkResult = () => {
    const { solution } = this.state;
    const { userId, token } = this.props;
    const challengeId = this.props.match.params.challengeId;
      // console.log("checkResult");
      this.props.checkSolution({solution, challengeId, userId, token});
    };

  render() {
    const { solution } = this.state;
    const { isLoading, challenge, solution: propSolution, savedChallengeId, stderr, stdout } = this.props;
    return (
      <>
      {isLoading ?
          // <h1>loading</h1>
          <Loading/>
        :
      <Challenge challenge={challenge} propSolution={propSolution} savedChallengeId={savedChallengeId} solution={solution} challengeId={this.props.match.params.challengeId} handleChange={this.handleChange} handleSubmit={this.handleSubmit}  checkResult={this.checkResult} stderr={stderr} stdout={stdout} />
        }
      </>
    )
  }
}

const mapDispatchToProps = {
  getChallenge: getChallengeAction ,
  postChallenge: postChallengeAction ,
  putChallenge: putChallengeAction,
  checkSolution: checkSolutionAction,
}

const mapStateToProps = store => ({
  challenge: store.challengeDetails.challenge,
  solution: store.challengeDetails.solution,
  savedChallengeId: store.challengeDetails.savedChallengeId,
  isLoading: store.challengeDetails.isLoading,
  userId:  store.auth.user ? store.auth.user._id : "",
  token: store.auth.token,
  msg: store.challengeDetails.msg,
  stderr: store.challengeDetails.stderr,
  stdout: store.challengeDetails.stdout,
})


export default connect(mapStateToProps, mapDispatchToProps)(ChallengesContainer)
