/*eslint-disable*/
import React, { Component } from 'react';
import Comment from "./Comment";

export default class CommentContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [{
                comment: "this laith comment",
                user_id: { username: 'laith' }
            }, {
                comment: "this samara comment",
                user_id: { username: 'samara' }
            }],

        };
    }
    render() {

        return <Comment comments={this.state.comments}/>

    }

}

