import React from "react";
import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";
import "../stylesheets/Login-SignUp/Login-SignUp.css";

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
    console.log(this.state)
  };

  render() {
    return (
      <div className="signup-form">
        <Grid textAlign="center" verticalAlign="middle" className="grid-signup">
          <Grid.Column className="grid-column-signup">
            <Header as="h2" color="blue" textAlign="center">
              <Image src={require("../images/logo.png")} /> Sign Up for an
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
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
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
