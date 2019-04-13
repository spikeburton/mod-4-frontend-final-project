import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from "semantic-ui-react";
import "../stylesheets/Login-SignUp/Login-SignUp.css";

class Login extends React.Component {

    render() {
        return (
            <div className='login-form'>
                <Grid className='grid-login' textAlign='center' verticalAlign='middle'>
                    <Grid.Column className='grid-column-login'>

                        <Header as='h2' color='blue' textAlign='center'>
                            <Image src={require('../images/logo.png')} /> Log-in to your account
                        </Header>

                        <Form size='large' onSubmit={(e) => {e.preventDefault(); console.log("Submitted Form", e.target.username.value, e.target.password.value)}}>
                            <Segment stacked>
                                <Form.Input fluid icon='user' iconPosition='left' name="username" type="text" placeholder='Username...' />
                                <Form.Input fluid icon='lock' iconPosition='left' name="password" type="password" placeholder='Password...' />
                                <Button color='blue' type="submit" fluid size='large'>Login</Button>
                            </Segment>
                        </Form>

                        <Message>Never Played? <a href='/signup'> Create Account!</a></Message>

                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
export default Login
