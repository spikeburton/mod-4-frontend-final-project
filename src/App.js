import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import GameLoader from "./containers/GameLoader";
import CarCreatorContainer from "./containers/CarCreatorContainer";
import GameContainer from "./containers/GameContainer";

class App extends Component {
  state = {
    user: null
  };

  setUser = user => {
    // WITH DESTRUCTURING:
    // this.setState({ user })
    this.setState({ user: user });
  };

  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/login" render={props => <Login {...props} setUser={this.setUser} />} />
          <Route exact path="/signup" component={SignUp} />
          <Route
            exact
            path="/"
            render={props => {
              return localStorage.getItem("token") ? (
                <GameLoader {...props} user={this.state.user}  />
              ) : (
                <Login setUser={this.setUser} />
              );
            }}
          />
          <Route exact path="/create" component={CarCreatorContainer} />
          <Route exact path="/game" component={GameContainer} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
