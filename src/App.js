import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom"
import Login from "./components/Login"


class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Route exact path="/" component={Login} />
                </Fragment>
            </Router>
        );
    }
}

export default App;
