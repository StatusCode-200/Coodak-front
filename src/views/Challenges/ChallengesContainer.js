import React, { Component } from "react";
import Challenges from "./Challenges";

export default class ChallengesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: [{
        name: "tree",
        summary: "implement a tree data structure with all traversal method",
        _id: "1",
      },
      {
        name: "Linked List",
        summary: "implement a Linked List structure with all traversal method",
        _id: "2",
      },
      {
        name: "Hash Table",
        summary: "implement a Hash Table data structure with all traversal method",
        _id: "3",
      },
      {
        name: "binary search tree",
        summary: "implement a bibary search tree data structure with all traversal method",
        _id: "4",
      },
      {
        name: "Bracket Matcher",
        summary: "you will determine if the brackets in a string are correctly matched up",
        _id: "5",
      },
      {
        name: " Longest Word",
        summary: "determining the largest word in a string",
        _id: "6",
      }],
    };
  }

  render() {
    const { challenges } = this.state;
    return <Challenges challenges={challenges} />;
  }
}
