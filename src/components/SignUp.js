import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message
} from "semantic-ui-react";
import { API } from "../data";
import "../stylesheets/Login-SignUp/Login-SignUp.css";
import Navbar from "./Navbar";

class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
    password_confirmation: ""
  };

  // iconChange = (e) => {
  //     console.log(e.target.value)
  //     let iconVar = null
  //     if (e !== undefined) {
  //         iconVar = 'lock'
  //         this.setState({ repeatpassword: e.target.value })
  //     } else {
  //         iconVar = 'unlock'
  //     }
  //     return iconVar
  // }
  handleChange = e => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // delete this.state.errors
    // console.log(this.state);
    fetch(`${API}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(response => response.json())
      .then(payload => {
        if (payload.error) {
          // payload.error.forEach(error => console.error(error));
          this.setState({ errors: payload.error });
        } else {
          localStorage.setItem("user", payload.user.id);
          localStorage.setItem("token", payload.jwt);
          this.props.history.push("/");
        }
      });

    e.target.reset();
  };

  handleReset = () => {
    // console.log("form reset");
    this.setState({
      username: "",
      password: "",
      password_confirmation: ""
    });
  };

  render() {
    return (
      <div className="form-container">
        <Navbar active="signup" />
        <div className="signup-form">
          <Grid
            textAlign="center"
            verticalAlign="middle"
            className="grid-signup"
          >
            <Grid.Column className="grid-column-signup">
              <Header as="h2" color="blue" textAlign="center">
                <Image src={require("../images/logo.png")} /> Sign Up for an
                account
              </Header>

              <Form
                className="fluid segment stacked"
                size="large"
                onSubmit={this.handleSubmit}
                onReset={this.handleReset}
              >
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
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  name="password_confirmation"
                  type="password"
                  placeholder="Confirm Password..."
                  onChange={this.handleChange}
                />
                <Button color="blue" type="submit" fluid size="large">
                  Sign Up!
                </Button>
              </Form>
              {this.state.errors ? (
                <Message
                  error
                  header="There were some errors with your submission"
                  attached="bottom"
                  list={this.state.errors}
                />
              ) : null}
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

export default SignUp;

// <div>
//     <form onSubmit={(e) => { e.preventDefault(); console.log("Submited SignUp") }} >
//         <input name="username" type="text" placeholder="Username..." />
//         <br />
//         <input name="password" type="password" placeholder="Password..." />
//         <br />
//         <input name="password_validate" type="password"  placeholder="Validate Password..." />
//         <br />
//         <input type="submit" value="Sign Up" />
//     </form>
// </div>
