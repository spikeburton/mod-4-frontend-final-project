import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class Navbar extends Component {
  render() {
    const { active } = this.props;

    return (
      <Menu secondary color="blue">
        <Link to="/">
          <Menu.Item
            name="home"
            active={active === "home"}
            // onClick={this.handleClick}
          />
        </Link>
        <Link to="/create">
          <Menu.Item
            name="create"
            active={active === "create"}
            // onClick={this.handleClick}
          />
        </Link>
        <Menu.Menu position="right">
          {localStorage.getItem("token") ? (
            <Link
              to="/login"
              className="item"
              onClick={() => localStorage.clear()}
            >
              <div className="content">Log Out</div>
            </Link>
          ) : (
            <Fragment>
              <Link
                to="/signup"
                className={active === "signup" ? "item active" : "item"}
              >
                <div className="content">Sign Up</div>
              </Link>
              <Link
                to="/login"
                className={active === "login" ? "item active" : "item"}
              >
                <div className="content">Log In</div>
              </Link>
            </Fragment>
          )}
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Navbar;
