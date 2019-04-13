import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from "semantic-ui-react";
import "../stylesheets/Login-SignUp/Login-SignUp.css";

class SignUp extends React.Component {

    render() {
        return (
            <div className='login-form'>
                <Grid className='grid-login'textAlign='center' verticalAlign='middle'>
                    <Grid.Column className='grid-column-login'>

                        <Header as='h2' color='blue' textAlign='center'>
                            <Image src='/logo.png' /> Sign Up for an account
                        </Header>

                        <Form size='large' onSubmit={(e) => {e.preventDefault(); console.log("Submitted Form", e.target.username.value, e.target.password.value, e.target.repeat.password.value)}}>
                            <Segment stacked>
                                <Form.Input fluid icon='user' iconPosition='left' name="username" type="text" placeholder='Username...' />
                                <Form.Input fluid icon='lock' iconPosition='left' name="password" type="password" placeholder='Password...' type='password' />
                                <Form.Input fluid icon='lock' iconPosition='left' name="repeatpassword" type="confirm_password" placeholder='Confirm Password...' type='password' />
                                <Button color='blue' type="submit" fluid size='large'>Sign Up!</Button>
                            </Segment>
                        </Form>

                        <Message>Never Played? <a href='/signup'> Create Account!</a></Message>

                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default SignUp

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