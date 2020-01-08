import React, { Component } from "react";
import { connect } from "react-redux";

import { allPosts } from "../actions/index";

class Posts extends Component {
  componentDidMount() {
    this.props.dispatch(allPosts());
  }

  render() {
    console.log(this.props.data.auth.posts);
    return (
      <div>
        <h1>M/ Posts </h1>
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
