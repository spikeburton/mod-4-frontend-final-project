import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import GameLoader from "./containers/GameLoader"
import CarCreatorContainer from "./containers/CarCreatorContainer"


class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/" component={GameLoader} />
                    <Route exact path="/create" component={CarCreatorContainer} />
                </Fragment>
            </Router>
        );
    }
}

export default App;
