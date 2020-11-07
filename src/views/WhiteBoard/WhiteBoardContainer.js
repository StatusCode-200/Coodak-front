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

  async componentDidMount() {
    console.log("componentDidMount !!!! ")
    // get whiteboard data from API
    let fetchedWhiteBoardData = this.props.getWhiteboradAction({savedChallengeId : this.props.match.params.savedChallengeId,userId : this.props.userId});
    console.log("whiteboard data", fetchedWhiteBoardData);
    this.setState({whiteboard: fetchedWhiteBoardData, savedChallengeId: this.props.match.params.savedChallengeId});
}

  handleChange = e => {
    this.setState({ whiteboard: {...this.state.whiteboard, [e.target.name]: e.target.value}});
    
  }

  handleSubmit = e => {
    const { whiteboard, savedChallengeId, userId } = this.state;
    e.preventDefault();
    console.log("whiteboard data to be sent>>>>", this.state.whiteboard);
    // do a fetch to send data to the server then redirect to some page
    if(this.props.whiteboard){
      this.props.putWhiteboardAction({ whiteboard, savedChallengeId, userId });
    }else{
      this.props.postWhiteboardAction({ whiteboard, savedChallengeId, userId });
    }
    
  }

  render() {
    console.log('this.state >>', this.state);
    const { whiteboard, savedChallengeId } = this.state;
    return <WhiteBoard whiteboard={whiteboard} savedChallengeId={savedChallengeId} userId={this.props.userId} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />;
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
  msg: store.whiteboard.msg,
});

export default connect(mapStateToProps, mapDispatchToProps) (WhiteBoardContainer);