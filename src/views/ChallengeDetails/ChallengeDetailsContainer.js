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
        stderr: "your solution is wrong because of the following test cases : bla bla bla",  //null untill the check button is pressed then if there is error or solution is false then goes here
        stdout: "your solution have passed the following test cases",  //null untill the check button is pressed then if solution is true then goes here
    };

  }

  async componentWillMount() {
    await this.props.getChallengeAction({ savedChallengeId: this.props.match.params.savedChallengeId , userId: this.props.userId, token: this.props.token});
    this.setState({challenge: this.props.challenge, savedChallengeId: this.props.match.params.savedChallengeId});
    console.log("componentWillMount---------------------");
    console.log("inside componentWillMount this.props.challenge",this.props.challenge);
  }

  handleChange = e => {
    this.setState({ challenge: { ...this.state.challenge ,  [e.target.name]: e.target.value }});
    console.log('this.state >>', this.state);
  }

  handleSubmit = e => {
    const { challenge , savedChallengeId} = this.state; 
    const userId = this.props.userId;
    e.preventDefault();
    if(this.props.challenge){
      this.props.putChallengeAction({ challenge , savedChallengeId , userId });
    }else {
      this.props.postChallengeAction({ challenge, savedChallengeId , userId });
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
    console.log('props in details >>', this.props);
    const { challenge, solution, userId, savedChallengeId, stderr, stdout } = this.state;
    return <Challenge challenge={challenge} solution={solution} userId={userId} savedChallengeId={savedChallengeId} stderr={stderr} stdout={stdout} />;
  }
}

const mapDispatchToProps = {
  getChallengeAction: getChallengeAction , 
  postChallengeAction: postChallengeAction ,
  putChallengeAction: putChallengeAction,
}

const mapStateToProps = store => ({
  challenge: store.challenge.challenge, 
  savedChallengeId:store.challenge.savedChallengeId,
  isLoading: store.challenge.isLoading,
  userId: store.auth.user._id,
  token: store.auth.token,
  msg: store.challenge.msg,
})


export default connect(mapStateToProps, mapDispatchToProps)(ChallengesContainer)







