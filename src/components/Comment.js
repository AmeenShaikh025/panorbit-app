import React, { Component } from "react";
import { connect } from "react-redux";

import { allComments, allUser } from "../actions/index";
import back from "../assets/back.png";

import FlipMove from "react-flip-move";

class Comment extends Component {
  componentDidMount() {
    this.props.dispatch(allUser());
    this.props.dispatch(allComments());
  }
  constructor(props) {
    super(props);
    this.commentedUser = React.createRef();
    this.state = {
      items: [],
      currentItem: {
        usercomment: "",
        userimg: null
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          usercomment: "",
          userimg: null
        }
      });
    }
  };

  handleChange = e => {
    this.setState({
      currentItem: {
        usercomment: e.target.value,
        userimg: this.commentedUser.current.src
      }
    });
  };

  render() {
    const commentId = Number(this.props.match.params.comment_id);
    const post_id = Number(this.props.match.params.post_id);
    const allComments = this.props.data.auth.comments;
    const allUsers = this.props.data.auth.users;

    const commentList = allComments.filter(
      comment => comment.postId !== commentId
    );

    const currentUser = allUsers.filter(user => user.id === post_id);

    const comment = commentList.map(comment => {
      return (
        <div className="row my-3" key={comment.postId}>
          <div className="col-5 col-md-2">
            <img
              src={comment.profilePicture}
              alt={comment.body}
              width="40"
              height="40"
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

    const newComment = this.state.items.map((item, index) => {
      return (
        <div className="row my-3" key={index}>
          <div className="col-5 col-md-2">
            <img
              src={item.userimg}
              alt={item.userimg}
              width="40"
              height="40"
              className="rounded-circle"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-7 col-md-10 text-left m-auto">
            <p>{item.usercomment}</p>
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
              height="20"
              alt="Back"
              onClick={this.props.history.goBack}
            />{" "}
            <span className="blue-grey-text">Comments</span>
          </a>
        </nav>
        <div className="container" style={{ marginTop: 80, marginBottom: 150 }}>
          {comment}
          <FlipMove duration={600} easing="ease-in-out">
            {newComment}
          </FlipMove>
        </div>

        <form className="row white fixed-bottom" onSubmit={this.handleSubmit}>
          <div className="col-2 m-auto">
            <img
              src={currentUser[0].profilepicture}
              alt={currentUser[0].username}
              className="rounded-circle z-depth-0"
              height="35"
              width="35"
              style={{ objectFit: "cover" }}
              ref={this.commentedUser}
            />
          </div>
          <div className="col-6 m-auto">
            <div className="md-form">
              <input
                type="text"
                className="form-control"
                placeholder="Add a Comment"
                onChange={this.handleChange}
                value={this.state.currentItem.usercomment}
              />
            </div>
          </div>
          <div className="col-2 m-auto">
            <button type="submit" className="btn btn-link">
              Post
            </button>
          </div>
        </form>
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
