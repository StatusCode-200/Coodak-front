import React, { Component } from "react";
import CodeEditor from "./CodeEditor";

export default class CodeEdotorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  componentWillMount() {
    document.body.onkeyup = function() {
      this.compile(this);
    };
  }

  compile(sendSocket) {
    const html = this.state.project.code_html;
    const css = this.state.project.code_css;
    const js = this.state.project.code_js;
    var code = document.getElementById("code").contentWindow.document;
    code.open();
    const newCode =
          html.value +
          "<style>" +
          css.value +
          "</style>" +
          "<script>" +
          js.value +
          "</script>";
    code.writeln(newCode);
    code.close();
    // sendSocket && socket.emit("code", { projectId: projectId.value, code: newCode });
  }

  render() {
    const { project } = this.state;
    const { userId } = this.state;
    return <CodeEditor project={project} userId={userId} />;
  }
}
