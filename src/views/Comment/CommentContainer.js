/*eslint-disable*/
import React, { Component } from 'react';
import Comment from "./Comment";
import { connect } from "react-redux";
import { getCommentAction, postCommentAction } from "../../store/actions/comment";


class CommentContainer extends Component {
         
    constructor(props) {
        super(props);
        this.state = {
            comments: [{
                  comment: " this laith comment",
                user_id: { username: 'laith' },
                img: "https://scontent.famm7-1.fna.fbcdn.net/v/t1.0-9/86350030_3470825132991932_1973381702638108672_n.jpg?_nc_cat=100&ccb=2&_nc_sid=174925&_nc_eui2=AeHY_R11vg6M-5QKbiYEusraV7Qsf8I7xY5XtCx_wjvFjmrejAVrHfh5kWRXkr5AuVPYj6qyqTo-2T8i6GpY1RkQ&_nc_ohc=cec3qXjHG_gAX_II8a1&_nc_ht=scontent.famm7-1.fna&oh=d58f4e76e8fe09d1cf27c1737d7cc4c6&oe=5FCC5D49",
                time: new Date().toDateString(),
            }],
            savedChallengeId: null,
            userId: "111"

        };
    }

    componentWillMount() {
        this.props.getComment({ savedChallengeId: this.props.match.params.savedChallengeId, userId: this.props.userId, token: this.props.token })
    }

    handleChange = e => {
        this.setState({ comments: { ...this.state.comments, [e.target.name]: e.target.value } });
        console.log('this.state >>', this.state);

    }

    handleSubmit = e => {
        const { comments , savedChallengeId } = this.state;
        const userId = this.props.userId;
        e.preventDefault();
        if(!this.props.comments){
            this.props.postComment({ comments , savedChallengeId , userId})
        }
    }

    render() {
        console.log('props in comment >>', this.props);
        // const { comments, userId, savedChallengeId } = this.props;

        return <Comment comments={this.state.comments} userId={this.props.userId} savedChallengeId={this.props.savedChallengeId} />

    }

}

const mapDispatchToProps = {
    getComment: getCommentAction,
    postComment: postCommentAction
}


const mapStateToProps = store => ({
    comments: store.comments.comments,
    isLoading: store.comments.isLoading,
    userId: store.auth.user._id,
    token: store.auth.token,
    msg: store.comments.msg,
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer)