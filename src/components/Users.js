import React, { Component } from "react";
import User from "./User";

import { connect } from "react-redux";

import { allUser } from "../actions/index";

class Users extends Component {
  componentDidMount() {
    this.props.dispatch(allUser());
  }

  render() {
    const allUsers = this.props.data.auth.users;
    return (
      <div>
        <p>Users</p>
        <User users={allUsers} />
      </div>
    );
  }
}

const mapStateToPops = state => {
  return {
    data: state
  };
};

export default connect(mapStateToPops, null)(Users);
