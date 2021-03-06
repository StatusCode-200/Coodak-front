/*eslint-disable */
import React, { Component } from "react";
import WhiteBoard from "./WhiteBoard";
import { connect } from "react-redux";
import { getWhiteboradAction, postWhiteboardAction, putWhiteboardAction } from "./../../store/actions/whiteboard.js"
import Loading from "../../components/Loading/Loading";

class WhiteBoardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whiteboard: {}
    };
  }

    componentWillMount() {
      this.props.getWhiteboradAction({savedChallengeId : this.props.match.params.savedChallengeId,userId : this.props.userId, token: this.props.token});
  }

  componentWillReceiveProps(nextProps){
    // set state WhiteBoard at the firstTime (after loaded success)
    if (JSON.stringify(nextProps.isLoading) !== JSON.stringify(this.props.isLoading)){
      console.log("setWhiteBoard");
      this.setState({ whiteboard: {...nextProps.whiteboard} })
    }
  }

  handleChange = e => {
    this.setState({ whiteboard: {...this.state.whiteboard, [e.target.name]: e.target.value}});

  }

  handleSubmit = e => {
    const { whiteboard } = this.state;
    const savedChallengeId =  this.props.match.params.savedChallengeId;
    const {userId } = this.props;
    e.preventDefault();
    // do a fetch to send data to the server then redirect to some page
    if(this.props.whiteboard){
      this.props.putWhiteboardAction({ whiteboard, savedChallengeId, userId, token: this.props.token });
    }else{
      this.props.postWhiteboardAction({ whiteboard, savedChallengeId, userId, token: this.props.token });
    }

  }

  render() {
    const { whiteboard } = this.state;
    const { isLoading } = this.props;
    return (
      <>
      { isLoading ?
        // <h1>loadingWhiteBoard</h1>
        <Loading />
        :
        <WhiteBoard whiteboard={whiteboard} userId={this.props.userId} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
  }
    </>
  )
}
}

const mapDispatchToProps = {
  getWhiteboradAction: getWhiteboradAction,
  postWhiteboardAction: postWhiteboardAction,
  putWhiteboardAction: putWhiteboardAction,
}

const mapStateToProps = store => ({
  whiteboard: store.whiteboard.whiteboard,
  isLoading: store.whiteboard.isLoading,
  userId: store.auth.user._id,//you might get it from auth from user object
  token: store.auth.token,
  msg: store.whiteboard.msg,
});

export default connect(mapStateToProps, mapDispatchToProps) (WhiteBoardContainer);
