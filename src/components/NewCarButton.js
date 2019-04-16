import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NewCarButton = () => {
  return (
    <Link to="/create">
      <Button>New Car</Button>
    </Link>
  );
};

export default NewCarButton;
