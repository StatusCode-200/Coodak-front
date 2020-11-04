import React, { Component } from "react";
import WhiteBoard from "./WhiteBoard";

export default class WhiteBoardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whiteboard: {
        problem_domain: "adnan",
      },
    };
  }

  render() {
    const { whiteboard } = this.state;
    return <WhiteBoard whiteboard={whiteboard} />;
  }
}
