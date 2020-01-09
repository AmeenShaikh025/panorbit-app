import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { allPosts, allComments } from "../actions/index";

import Commentcount from "./Commentcount";

import hamburger from "../assets/hamburger.png";
import logo from "../assets/logo.jpg";
import like from "../assets/like.png";
import comment from "../assets/comment.png";

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
        <div className="row" key={post.id}>
          <div className="col-12 my-4">
            <h3 className="blue-grey-text font-weight-bold text-left">
              {post.title}
            </h3>
            <p className="blue-grey-text text-justify">{post.body}</p>
            <p className="text-left grey-text">{post.time}</p>
            <img
              src={post.image}
              alt={post.title}
              width="100%"
              className="img-fluid z-depth-1 rounded"
              style={{ objectFit: "cover", height: "60vh" }}
            />
            {/* <p>id: {post.id}</p> */}
            {/* <p>user id {post.userId}</p> */}
          </div>
          <div className="col-6 text-left" style={{ alignSelf: "center" }}>
            <img
              src={like}
              height="25"
              width="25"
              className="mr-2"
              alt="like"
            />
            <Link to={"/post/" + post.id} className=" grey-text">
              <img
                src={comment}
                height="25"
                width="25"
                className="mr-2"
                alt="comment"
              />
              <Commentcount post={post.id} />
            </Link>
          </div>
          <div className="col-6 text-right" style={{ alignSelf: "center" }}>
            <Link to={"/post/" + post.id} className=" grey-text">
              Add Comment
            </Link>
            <img
              src={getCurrentUser[0].profilepicture}
              alt={getCurrentUser[0].username}
              className="rounded-circle z-depth-0 ml-2"
              height="35"
              width="35"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      );
    });

    //commentList.filter( comment=> comment.postId === post.id)

    //console.log(this.props.data.auth.comments);

    return (
      <div>
        <nav className="mb-1 navbar navbar-expand-lg navbar-dark white lighten-1 shadow-0 fixed-top">
          <a className="navbar-brand" href={void 0}>
            <img src={hamburger} height="10" width="15" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent-555"
            aria-controls="navbarSupportedContent-555"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent-555"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href={void 0}>
                  <img src={logo} alt="logo" />
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto nav-flex-icons">
              <li className="nav-item avatar">
                <img
                  src={getCurrentUser[0].profilepicture}
                  alt={getCurrentUser[0].username}
                  className="rounded-circle z-depth-0"
                  height="35"
                  width="35"
                  style={{ objectFit: "cover" }}
                  onClick={this.props.history.goBack}
                />
              </li>
            </ul>
          </div>
        </nav>

        <div className="container" style={{ marginTop: 80 }}>
          <div className="row my-2">
            <div className="col-5 col-md-2">
              <img
                src={getCurrentUser[0].profilepicture}
                alt={getCurrentUser[0].username}
                width="120"
                height="120"
                className="rounded-circle"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="col-7 col-md-10 text-left m-auto">
              <h4>by {getCurrentUser[0].username}</h4>
            </div>
          </div>
          {allSelectedPosts}
        </div>
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
