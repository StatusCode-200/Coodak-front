/*eslint-disable */
import React, { Component } from "react";
import AddChallenge from "./AddChalenge";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { flushAddChallengeAction, postChallengeAction } from "./../../store/actions/addChallenge.js"


class AddChallengeContainer extends Component {

    constructor(props) {

        super(props);
        this.state = {
            name: '',
            summary: '',
            description:'',
            starter_code: '',
            test: '',
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        const challenge = this.state;
        this.props.postChallenge({ challenge, token: this.props.token });

    }

    componentWillUnmount(){
      this.props.flushAddChallenge();
    }

    render() {
      const { challengeId } = this.props;
        return (
          <>
          {challengeId ?
            <Redirect to="/challenges" />
            :
             <AddChallenge handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
           }
           </>
      )
    }
}

const mapDispatchToProps = {
    postChallenge: postChallengeAction,
    flushAddChallenge: flushAddChallengeAction,
  }

  const mapStateToProps = store => ({
    isLoading: store.addChallenge.isLoading,
    challengeId: store.addChallenge.challenge._id,
    token: store.auth.token,
    msg: store.addChallenge.msg,
  });

  export default connect(mapStateToProps, mapDispatchToProps) (AddChallengeContainer);
