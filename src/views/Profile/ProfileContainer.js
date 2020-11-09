/* eslint-disable */
import React, { Component } from "react";
import Profile from "./Profile";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getUserProjectsAction, getUserChallengesAction } from "./../../store/actions/profile";

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      challenges: []
    };
  }

   componentWillMount() {
     this.props.getUserProjectsAction({userId : this.props.user_id, token: this.props.token});
     this.props.getUserChallengesAction({ userId : this.props.user_id, token: this.props.token});
}

  render() {
    const { challenges, projects, username,  user_id } = this.props;

    return (
      <>
       { !username ?
          <Redirect to="/signin" />
          :
         <Profile projects={projects} challenges={challenges} username={username} user_id={user_id}/>
       }
      </>
    )
  }
}

const mapDispatchToProps = {
  getUserProjectsAction: getUserProjectsAction,
  getUserChallengesAction: getUserChallengesAction,

}

const mapStateToProps = store => ({
  projects: store.profile.userProjects,
  challenges:store.profile.userChallenges,
  isLoading: store.profile.isLoading,
  user_id:  store.auth.user ? store.auth.user._id : "",//you might get it from auth from user object
  username: store.auth.user.username,
  token: store.auth.token,
  msg: store.profile.msg,
});

export default connect(mapStateToProps, mapDispatchToProps) (ProfileContainer);
