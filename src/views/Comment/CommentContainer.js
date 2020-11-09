/*eslint-disable*/
import React, { Component } from 'react';
import Comment from "./Comment";
import { connect } from "react-redux";
import { getCommentAction, postCommentAction } from "../../store/actions/comment";


class CommentContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // comments: [{
            //     comment: " this laith comment",
            //     user_id: { username: 'laith' },
            //     img: "https://scontent.famm7-1.fna.fbcdn.net/v/t1.0-9/86350030_3470825132991932_1973381702638108672_n.jpg?_nc_cat=100&ccb=2&_nc_sid=174925&_nc_eui2=AeHY_R11vg6M-5QKbiYEusraV7Qsf8I7xY5XtCx_wjvFjmrejAVrHfh5kWRXkr5AuVPYj6qyqTo-2T8i6GpY1RkQ&_nc_ohc=cec3qXjHG_gAX_II8a1&_nc_ht=scontent.famm7-1.fna&oh=d58f4e76e8fe09d1cf27c1737d7cc4c6&oe=5FCC5D49",
            //     time: new Date().toDateString(),
            // }],
            newComment: ""

        };
    }

    componentWillMount() {
        this.props.getComment({ challengeId: this.props.match.params.challengeId, userId: this.props.userId, token: this.props.token })
    }

    // componentWillReceiveProps(nextProps) {
    //     // set state comments at the firstTime (after loaded success)
    //     if (JSON.stringify(nextProps.comments) !== JSON.stringify(this.props.comments)) {
    //         this.setState({ comments: { ...nextProps.comments } })
    //     }
    // }


    handleChange = e => {
        this.setState({ newComment: e.target.value });
        console.log('this.state >>', this.state);
    }


    handleSubmit =  (e) => {
        const { newComment } = this.state;
        const { token, userId } = this.props;
        e.preventDefault();

        this.props.postComment({ newComment, challengeId: this.props.match.params.challengeId, userId, token })
       
        e.target.reset();
    }

    render() {
        console.log('props in comment >>', this.props);
        // const { comments, userId, challengeId } = this.props;

        return <Comment handleChange={this.handleChange} handleSubmit={this.handleSubmit} comments={this.props.comments} userId={this.props.userId} challengeId={this.props.challengeId} />

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