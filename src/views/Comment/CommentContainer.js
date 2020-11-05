/*eslint-disable*/
import React, { Component } from 'react';
import Comment from "./Comment";

export default class CommentContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'laith comment',
        };
    }
    render() {

    return <Comment />

    }

}

