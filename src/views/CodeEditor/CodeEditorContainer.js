/* eslint-disable */

import React, { Component } from "react";
import CodeEditor from "./CodeEditor";

export default class CodeEdotorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code_html: "",
      code_css: "",
      code_js: "",
      project: {
        _id: "",
        id: "",
        name: "",
        code_html: "",
        code_css: "",
        code_js: "",
      },
      userId: "",
    };
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
    const { project } = this.state;
    const { userId } = this.state;
    return <CodeEditor project={project} onKeyUp={this.onKeyUp} userId={userId} />;
  }
}
