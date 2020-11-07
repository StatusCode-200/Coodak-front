/*eslint-disable */
import React, { Component } from "react";
import WhiteBoard from "./WhiteBoard";
import { connect } from "react-redux";
import { getWhiteboradAction, postWhiteboardAction, putWhiteboardAction } from "./../../store/actions/whiteboard.js"

class WhiteBoardContainer extends Component {
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
      savedChallengeId: "987",// it will be getted from route(link) (this.props.match.params.savedChallengeId)
    };
  }

  async componentWillMount() {
    await this.props.getWhiteboradAction({savedChallengeId : this.props.match.params.savedChallengeId,userId : this.props.userId, token: this.props.token});
    this.setState({whiteboard: this.props.whiteboard, savedChallengeId: this.props.match.params.savedChallengeId});
    console.log("componentWillMount---------------------");
    console.log("inside componentWillMount this.props.whiteboard",this.props.whiteboard);
}

  handleChange = e => {
    this.setState({ whiteboard: {...this.state.whiteboard, [e.target.name]: e.target.value}});

  }

  handleSubmit = e => {
    // const { whiteboard, savedChallengeId } = this.state;
    // const userId = this.props.userId;
    // e.preventDefault();
    // console.log("whiteboard data to be sent>>>>", this.state.whiteboard);
    // // do a fetch to send data to the server then redirect to some page
    // if(this.props.whiteboard){
    //   this.props.putWhiteboardAction({ whiteboard, savedChallengeId, userId });
    // }else{
    //   this.props.postWhiteboardAction({ whiteboard, savedChallengeId, userId });
    // }
    e.preventDefault();
    console.log(this.state);
    console.log("---------");
    console.log(this.props.whiteboard);
  }

  render() {
    console.log("after render---this.state--->",this.state);
    // const { whiteboard, savedChallengeId } = this.state;
    return <WhiteBoard whiteboard={this.state.whiteboard} savedChallengeId={this.state.savedChallengeId} userId={this.props.userId} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />;
  }
}

const mapDispatchToProps = {
  getWhiteboradAction: getWhiteboradAction,
  postWhiteboardAction: postWhiteboardAction,
  putWhiteboardAction: putWhiteboardAction,
}

const mapStateToProps = store => ({
  whiteboard: store.whiteboard.whiteboard,
  savedChallengeId:store.whiteboard.savedChallengeId,
  isLoading: store.whiteboard.isLoading,
  userId: store.auth.user._id,//you might get it from auth from user object
  token: store.auth.token,
  msg: store.whiteboard.msg,
});

export default connect(mapStateToProps, mapDispatchToProps) (WhiteBoardContainer);
