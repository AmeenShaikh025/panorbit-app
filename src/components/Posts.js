import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { allPosts, allComments } from "../actions/index";

import Commentcount from "./Commentcount";

class Posts extends Component {
  componentDidMount() {
    this.props.dispatch(allPosts());
  }

  render() {
    const currentId = Number(this.props.match.params.post_id);
    const postsList = this.props.data.auth.posts;
    const commentList = this.props.data.auth.comments;
    const users = this.props.data.auth.users;
    const getCurrentUser = users.filter(user => Number(user.id) === currentId);

    const selectedPosts = postsList.filter(
      post => Number(post.userId) === currentId
    );
    const allSelectedPosts = selectedPosts.map(post => {
      return (
        <div key={post.id}>
          <p>{post.body}</p>
          <img src={post.image} alt={post.title} width="100" height="100" />
          <p>id: {post.id}</p>
          <p>{post.time}</p>
          <p>{post.title}</p>
          <p>user id {post.userId}</p>
          <Commentcount post={post.id} />
          <Link to={"/post/" + post.id}>Add Comment</Link>
        </div>
      );
    });

    //commentList.filter( comment=> comment.postId === post.id)

    //console.log(this.props.data.auth.comments);

    return (
      <div>
        <h1>My Posts </h1>
        {/* {getCurrentUser[0].profilepicture == "undefined" ? (
          <h1>hi</h1>
        ) : (
          <h1>bye</h1>
        )} */}
        <img
          src={getCurrentUser[0].profilepicture}
          alt={getCurrentUser[0].username}
          width="120"
          height="120"
        />
        {allSelectedPosts}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state
  };
};

export default connect(mapStateToProps, null)(Posts);
