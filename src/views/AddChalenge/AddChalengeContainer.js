/*eslint-disable */
import React, { Component } from "react";
import AddChallenge from "./AddChalenge";
import { connect } from "react-redux";
import { postChallengeAction } from "./../../store/actions/addChallenge.js"


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
        console.log('this.state >>', this.state);
    }

    handleSubmit = e => {
        e.preventDefault();
        const challenge = this.state;
        // if(challenge.name && challenge.summary && challenge.description && challenge.starter_code && challenge.test){
            console.log('start submitting'); 
            this.props.postChallengeAction({ challenge, token: this.props.token });
        // }
        // console.log('no submit brcause of missing fields');

    }

    render() {
        console.log('props in AddChallenge container >>', this.props);

        return <AddChallenge handleChange={this.handleChange} handleSubmit={this.handleSubmit} />;
    }
}

const mapDispatchToProps = {
    postChallengeAction: postChallengeAction,
  }
  
  const mapStateToProps = store => ({
    isLoading: store.whiteboard.isLoading,
    //userId: store.auth.user._id,//you might get it from auth from user object
    token: store.auth.token,
    msg: store.whiteboard.msg,
  });
  
  export default connect(mapStateToProps, mapDispatchToProps) (AddChallengeContainer);