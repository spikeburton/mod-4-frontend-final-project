import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import "../stylesheets/Login-SignUp/Login-SignUp.css";
import { API } from "../data";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(
    //   "Submitted Form",
    //   e.target.username.value,
    //   e.target.password.value
    // );
    fetch(`${API}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ user: this.state })
    })
      .then(response => response.json())
      .then(payload => {
        if (payload.error) console.log(payload.error);
        else {
          console.log("login successful");
          localStorage.setItem("token", payload.jwt);
          this.props.history.push("/");
        }
      });

    e.target.reset();
  };

  render() {
    return (
      <div className="login-form">
        <Grid className="grid-login" textAlign="center" verticalAlign="middle">
          <Grid.Column className="grid-column-login">
            <Header as="h2" color="blue" textAlign="center">
              <Image src={require("../images/logo.png")} /> Log-in to your
              account
            </Header>

            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  name="username"
                  type="text"
                  placeholder="Username..."
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  name="password"
                  type="password"
                  placeholder="Password..."
                  onChange={this.handleChange}
                />
                <Button color="blue" type="submit" fluid size="large">
                  Login
                </Button>
              </Segment>
            </Form>

            <Message>
              Never Played? <a href="/signup"> Create Account!</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default Login;
