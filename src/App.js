import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comment from "./components/Comment";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Users} />
            <Route path="/:post_id" exact component={Posts} />
            <Route path="/:post_id/:comment_id" component={Comment} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
