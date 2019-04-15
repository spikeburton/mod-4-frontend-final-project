import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import GameLoader from "./containers/GameLoader";
import CarCreatorContainer from "./containers/CarCreatorContainer";
import GameContainer from "./containers/GameContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route
            exact
            path="/"
            render={props => {
              return localStorage.getItem("token") ? (
                <GameLoader {...props} />
              ) : (
                <Login {...props} />
              );
            }}
          />
          <Route exact path="/create" component={CarCreatorContainer} />
          <Route
            exact
            path="/game"
            render={props => {
              return localStorage.getItem("car") ? (
                <GameContainer {...props} />
              ) : (
                <Redirect to="/" />
              );
            }}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
