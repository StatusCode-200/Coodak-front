/* eslint-disable */
import React, { Component } from "react";
import Challenges from "./Challenges";
import { connect } from "react-redux";
import { getChallengesAction } from "./../../store/actions/challenges.js"

class ChallengesContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getChallengesAction({ token: this.props.token });
}

  render() {
    const { challenges } = this.props;
    return <Challenges challenges={challenges} />;
  }
}

const mapDispatchToProps = {
  getChallengesAction: getChallengesAction,
}

const mapStateToProps = store => ({
  challenges: store.challenges.challenges,
  isLoading: store.challenges.isLoading,
  userId: store.auth.user._id,
  token: store.auth.token,
  msg: store.whiteboard.msg,
});

export default connect(mapStateToProps, mapDispatchToProps) (ChallengesContainer);
