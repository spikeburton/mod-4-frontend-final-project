import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class Navbar extends Component {
  render() {
    return (
      <Menu pointing>
        <Link to="/">
          <Menu.Item name="home">Home</Menu.Item>
        </Link>
      </Menu>
    );
  }
}

export default Navbar;
