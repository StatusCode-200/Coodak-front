/* eslint-disable */

import React, { Component } from "react";
import CodeEditor from "./CodeEditor";
import { connect } from "react-redux";
import { getProjectAction, postProjectAction, putProjectAction } from "./../../store/actions/project.js"
import Loading from "../../components/Loading/Loading";

class CodeEdotorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {
        _id: null,
        owner_id: null,
        name: null,
        code_html: null,
        code_css: null,
        code_js: null,
      },

    };
  }

  componentWillMount() {
    if(this.props.match.params.projectId){
      this.props.getProjectAction({projectId : this.props.match.params.projectId,userId : this.props.userId, token: this.props.token});
    }else{
      this.setState({ project: {...this.state.project, owner_id: this.props.userId} });
    }
    
}

componentWillReceiveProps(nextProps){
  // set state project at the firstTime (after loaded success)
  // if (JSON.stringify(nextProps.project) !== JSON.stringify(this.props.project)){
  //   this.setState({ project: {...nextProps.project} });
  // }
  console.log("componentWillReceiveProps");
  if(this.props.match.params.projectId){
    console.log(this.props.match.params.projectId);
  this.setState({ project: {...nextProps.project} });
  }else{
    console.log("should reset it");
  }
}

  handleSubmit = (e) => {
    console.log('saved project');
    const { project } = this.state;
    const { userId, token } = this.props;
    e.preventDefault();
    if(this.props.project._id){
      this.props.putProjectAction({ project, projectId: this.props.match.params.projectId, userId, token });
    }else{
      this.props.postProjectAction({ project, userId, token });
    }
  }
  handleChange = e => {
    // console.log(' >> ', this.state);
    this.setState({ project: { ...this.state.project , [e.target.name]: e.target.value }});
  }

  onKeyUp = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.compile([event.target.name]); // code_html || code_css || code_js
  }

  compile (type, sendSocket) {
    const html = this.state.code_html;
    const css = this.state.code_css;
    const js = this.state.code_js;
    var code = document.getElementById("code").contentWindow.document;
    code.open();
    const newCode =
          html +
          "<style>" +
          css +
          "</style>" +
          "<script>" +
          js +
          "</script>";
    code.writeln(newCode);
    code.close();
    // sendSocket && socket.emit("code", { projectId: projectId.value, code: newCode });
  }

  render() {
    const { isLoading } = this.props;
    const { project } = this.state;
    console.log(' >> ', this.state);
    return (
      <>
        { isLoading ?
          // <h1>loading Project</h1>
          <Loading/>
          :
          <CodeEditor project={project} handleChange={this.handleChange} onKeyUp={this.onKeyUp} userId={this.props.userId} handleSubmit={this.handleSubmit} />
        }
      </>
    )
  }
}

const mapDispatchToProps = {
  getProjectAction: getProjectAction,
  postProjectAction: postProjectAction,
  putProjectAction: putProjectAction,
}

const mapStateToProps = store => ({
  project: store.project.project,
  isLoading: store.project.isLoading,
  userId: store.auth.user._id,//you might get it from auth from user object
  token: store.auth.token,
  msg: store.project.msg,
});

export default connect(mapStateToProps, mapDispatchToProps) (CodeEdotorContainer);
