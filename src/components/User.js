import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class User extends Component {
  render() {
    console.log(this.props.users);
    const userList = this.props.users.map(user => {
      return (
        <Link to="/posts" key={user.id}>
          <li currentuser={user.id}>
            <img
              src={user.profilepicture}
              alt={user.username}
              width={45}
              height={45}
            />
            {user.name}
          </li>
        </Link>
      );
    });

    return (
      <div>
        <p>User</p>
        <ul>{userList}</ul>
      </div>
    );
  }
}
export default connect()(User);
