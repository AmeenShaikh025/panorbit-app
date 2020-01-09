import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { allComments } from "../actions/index";
import back from "../assets/back.png";

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
    console.log(commentList);
    console.log(this.props.data);
    const comment = commentList.map(comment => {
      return (
        <div className="row my-3" key={comment.postId}>
          <div className="col-5 col-md-2">
            <img
              src={comment.profilePicture}
              alt={comment.body}
              width="120"
              height="120"
              className="rounded-circle"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-7 col-md-10 text-left m-auto">
            <p>{comment.body}</p>
          </div>
        </div>
      );
    });

    return (
      <div>
        <nav className="navbar navbar-dark white fixed-top">
          <a className="navbar-brand" href={void 0}>
            <img
              src={back}
              height="15"
              alt="Back"
              onClick={this.props.history.goBack}
            />{" "}
            <span className="blue-grey-text">Comments</span>
          </a>
        </nav>
        <div className="container" style={{ marginTop: 80, marginBottom: 80 }}>
          {comment}
        </div>
        <nav className="navbar navbar-dark justify-content-between white fixed-bottom">
          <a className="navbar-brand" href={void 0}>
            User
          </a>
          <form className="form-inline">
            <div className="md-form form-sm my-0">
              <input
                className="form-control form-control-sm mr-sm-2 mb-0"
                type="text"
                placeholder="Add a Comment"
              />
            </div>
            <button type="button" className="btn btn-link">
              Post
            </button>
          </form>
        </nav>
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
