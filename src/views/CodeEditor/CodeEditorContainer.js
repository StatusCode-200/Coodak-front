/* eslint-disable */

import React, { Component } from "react";
import CodeEditor from "./CodeEditor";
import { connect } from "react-redux";
import { getProjectAction, postProjectAction, putProjectAction, flushProjectAction } from "./../../store/actions/project.js"
import Loading from "../../components/Loading/Loading";

class CodeEdotorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {
        name: "",
        code_html: "",
        code_css: "",
        code_js: "",
      },
    };
  }

  componentWillMount() {
    if(this.props.match.params.projectId){
      this.props.getProject({projectId : this.props.match.params.projectId,userId : this.props.userId, token: this.props.token});
    }
}

componentWillReceiveProps(nextProps){
  if (!this.props.project._id && nextProps.project._id){
    this.props.history.push(`/projects/${nextProps.project._id}`);
  } else if (!nextProps.match.params.projectId) {  // reset data on switch between opened project and code editor
     this.props.flushProject();
  }
  this.setState({ project: {...nextProps.project} });
}

  handleSubmit = (e) => {
    const { project } = this.state;
    const { userId, token } = this.props;
    e.preventDefault();
    const projectId = this.props.match.params.projectId;
    if(projectId){
      this.props.putProject({ project, projectId, userId, token });
    }else{
      this.props.postProject({ project, userId, token });
    }
  }
  handleChange = e => {
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
  getProject: getProjectAction,
  postProject: postProjectAction,
  putProject: putProjectAction,
  flushProject: flushProjectAction,
}

const mapStateToProps = store => ({
  project: store.project.project,
  insertedId: store.project.insertedId,
  isLoading: store.project.isLoading,
  userId: store.auth.user._id,//you might get it from auth from user object
  token: store.auth.token,
  msg: store.project.msg,
});

export default connect(mapStateToProps, mapDispatchToProps) (CodeEdotorContainer);
