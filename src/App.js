import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom"
import Login from "./components/Login"
import SignUp from "./components/SignUp"


class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                </Fragment>
            </Router>
        );
    }
}

export default App;
