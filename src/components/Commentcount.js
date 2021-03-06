import React, { Component } from "react";
import { connect } from "react-redux";

import { allComments } from "../actions/index";

class Commentcount extends Component {
  componentDidMount() {
    this.props.dispatch(allComments());
  }

  render() {
    const postId = this.props.post;
    const allComments = this.props.data.auth.comments;
    const commentList = allComments.filter(
      comment => comment.postId !== postId
    );
    const count = commentList.length;
    return (
      <span>
        {count} <span className="d-none d-sm-inline">Comments</span>
      </span>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state
  };
};
export default connect(mapStateToProps, null)(Commentcount);
