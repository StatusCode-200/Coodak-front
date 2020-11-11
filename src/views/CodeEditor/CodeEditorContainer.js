/* eslint-disable */

import React, { Component } from "react";
import CodeEditor from "./CodeEditor";
import { connect } from "react-redux";
import io from 'socket.io-client';
import { getProjectAction, postProjectAction, putProjectAction, flushProjectAction } from "./../../store/actions/project.js"
import Loading from "../../components/Loading/Loading";

import { API } from "../../store/config";

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
      isDataChanged: false,
      socket: "",
    };
  }

  componentWillMount() {
    if(this.props.match.params.projectId){
      const projectId =  this.props.match.params.projectId;
      this.props.getProject({projectId, userId : this.props.userId, token: this.props.token});

      const socket =  io(API);


    if(projectId){
     socket.emit("join", projectId);
   }

   socket.on('error', function(data){
     console.log("error",  data);
   });

    socket.on('connect', function(){
      console.log("connected");
    });

    socket.on('code', ({ html, css, js }) => {
      console.log("receiveCode", { html, css, js });
      this.setState({ project: { ...this.state.project ,
          code_html: html !== undefined ? html : this.state.project.code_html,
          code_css: css !== undefined ? css : this.state.project.code_css,
          code_js: js !== undefined ? js : this.state.project.code_js,
       },
       isDataChanged: false,
     });
    });

    socket.on('disconnect', function(){
      console.log("disconnected");
    });

    this.setState({ socket });

  }
}

  componentWillUnmount(){
      if(this.state.socket){
      this.state.socket.disconnect();
    }
  }

componentWillReceiveProps(nextProps){
  if (!this.props.project._id && nextProps.project._id){
    this.props.history.push(`/projects/${nextProps.project._id}`);
  } else if (!nextProps.match.params.projectId) {  // reset data on switch between opened project and code editor
     this.props.flushProject();
  }
   this.setState({ project: {...nextProps.project}, isDataChanged: false }); // onLoading don't send the data on Socket
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
    this.setState({ isDataChanged: true, project: { ...this.state.project , [e.target.name]: e.target.value }});
  }

componentDidUpdate(prevProps, prevState, snapshot){
  if (!prevState.isDataChanged){
    this.compile("all", false); // don't send the loaded from database data
  } else { // can sendSocket
    if (prevState.project.code_html !== this.state.project.code_html){
      this.compile("html", true); // if no prevProps means
    }
    if (prevState.project.code_css !== this.state.project.code_css){
      this.compile("css", true);
    }
    if (prevState.project.code_js !== this.state.project.code_js){
      this.compile("js", true);
    }
  }
}

  compile(type, sendSocket) {
    console.log("compile", "type", type, "sendSocket", sendSocket);
    const projectId = this.props.match.params.projectId;

    const html = this.state.project.code_html;
    const css = this.state.project.code_css;
    const js = this.state.project.code_js;
    const codePacket = {};
    switch(type){
      case "html": {
        codePacket.html = html;
      }
      break;
      case "css": {
        codePacket.css = css;
      }
      break;
      case "js": {
        codePacket.js = js;
      }
    }

    console.log("codePacket", codePacket);

    var codeIframe = document.getElementById("code");
    if (codeIframe){
      var code = codeIframe.contentWindow.document;
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
      sendSocket && this.state.socket && this.state.socket.emit("code", { projectId, code: codePacket });
    } else {
      console.log("iframe not loaded");
    }
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
          <CodeEditor project={project} handleChange={this.handleChange} userId={this.props.userId} handleSubmit={this.handleSubmit} />
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
