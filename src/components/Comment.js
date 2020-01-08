import React, { Component } from "react";
import { connect } from "react-redux";

import { allComments } from "../actions/index";

class Comment extends Component {
  componentDidMount() {
    this.props.dispatch(allComments());
  }

  render() {
    const postId = Number(this.props.match.params.comment_id);
    //console.log(postId);
    //console.log(this.props.data.auth.comments);
    const allComments = this.props.data.auth.comments;
    const commentList = allComments.filter(
      comment => comment.postId !== postId
    );
    //console.log(commentList);
    const comment = commentList.map(comment => {
      return (
        <div key={comment.postId}>
          <p>post id {comment.postId}</p>
          <p>{comment.body}</p>
          <img
            src={comment.profilePicture}
            alt={comment.body}
            width="50"
            height="50"
          />
          <p>{comment.time}</p>
        </div>
      );
    });

    return (
      <div>
        <p>Comments</p>
        {comment}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state
  };
};

export default connect(mapStateToProps, null)(Comment);
