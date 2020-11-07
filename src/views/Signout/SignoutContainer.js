/* eslint-disable */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logoutAction } from "../../store/actions";


class SignoutContainer extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.logout();
  }

  render(){
    return (
     <>
      { !this.props.user.username ?
         <Redirect to="/" />
        :
        <h1>logout</h1>
       }
    </>
    );
  }
};

const mapStateToProps = store => ({
  user: store.auth.user
});

const mapDispatchToProps = {
  logout: logoutAction
};


export default connect(mapStateToProps, mapDispatchToProps) (SignoutContainer);
