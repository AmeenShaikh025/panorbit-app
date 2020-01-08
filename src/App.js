import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./components/Users";
import Posts from "./components/Posts";

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" exact>
                <Users />
              </Route>
              <Route path="/posts">
                <Posts />
              </Route>
              {/* <Route path="/posts">
                <Comments />
              </Route> */}
            </Switch>  
          </div>
        </Router>
      );
  }
}

export default App;
