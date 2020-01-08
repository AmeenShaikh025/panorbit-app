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
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-2">
            <h2>LOGIN</h2>
          </div>
          <div className="col-md-12">
            <User users={allUsers} />
          </div>
        </div>
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
