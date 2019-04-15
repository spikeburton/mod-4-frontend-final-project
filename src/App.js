import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import GameLoader from "./containers/GameLoader";
import CarCreatorContainer from "./containers/CarCreatorContainer";
import GameContainer from "./containers/GameContainer";

class App extends Component {

  state = {
    selectedCar: null
  }

  getCarSelected = (car) => {
      console.log("selected", car)
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route
            exact
            path="/"
            render={props => {
              return localStorage.getItem("token") ? (
                <GameLoader {...props} getCarSelected={this.getCarSelected} />
              ) : (
                <Login {...props} />
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
