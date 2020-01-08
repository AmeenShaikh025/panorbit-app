import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class User extends Component {
  render() {
    //console.log(this.props.users);
    const userList = this.props.users.map(user => {
      return (
        <Link to={"/" + user.id} key={user.id}>
          <img
            src={user.profilepicture}
            alt={user.username}
            className="img-thumbnail rounded"
            width="200"
          ></img>
          {/* <p className="white-text">{user.name}</p> */}
        </Link>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="offset-md-3 col-md-6">{userList}</div>
        </div>
      </div>
    );
  }
}
export default connect()(User);
