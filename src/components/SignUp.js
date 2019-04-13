import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from "semantic-ui-react";
import "../stylesheets/Login-SignUp/Login-SignUp.css";

class SignUp extends React.Component {

    render() {
        return (
            <div>
                <form onSubmit={(e) => { e.preventDefault(); console.log("Submited SignUp") }} >
                    <input name="username" type="text" placeholder="Username..." />
                    <br />
                    <input name="password" type="password" placeholder="Password..." />
                    <br />
                    <input name="password_validate" type="password"  placeholder="Validate Password..." />
                    <br />
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        )
    }
}

export default SignUp