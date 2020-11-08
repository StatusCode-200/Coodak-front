/* eslint-disable */
import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProjectsAction, getUserChallengesAction } from "./../../store/actions/profile";

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          _id: "111",
          project_name: "pro1",
        },
      ],
      challenges: [
        {
          _id: "222",
          user_id: "000",
          challenge_name: "cha1",
        },
      ],
      username: "Samara",
      user_id: "000",
    };
  }

   componentWillMount() {
    console.log('this.propssssss');
     this.props.getUserProjectsAction({userId : this.props.user_id, token: this.props.token});
    // console.log('this.propssssss', this.props);
     this.props.getUserChallengesAction({ userId : this.props.user_id, token: this.props.token});
    // console.log('this.propssssss222', this.props)
    // this.setState({projects: this.props.projects, challenges: this.props.challenges});
    console.log("componentWillMount---------------------");
    console.log("inside componentWillMount this.props.challenges",this.props.challenges);
    console.log("inside componentWillMount this.props.projects",this.props.projects);
}

  render() {
    console.log('this.propssssss');
    console.log('after render', this.props);
    const { challenges, projects, username,  user_id } = this.props;


    return <Profile projects={projects} challenges={challenges} username={username} user_id={user_id}/>;
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
  user_id: store.auth.user._id,//you might get it from auth from user object
  username: store.auth.user.username,
  token: store.auth.token,
  msg: store.profile.msg,
});

export default connect(mapStateToProps, mapDispatchToProps) (ProfileContainer);
