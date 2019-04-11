import React from 'react';

class Login extends React.Component {

    render() {
        return (
            <div>
                <form onSubmit={(e) => {e.preventDefault(); console.log("Submited Login") }} >
                    <input name="username" type="text" label="Username" placeholder="Username..." />
                    <input name="password" type="password" label="Password" placeholder="Password..." />
                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }
}

export default Login;